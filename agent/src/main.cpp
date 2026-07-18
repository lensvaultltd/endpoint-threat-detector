#include <iostream>
#include "telemetry/process_monitor.h"
#include "telemetry/network_monitor.h"

int main() {
    std::cout << "[EDR Agent] Starting threat collection engine..." << std::endl;
    ProcessMonitor pmon;
    NetworkMonitor nmon;
    pmon.Start();
    nmon.Start();
    return 0;
}
