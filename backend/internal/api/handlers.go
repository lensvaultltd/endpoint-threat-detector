package api

import (
	"fmt"
	"net/http"
)

func HandleTelemetry(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	// Parse telemetry and send to Kafka or Postgres
	fmt.Fprintf(w, "Telemetry received securely.")
}
