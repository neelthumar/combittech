export interface Position {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  description: string;
  requirements: string[];
}

export const positions: Position[] = [
  {
    id: "embedded-fw-sr",
    title: "Senior Embedded Firmware Engineer",
    department: "Firmware",
    type: "Full-time",
    location: "Mehsana, Gujarat",
    experience: "5+ years",
    description:
      "Lead firmware development for complex embedded products. Design firmware architectures, mentor junior engineers, and drive technical decisions for client projects.",
    requirements: [
      "5+ years embedded C/C++ development",
      "Experience with ARM Cortex-M and RTOS (FreeRTOS/Zephyr)",
      "Strong understanding of hardware interfaces (SPI, I2C, UART, CAN)",
      "Experience with debugging tools (JTAG/SWD, logic analyzers)",
      "Bootloader and OTA update experience preferred",
    ],
  },
  {
    id: "pcb-design",
    title: "PCB Design Engineer",
    department: "Hardware",
    type: "Full-time",
    location: "Mehsana, Gujarat",
    experience: "3+ years",
    description:
      "Design multi-layer PCBs for embedded systems, IoT devices, and industrial controllers. Work closely with firmware and mechanical teams.",
    requirements: [
      "3+ years PCB design experience (Altium/KiCad)",
      "Multi-layer board design (4-8 layers)",
      "High-speed digital design knowledge",
      "Understanding of DFM and DFT principles",
      "Mixed-signal design experience preferred",
    ],
  },
  {
    id: "iot-developer",
    title: "IoT Full Stack Developer",
    department: "Software",
    type: "Full-time",
    location: "Mehsana, Gujarat",
    experience: "3+ years",
    description:
      "Build end-to-end IoT solutions — from embedded firmware to cloud backends and mobile companion applications.",
    requirements: [
      "Experience with embedded Linux or RTOS",
      "Cloud platform experience (AWS IoT / Azure IoT Hub)",
      "Python / Node.js backend development",
      "React / React Native for dashboards and mobile apps",
      "Understanding of MQTT, CoAP, HTTP protocols",
    ],
  },
  {
    id: "intern-embedded",
    title: "Embedded Systems Intern",
    department: "Firmware",
    type: "Internship",
    location: "Mehsana, Gujarat",
    experience: "Final year / Fresh graduate",
    description:
      "Learn embedded systems development in a fast-paced product engineering environment. Work on real client projects under senior mentorship.",
    requirements: [
      "B.E./B.Tech in Electronics, ECE, or related field",
      "Basic knowledge of C programming",
      "Understanding of microcontroller fundamentals",
      "Eagerness to learn and strong problem-solving skills",
      "Personal embedded projects or coursework preferred",
    ],
  },
];

export const benefits = [
  {
    title: "Engineering-First Culture",
    description: "Work on real embedded products, not maintenance. Every engineer ships production code and hardware.",
    icon: "Cpu",
  },
  {
    title: "Learning & Growth",
    description: "Access to development boards, tools, and training. Conference sponsorship and certification support.",
    icon: "GraduationCap",
  },
  {
    title: "Flexible Work",
    description: "Hybrid work model with flexible hours. We focus on outcomes, not seat time.",
    icon: "Clock",
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance for you and your family. Mental health support and wellness programs.",
    icon: "Heart",
  },
  {
    title: "Competitive Compensation",
    description: "Market-competitive salary with performance bonuses. Regular reviews and transparent growth paths.",
    icon: "TrendingUp",
  },
  {
    title: "Modern Lab & Tools",
    description: "Oscilloscopes, logic analyzers, 3D printers, and every tool you need to build amazing products.",
    icon: "Wrench",
  },
];
