#include "network_monitor.h"
#include <iostream>

void NetworkMonitor::Start() {
    std::cout << "[NetworkMonitor] Initializing PCAP filters..." << std::endl;
    CapturePackets();
}

void NetworkMonitor::CapturePackets() {
    // Packet capture logic
}
