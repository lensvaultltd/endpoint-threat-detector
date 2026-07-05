#!/bin/bash
# Basic File Integrity Monitor (FIM)
MONITOR_DIR="/etc"
BASELINE_FILE="baseline.db"

function create_baseline() {
    echo "[*] Creating baseline..."
    find $MONITOR_DIR -type f -exec sha256sum {} \; > $BASELINE_FILE
    echo "[+] Baseline created."
}

function verify() {
    echo "[*] Verifying file integrity..."
    sha256sum -c $BASELINE_FILE --quiet
    if [ $? -ne 0 ]; then
        echo "[!] WARNING: File modifications detected!"
        # Trigger alert via webhook
    else
        echo "[+] System integrity verified."
    fi
}

# Usage: ./fim.sh [init|verify]
$1
