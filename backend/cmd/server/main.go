package main

import (
	"fmt"
	"log"
	"net/http"
	"edr-backend/internal/api"
)

func main() {
	fmt.Println("Starting EDR Telemetry Ingestion Server on :8080")
	http.HandleFunc("/api/v1/telemetry", api.HandleTelemetry)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
