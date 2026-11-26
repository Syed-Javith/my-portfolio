/**
 * Chat API Client Service
 * Connects to the Go Serverless API (`/api/chat`) on Vercel or local Go backend,
 * with support for Langflow endpoints and graceful client-side fallback.
 */

const API_URL =
  process.env.REACT_APP_CHAT_API_URL ||
  process.env.REACT_APP_LANGFLOW_API_URL ||
  "/api/chat";

const APPLICATION_TOKEN = process.env.REACT_APP_LANGFLOW_TOKEN;

// Local fallback portfolio knowledge base for offline testing
const fallbackResponses = [
  {
    keywords: ["experience", "zoho", "work", "job", "career"],
    reply:
      "Syed has 1.5+ years of full-time experience at Zoho Corporation as a Software Engineer / Backend Developer. He specializes in building and maintaining enterprise backend services, microservices, and high-performance database querying APIs using Java, Spring Boot, SQL, and Redis."
  },
  {
    keywords: ["skills", "tech", "stack", "technologies", "languages"],
    reply:
      "Syed's primary tech stack includes Java, Spring Boot, REST APIs, Microservices, SQL (MySQL & PostgreSQL), Redis, Apache Kafka, Docker, and Linux, with frontend skills in React.js and Tailwind CSS."
  },
  {
    keywords: ["project", "projects", "portfolio", "built"],
    reply:
      "Some of Syed's notable projects include the Deluge Code Generator (5-agent code generation pipeline in Java), AI Release Manager (VS Code CLI/extension), ClinicalTrialFlow (CTMS on Zoho Catalyst), and several full-stack applications like Recharge 24 and Student Portal."
  },
  {
    keywords: ["education", "college", "degree", "cgpa"],
    reply:
      "Syed graduated from Rajalakshmi Engineering College (2021–2025) with a B.E. in Computer Science & Engineering (CGPA: 8.82 / 10). He completed higher secondary schooling with 96.52% at AKT Academy."
  },
  {
    keywords: ["resume", "cv", "download"],
    reply:
      "You can view Syed's full resume in a new tab by clicking 'View Resume' on the hero or navbar, or directly download the PDF using the 'Download PDF' button!"
  },
  {
    keywords: ["contact", "email", "phone", "reach", "hire"],
    reply:
      "You can reach Syed directly via email at syedjavith14@gmail.com or by phone at +91 6380411427. You can also connect with him on LinkedIn at linkedin.com/in/syed-javith-r-93500a249."
  }
];

export async function sendChatMessage(userMessage) {
  // Try the Go backend API endpoint first
  if (API_URL) {
    try {
      const headers = {
        "Content-Type": "application/json"
      };

      if (APPLICATION_TOKEN) {
        headers["Authorization"] = `Bearer ${APPLICATION_TOKEN}`;
      }

      const response = await fetch(API_URL, {
        method: "POST",
        headers,
        body: JSON.stringify({
          message: userMessage,
          input_value: userMessage,
          output_type: "chat",
          input_type: "chat",
          tweaks: {}
        })
      });

      if (response.ok) {
        const data = await response.json();

        // Extract response from Go API or Langflow structure
        const text =
          data?.text ||
          data?.outputs?.[0]?.outputs?.[0]?.results?.message?.text ||
          data?.outputs?.[0]?.outputs?.[0]?.artifacts?.message ||
          data?.result?.text ||
          (typeof data === "string" ? data : null);

        if (text) {
          return { text, source: data?.source || "go-gemini" };
        }
      }
    } catch (error) {
      console.warn("API request failed, falling back to local assistant:", error);
    }
  }

  // Graceful offline simulated reply
  await new Promise((resolve) => setTimeout(resolve, 600));

  const lower = userMessage.toLowerCase();
  for (const item of fallbackResponses) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return { text: item.reply, source: "local" };
    }
  }

  return {
    text:
      "Hi! I am Syed Javith's portfolio AI assistant. Syed is a Backend Developer at Zoho Corporation with 1.5+ years of experience in Java, Spring Boot, microservices, and database optimization. Feel free to ask about his experience, technical skills, projects, or how to get in touch!",
    source: "local"
  };
}
