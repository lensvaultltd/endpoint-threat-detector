import time
from yara_scanner import scan_payload

def analyze_stream():
    print("[Detection Engine] Consuming Kafka stream...")
    while True:
        # Mock payload
        payload = {"process": "svchost.exe", "path": "C:\\Temp\\malware.exe"}
        result = scan_payload(payload['path'])
        if result['malicious']:
            print(f"[ALERT] Malware detected! Signature: {result['signature']}")
        time.sleep(2)

if __name__ == "__main__":
    analyze_stream()
