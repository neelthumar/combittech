"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/motion";

const techCategories = [
  {
    title: "Microcontrollers & SoCs",
    items: ["ARM Cortex-M", "RISC-V", "STM32", "ESP32", "Nordic nRF", "NXP LPC", "TI MSP430", "Microchip PIC"],
  },
  {
    title: "RTOS & OS",
    items: ["FreeRTOS", "Zephyr RTOS", "ThreadX", "Embedded Linux", "NuttX", "RT-Thread", "Bare Metal"],
  },
  {
    title: "Connectivity",
    items: ["BLE 5.x", "Wi-Fi", "LoRaWAN", "Zigbee", "NB-IoT", "NFC", "USB", "Ethernet"],
  },
  {
    title: "Protocols & Interfaces",
    items: ["SPI", "I2C", "UART", "CAN/CANopen", "Modbus", "EtherCAT", "MQTT", "OPC UA"],
  },
  {
    title: "Design Tools",
    items: ["Altium Designer", "KiCad", "EAGLE", "IAR Embedded", "Keil MDK", "GCC ARM", "VS Code", "Git"],
  },
  {
    title: "Cloud & Software",
    items: ["AWS IoT Core", "Azure IoT Hub", "Python", "React", "Node.js", "Docker", "CI/CD", "JIRA"],
  },
];

export function TechStack() {
  return (
    <section className="section-padding gradient-dark text-white">
      <div className="container-max">
        <FadeIn>
          <SectionHeading
            label="Technology Stack"
            title="Tools & Technologies We Master"
            description="We work with industry-leading tools and platforms across the entire embedded product development lifecycle."
          />
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {techCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <h3 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 rounded-md bg-white/10 text-gray-300 hover:bg-white/15 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
