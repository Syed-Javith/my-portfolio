package main

import (
	"log"
	"net/http"
	"os"

	handler "portfolio-api/api"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	http.HandleFunc("/api/chat", handler.Handler)

	log.Printf("🚀 Syed Javith Portfolio Go Backend running on http://localhost:%s\n", port)
	log.Printf("👉 Ready to accept POST requests at http://localhost:%s/api/chat\n", port)

	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
