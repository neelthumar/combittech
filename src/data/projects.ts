import { assets } from "@/config/assets";

export interface Project {
  id: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  technologies: string[];
  outcomes: string[];
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "low-current-measurement",
    title: "Custom Low Current & Voltage Measurement Platform",
    category: "Precision Measurement",
    challenge:
      "A metrology company needed a high-precision, multi-channel measurement system capable of measuring currents down to picoampere levels with ±0.01% accuracy, replacing expensive bench instruments.",
    solution:
      "Designed a custom 8-channel measurement platform with 24-bit ADCs, precision front-end amplifiers, and an ARM Cortex-M7 processor running a custom RTOS-based firmware. Included BLE connectivity for data logging via companion mobile app.",
    technologies: ["STM32H7", "24-bit ADC", "BLE 5.0", "FreeRTOS", "Custom PCB", "React Native"],
    outcomes: [
      "Achieved ±0.005% measurement accuracy",
      "70% cost reduction vs. existing bench solutions",
      "Battery life exceeding 48 hours continuous operation",
      "FDA 21 CFR Part 11 compliance for data integrity",
    ],
    image: assets.projects.project1,
    featured: true,
  },
  {
    id: "multichannel-source",
    title: "Multichannel High Precision Low Current Source Generator",
    category: "Test & Measurement",
    challenge:
      "A semiconductor test equipment manufacturer required a programmable multi-channel current source with nanoampere resolution for wafer-level device characterization.",
    solution:
      "Developed a 16-channel precision current source with DAC-based control, active feedback regulation, and a USB/Ethernet interface for PC-based control. Custom calibration firmware ensures long-term stability.",
    technologies: ["ARM Cortex-M4", "16-bit DAC", "USB 2.0", "Ethernet", "Python GUI", "Altium Designer"],
    outcomes: [
      "100pA resolution across all channels",
      "Simultaneous 16-channel operation",
      "Automated calibration reducing setup time by 80%",
      "Integration with existing test automation frameworks",
    ],
    image: assets.projects.project2,
    featured: true,
  },
  {
    id: "nfc-sdk",
    title: "Custom SDK Development Over NFC Stack",
    category: "Wireless Communication",
    challenge:
      "A smart packaging company needed a custom NFC SDK that could work across multiple NFC controller ICs, providing a unified API for tag reading, writing, and authentication.",
    solution:
      "Built a portable NFC SDK abstracting hardware differences between NXP, STMicro, and TI NFC controllers. Implemented NDEF parsing, custom authentication protocols, and anti-counterfeiting features.",
    technologies: ["C/C++", "NFC Forum specs", "NXP PN5180", "ST25R", "TI TRF7970A", "CMake"],
    outcomes: [
      "Single SDK supporting 3 NFC controller families",
      "50% reduction in integration time for customers",
      "Anti-tamper detection with 99.9% accuracy",
      "Deployed in 2M+ products globally",
    ],
    image: assets.projects.project3,
    featured: true,
  },
  {
    id: "lora-dmx",
    title: "LoRa Enabled DMX Controller",
    category: "Industrial IoT",
    challenge:
      "A stage lighting company needed a wireless DMX controller with 1km+ range that could replace wired DMX infrastructure in outdoor venues and temporary installations.",
    solution:
      "Designed a LoRa-based DMX512 bridge with sub-millisecond latency, supporting 512 channels per universe. Custom protocol ensures reliable delivery with automatic error correction and seamless failover.",
    technologies: ["LoRa SX1276", "DMX512", "STM32L4", "Custom RF PCB", "FreeRTOS", "IP65 Enclosure"],
    outcomes: [
      "1.2km reliable range in outdoor environments",
      "< 5ms end-to-end latency",
      "Zero dropped frames in 72-hour stress test",
      "40% cost savings vs. commercial alternatives",
    ],
    image: assets.projects.project4,
    featured: true,
  },
  {
    id: "smart-wearable",
    title: "Ultra Low Power Smart Wearable Platform",
    category: "Consumer Electronics",
    challenge:
      "A health-tech startup needed a wearable platform with continuous heart rate, SpO2, and activity monitoring, requiring 7+ days battery life from a 150mAh battery.",
    solution:
      "Developed a custom SoC-based wearable with aggressive power management, duty-cycled sensor sampling, and BLE 5.2 for smartphone connectivity. Custom algorithms for real-time health metrics with minimal compute overhead.",
    technologies: ["Nordic nRF5340", "MAX30102", "BMA400", "BLE 5.2", "Zephyr RTOS", "4-layer flex PCB"],
    outcomes: [
      "10-day battery life with continuous monitoring",
      "Medical-grade heart rate accuracy (±2 BPM)",
      "OTA firmware updates via BLE",
      "Achieved CE and FCC certification",
    ],
    image: assets.projects.project5,
    featured: false,
  },
  {
    id: "motor-controller",
    title: "Intelligent Motor Drive Controller",
    category: "Industrial Automation",
    challenge:
      "A manufacturing equipment company needed a compact, intelligent motor controller with field-oriented control (FOC), predictive maintenance, and Modbus/CANopen connectivity.",
    solution:
      "Designed a high-performance motor drive with dual-core MCU architecture — one core dedicated to real-time FOC, the other handling communication and diagnostics. Vibration analysis algorithms provide predictive maintenance alerts.",
    technologies: ["TI C2000", "FOC algorithm", "CANopen", "Modbus RTU", "Power stage design", "IEC 61800"],
    outcomes: [
      "95.2% drive efficiency at rated load",
      "Predictive maintenance alerts 48 hours before failure",
      "SIL-2 safety rating achieved",
      "30% size reduction vs. previous generation",
    ],
    image: assets.projects.project6,
    featured: false,
  },
];
