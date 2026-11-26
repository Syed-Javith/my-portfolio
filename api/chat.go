package handler

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
	"time"
)

// RequestPayload represents incoming chat requests
type RequestPayload struct {
	Message    string `json:"message"`
	InputValue string `json:"input_value"`
}

// ResponsePayload represents the response returned to the frontend
type ResponsePayload struct {
	Text   string `json:"text"`
	Source string `json:"source"`
	Error  string `json:"error,omitempty"`
}

// Gemini API structures
type geminiPart struct {
	Text string `json:"text"`
}

type geminiContent struct {
	Role  string       `json:"role,omitempty"`
	Parts []geminiPart `json:"parts"`
}

type geminiSystemInstruction struct {
	Parts []geminiPart `json:"parts"`
}

type geminiRequest struct {
	SystemInstruction *geminiSystemInstruction `json:"system_instruction,omitempty"`
	Contents          []geminiContent          `json:"contents"`
}

type geminiCandidate struct {
	Content struct {
		Parts []geminiPart `json:"parts"`
	} `json:"content"`
}

type geminiResponse struct {
	Candidates []geminiCandidate `json:"candidates"`
	Error      *struct {
		Code    int    `json:"code"`
		Message string `json:"message"`
	} `json:"error,omitempty"`
}

const systemPrompt = `You are the AI portfolio assistant for Syed Javith R.
Syed Javith R is a Backend Developer / Software Development Engineer at Zoho Corporation with 1.5+ years of full-time experience.

Profile Details:
- Current Role: Backend Developer / MTS at Zoho Corporation (1.5+ years). Specializes in building and scaling enterprise backend microservices, high-performance database querying APIs, and resilient data processing systems using Java, Spring Boot, SQL, and Redis.
- Technical Skills: Java, Spring Boot, REST APIs, Microservices, SQL (MySQL & PostgreSQL), Redis, Apache Kafka, Docker, Linux, Git, React.js, Tailwind CSS, Go (Golang).
- Featured Projects:
  1. Deluge Code Generator: Multi-agent AI code generation pipeline built in Java for Zoho Deluge scripts.
  2. AI Release Manager: Automated CI/CD release note and deployment tracking CLI & extension.
  3. ClinicalTrialFlow: Clinical trial management system built on Zoho Catalyst serverless stack.
  4. Recharge 24 & Student Portal: High-concurrency full-stack transaction and record management portals.
- Education: Bachelor of Engineering (B.E.) in Computer Science & Engineering from Rajalakshmi Engineering College (2021-2025), CGPA: 8.82 / 10. Higher secondary at AKT Academy with 96.52%.
- Resume: Visitors can view his resume in a new tab or download the verified PDF directly from the hero or navigation bar.
- Contact Details:
  - Email: syedjavith14@gmail.com
  - Phone: +91 6380411427
  - LinkedIn: linkedin.com/in/syed-javith-r-93500a249
  - GitHub: github.com/Syed-Javith

Guidelines:
- Answer warmly, professionally, and concisely (2 to 4 sentences maximum).
- Speak in the third person about Syed (e.g., "Syed specializes in...", "He has built...").
- If the visitor asks how to contact or hire Syed, provide his email, phone, and LinkedIn.`

// Handler is the Vercel Go Serverless Function entry point
func Handler(w http.ResponseWriter, r *http.Request) {
	// CORS headers
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
	w.Header().Set("Content-Type", "application/json")

	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}

	if r.Method != http.MethodPost {
		http.Error(w, `{"error":"Method not allowed. Use POST."}`, http.StatusMethodNotAllowed)
		return
	}

	var payload RequestPayload
	bodyBytes, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, `{"error":"Failed to read request body"}`, http.StatusBadRequest)
		return
	}

	if err := json.Unmarshal(bodyBytes, &payload); err != nil {
		http.Error(w, `{"error":"Invalid JSON payload"}`, http.StatusBadRequest)
		return
	}

	userMsg := strings.TrimSpace(payload.Message)
	if userMsg == "" {
		userMsg = strings.TrimSpace(payload.InputValue)
	}

	if userMsg == "" {
		http.Error(w, `{"error":"Message cannot be empty"}`, http.StatusBadRequest)
		return
	}

	apiKey := os.Getenv("GEMINI_API_KEY")
	if apiKey == "" {
		fallbackAnswer := getFallbackResponse(userMsg)
		json.NewEncoder(w).Encode(ResponsePayload{
			Text:   fallbackAnswer,
			Source: "fallback-go",
		})
		return
	}

	answer, err := queryGemini(userMsg, apiKey)
	if err != nil {
		fallbackAnswer := getFallbackResponse(userMsg)
		json.NewEncoder(w).Encode(ResponsePayload{
			Text:   fallbackAnswer,
			Source: "fallback-go",
		})
		return
	}

	json.NewEncoder(w).Encode(ResponsePayload{
		Text:   answer,
		Source: "gemini-go",
	})
}

func queryGemini(prompt string, apiKey string) (string, error) {
	url := fmt.Sprintf("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=%s", apiKey)

	reqData := geminiRequest{
		SystemInstruction: &geminiSystemInstruction{
			Parts: []geminiPart{
				{Text: systemPrompt},
			},
		},
		Contents: []geminiContent{
			{
				Role: "user",
				Parts: []geminiPart{
					{Text: prompt},
				},
			},
		},
	}

	jsonData, err := json.Marshal(reqData)
	if err != nil {
		return "", err
	}

	client := &http.Client{Timeout: 15 * time.Second}
	resp, err := client.Post(url, "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("gemini api returned status %d: %s", resp.StatusCode, string(respBody))
	}

	var geminiResp geminiResponse
	if err := json.Unmarshal(respBody, &geminiResp); err != nil {
		return "", err
	}

	if len(geminiResp.Candidates) > 0 && len(geminiResp.Candidates[0].Content.Parts) > 0 {
		return strings.TrimSpace(geminiResp.Candidates[0].Content.Parts[0].Text), nil
	}

	return "", fmt.Errorf("empty candidate response from gemini")
}

func getFallbackResponse(msg string) string {
	lower := strings.ToLower(msg)
	if strings.Contains(lower, "experience") || strings.Contains(lower, "zoho") || strings.Contains(lower, "work") {
		return "Syed has 1.5+ years of full-time experience at Zoho Corporation as a Backend Developer, engineering high-throughput microservices, distributed data processing, and SQL/Redis caching architectures."
	}
	if strings.Contains(lower, "skill") || strings.Contains(lower, "stack") || strings.Contains(lower, "tech") {
		return "Syed's primary technical stack includes Java, Spring Boot, Microservices, SQL (MySQL & PostgreSQL), Redis, Apache Kafka, Docker, Linux, React.js, Tailwind CSS, and Go."
	}
	if strings.Contains(lower, "project") {
		return "Syed's key projects include the Deluge Code Generator (5-agent Java generation pipeline), AI Release Manager, and ClinicalTrialFlow on Zoho Catalyst."
	}
	if strings.Contains(lower, "contact") || strings.Contains(lower, "email") || strings.Contains(lower, "hire") {
		return "You can reach Syed directly via email at syedjavith14@gmail.com, phone at +91 6380411427, or connect on LinkedIn (linkedin.com/in/syed-javith-r-93500a249)."
	}
	return "Hi! I am Syed Javith's portfolio AI assistant. Syed is a Backend Developer at Zoho Corporation with 1.5+ years of experience in Java, Spring Boot, and microservices. Feel free to ask about his experience, skills, projects, or contact details!"
}
