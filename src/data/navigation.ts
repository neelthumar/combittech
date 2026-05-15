export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
  },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  services: [
    { label: "Embedded Firmware", href: "/services#firmware" },
    { label: "PCB Design", href: "/services#pcb" },
    { label: "IoT Solutions", href: "/services#iot" },
    { label: "Product Prototyping", href: "/services#prototyping" },
    { label: "RTOS Development", href: "/services#rtos" },
    { label: "Industrial Automation", href: "/services#automation" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  industries: [
    { label: "Industrial Automation", href: "/industries#automation" },
    { label: "Consumer Electronics", href: "/industries#consumer" },
    { label: "IoT Startups", href: "/industries#iot" },
    { label: "Robotics", href: "/industries#robotics" },
  ],
};
