import { assets } from "@/config/assets";

export interface Industry {
  id: string;
  title: string;
  description: string;
  challenges: string[];
  solutions: string[];
  expertise: string[];
  caseExample: {
    title: string;
    description: string;
  };
  image: string;
  icon: string;
}

export const industries: Industry[] = [
  {
    id: "automation",
    title: "Industrial Automation",
    description:
      "Custom embedded controllers, motor drives, and monitoring systems that bring intelligence and connectivity to manufacturing floors. We replace legacy PLC-based systems with cost-optimized, high-performance embedded solutions.",
    challenges: [
      "Legacy equipment lacking modern connectivity",
      "High cost of proprietary PLC solutions",
      "Need for real-time predictive maintenance",
      "Compliance with industrial safety standards (IEC 61508)",
      "Integration with existing SCADA infrastructure",
    ],
    solutions: [
      "Custom embedded controllers with industrial protocol support",
      "Retrofit IoT gateways for brownfield equipment",
      "Real-time motor control with predictive analytics",
      "SIL-rated safety controller design",
      "Edge computing nodes for local data processing",
    ],
    expertise: [
      "Modbus RTU/TCP",
      "CANopen / EtherCAT",
      "PROFINET",
      "OPC UA",
      "Motor FOC control",
      "Industrial power design",
    ],
    caseExample: {
      title: "Smart Motor Drive Controller",
      description:
        "Replaced legacy VFD controllers with a custom embedded solution featuring real-time FOC, vibration-based predictive maintenance, and CANopen connectivity. Achieved 30% cost reduction at volume.",
    },
    image: assets.industries.automation,
    icon: "Factory",
  },
  {
    id: "consumer",
    title: "Consumer Electronics",
    description:
      "From wearables to smart home devices, we engineer consumer products that balance performance, battery life, and user experience. Our designs are optimized for mass production and regulatory compliance.",
    challenges: [
      "Extreme power constraints for battery-powered devices",
      "Compact form factors with thermal challenges",
      "Consumer-grade reliability requirements",
      "Regulatory compliance (FCC, CE, UL)",
      "Fast time-to-market pressure",
    ],
    solutions: [
      "Ultra-low-power firmware with advanced sleep modes",
      "Compact multi-layer PCB design",
      "BLE/Wi-Fi connectivity with companion app development",
      "Pre-compliance testing and certification support",
      "Rapid prototyping and DFM-optimized designs",
    ],
    expertise: [
      "BLE 5.x",
      "Wi-Fi",
      "Ultra-low-power MCUs",
      "Li-Po battery management",
      "Flex PCB",
      "CE/FCC certification",
    ],
    caseExample: {
      title: "Smart Wearable Health Monitor",
      description:
        "Developed a wearable health platform with 10-day battery life, medical-grade biometric sensors, and BLE connectivity. Achieved CE and FCC certification for global launch.",
    },
    image: assets.industries.consumer,
    icon: "Smartphone",
  },
  {
    id: "iot",
    title: "IoT Startups",
    description:
      "We partner with IoT startups to accelerate product development — from initial concept and proof-of-concept to production-ready designs. Our full-stack IoT expertise spans edge hardware, wireless connectivity, and cloud integration.",
    challenges: [
      "Limited in-house hardware/firmware expertise",
      "Need for rapid prototyping and iteration",
      "Scalable architecture from prototype to production",
      "Cloud integration and device management",
      "Cost optimization for volume production",
    ],
    solutions: [
      "Full-stack IoT product development",
      "Rapid proof-of-concept builds (2-4 weeks)",
      "Scalable cloud architecture (AWS IoT / Azure IoT Hub)",
      "OTA update infrastructure",
      "Production-optimized hardware design",
    ],
    expertise: [
      "LoRaWAN",
      "NB-IoT",
      "BLE Mesh",
      "MQTT / CoAP",
      "AWS IoT Core",
      "Edge computing",
    ],
    caseExample: {
      title: "Agricultural IoT Sensor Network",
      description:
        "Built a LoRaWAN-based soil monitoring system with 5-year battery life sensors, cloud dashboard, and automated irrigation triggers. Deployed across 200+ acres.",
    },
    image: assets.industries.iot,
    icon: "Globe",
  },
  {
    id: "robotics",
    title: "Robotics & Motion Control",
    description:
      "Embedded control systems for robotic platforms — from motor controllers and sensor fusion to real-time path planning and safety systems. We bring reliability and precision to robotic applications.",
    challenges: [
      "Real-time deterministic control requirements",
      "Multi-axis coordination and synchronization",
      "Sensor fusion from heterogeneous sources",
      "Safety-critical operation (collaborative robots)",
      "Power-efficient mobile robot platforms",
    ],
    solutions: [
      "Real-time multi-axis motor control systems",
      "IMU/LiDAR/camera sensor fusion firmware",
      "Safety-rated controller design",
      "ROS hardware bridge development",
      "Battery management for mobile robots",
    ],
    expertise: [
      "BLDC/stepper motor control",
      "EtherCAT motion",
      "IMU sensor fusion",
      "Safety PLCs",
      "ROS/ROS2 integration",
      "Real-time Linux",
    ],
    caseExample: {
      title: "Collaborative Robot Joint Controller",
      description:
        "Designed a compact joint controller for a 6-axis collaborative robot arm with torque sensing, EtherCAT communication, and SIL-3 safety functions. Enabled force-limited operation for human-robot collaboration.",
    },
    image: assets.industries.robotics,
    icon: "Bot",
  },
];
