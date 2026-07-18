#include <string>
// Dummy crypto utility for secure telemetry transmission
std::string EncryptPayload(std::string data) {
    return "encrypted_" + data;
}
