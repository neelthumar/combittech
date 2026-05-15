import { assets } from "@/config/assets";

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  overview: string;
  capabilities: string[];
  technologies: string[];
  businessValue: string;
  image: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "firmware",
    title: "Embedded Firmware Development",
    shortTitle: "Firmware Development",
    description:
      "Production-grade firmware for microcontrollers, SoCs, and custom hardware platforms. From bare-metal to RTOS-based architectures.",
    overview:
      "Our firmware team delivers robust, optimized embedded software across ARM Cortex-M, RISC-V, and legacy architectures. We handle everything from low-level peripheral drivers to complex application logic, ensuring your product meets stringent timing, power, and reliability requirements.",
    capabilities: [
      "Bare-metal & RTOS firmware development",
      "Peripheral driver development (SPI, I2C, UART, CAN, USB)",
      "Bootloader design & OTA update systems",
      "Power management & low-power optimization",
      "Firmware architecture & code review",
      "Safety-critical firmware (IEC 61508, ISO 26262)",
    ],
    technologies: [
      "C/C++",
      "ARM Cortex-M",
      "RISC-V",
      "STM32",
      "ESP32",
      "NXP",
      "TI MSP430",
      "Nordic nRF",
      "GCC",
      "IAR",
      "Keil",
      "JTAG/SWD",
    ],
    businessValue:
      "Reduce firmware development cycles by 40% with our proven architectures and reusable frameworks. Minimize field failures with rigorous testing and validation processes.",
    image: assets.services.firmware,
    icon: "Cpu",
  },
  {
    id: "pcb",
    title: "PCB Design & Hardware Engineering",
    shortTitle: "PCB Design",
    description:
      "Multi-layer PCB design, schematic capture, and hardware engineering for complex embedded systems and IoT devices.",
    overview:
      "From concept to manufacturing-ready Gerber files, our hardware team designs PCBs that meet your performance, cost, and form-factor requirements. We specialize in high-speed digital, mixed-signal, and RF designs with expertise in DFM and DFT.",
    capabilities: [
      "Schematic design & component selection",
      "Multi-layer PCB layout (up to 16+ layers)",
      "High-speed digital design (DDR, USB, Ethernet)",
      "Mixed-signal & analog circuit design",
      "RF & antenna design",
      "DFM/DFT review & manufacturing support",
      "Thermal analysis & power integrity",
    ],
    technologies: [
      "Altium Designer",
      "KiCad",
      "OrCAD",
      "EAGLE",
      "LTspice",
      "ANSYS",
      "Signal integrity tools",
      "Impedance calculators",
    ],
    businessValue:
      "First-pass PCB success rates exceeding 95%. Optimized BOM costs and manufacturing-ready designs that reduce your time to market.",
    image: assets.services.pcb,
    icon: "CircuitBoard",
  },
  {
    id: "iot",
    title: "IoT Solutions & Connected Devices",
    shortTitle: "IoT Solutions",
    description:
      "End-to-end IoT product development — from edge devices to cloud connectivity, data pipelines, and mobile companion apps.",
    overview:
      "We build connected embedded products that seamlessly integrate with cloud platforms and mobile applications. Our IoT solutions cover the full stack: sensor integration, wireless connectivity, edge processing, cloud backends, and user-facing dashboards.",
    capabilities: [
      "Wireless protocol integration (BLE, Wi-Fi, LoRa, Zigbee, NB-IoT)",
      "Cloud platform integration (AWS IoT, Azure IoT Hub, GCP)",
      "Edge computing & data processing",
      "OTA firmware update infrastructure",
      "Device management & fleet monitoring",
      "Companion mobile app development",
    ],
    technologies: [
      "ESP32",
      "Nordic nRF",
      "LoRaWAN",
      "MQTT",
      "CoAP",
      "AWS IoT Core",
      "Azure IoT Hub",
      "React Native",
      "Flutter",
      "Node-RED",
    ],
    businessValue:
      "Launch IoT products faster with our pre-built connectivity frameworks. Ensure scalability from prototype to millions of deployed devices.",
    image: assets.services.iot,
    icon: "Wifi",
  },
  {
    id: "prototyping",
    title: "Product Prototyping & Development",
    shortTitle: "Prototyping",
    description:
      "Rapid prototyping services to validate your embedded product concept — from proof-of-concept to pre-production builds.",
    overview:
      "We transform your product ideas into functional prototypes quickly and efficiently. Our prototyping process covers hardware, firmware, and enclosure design, allowing you to validate technical feasibility, gather feedback, and iterate before committing to production tooling.",
    capabilities: [
      "Rapid proof-of-concept development",
      "Functional prototype builds",
      "3D printing & enclosure prototyping",
      "Pre-production validation",
      "Design for manufacturing (DFM) review",
      "Bill of materials optimization",
    ],
    technologies: [
      "Development boards",
      "3D printing",
      "CNC machining",
      "Breadboard & perfboard",
      "Wire harness prototyping",
      "Rapid PCB fab",
    ],
    businessValue:
      "Validate product-market fit before large capital investments. Iterate 3x faster with our agile prototyping methodology.",
    image: assets.services.prototyping,
    icon: "Wrench",
  },
  {
    id: "testing",
    title: "Hardware Testing & Validation",
    shortTitle: "Hardware Testing",
    description:
      "Comprehensive testing and validation services ensuring your embedded product meets quality, compliance, and reliability standards.",
    overview:
      "Our testing lab provides end-to-end validation for embedded hardware and firmware. From unit testing to environmental stress testing, we ensure your product meets regulatory requirements and performs reliably in real-world conditions.",
    capabilities: [
      "Functional testing & verification",
      "EMC pre-compliance testing",
      "Environmental stress testing",
      "Power consumption profiling",
      "Automated test fixture development",
      "Regression testing & CI integration",
    ],
    technologies: [
      "Oscilloscopes",
      "Logic analyzers",
      "Spectrum analyzers",
      "Power analyzers",
      "Environmental chambers",
      "Custom test jigs",
      "Python automation",
    ],
    businessValue:
      "Reduce field failure rates by 60%. Achieve compliance certifications faster with our pre-compliance testing process.",
    image: assets.services.testing,
    icon: "TestTube",
  },
  {
    id: "rtos",
    title: "RTOS Development & Integration",
    shortTitle: "RTOS Development",
    description:
      "Real-time operating system development, integration, and optimization for mission-critical embedded applications.",
    overview:
      "We specialize in RTOS-based system design for applications requiring deterministic timing, multitasking, and reliable operation. Our expertise spans FreeRTOS, Zephyr, ThreadX, and custom RTOS solutions tailored to your application requirements.",
    capabilities: [
      "RTOS selection & evaluation",
      "Task architecture & scheduling design",
      "Inter-task communication frameworks",
      "Memory management optimization",
      "Real-time performance profiling",
      "RTOS porting to custom hardware",
    ],
    technologies: [
      "FreeRTOS",
      "Zephyr RTOS",
      "ThreadX / Azure RTOS",
      "RT-Thread",
      "NuttX",
      "CMSIS-RTOS",
      "POSIX compliance layers",
    ],
    businessValue:
      "Build complex, responsive embedded systems with predictable real-time behavior. Scale firmware complexity without sacrificing reliability.",
    image: assets.services.rtos,
    icon: "Timer",
  },
  {
    id: "automation",
    title: "Industrial Automation Solutions",
    shortTitle: "Industrial Automation",
    description:
      "Custom embedded solutions for industrial automation — PLC alternatives, SCADA integration, motor control, and process automation.",
    overview:
      "We develop custom embedded controllers and automation systems that outperform off-the-shelf PLCs in cost, performance, and flexibility. Our solutions integrate with existing industrial infrastructure while providing modern connectivity and monitoring capabilities.",
    capabilities: [
      "Custom controller design",
      "Motor drive & control systems",
      "Sensor integration & signal conditioning",
      "Industrial communication protocols (Modbus, CANopen, EtherCAT)",
      "SCADA & HMI integration",
      "Safety system design (SIL rated)",
    ],
    technologies: [
      "Modbus RTU/TCP",
      "CANopen",
      "EtherCAT",
      "PROFINET",
      "OPC UA",
      "Industrial Ethernet",
      "4-20mA",
      "RS-485",
    ],
    businessValue:
      "Replace expensive PLCs with optimized custom controllers. Achieve 30-50% cost reduction at scale while maintaining industrial reliability.",
    image: assets.services.automation,
    icon: "Factory",
  },
];
