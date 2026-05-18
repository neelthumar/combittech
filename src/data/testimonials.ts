export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Nilesh Parmar",
    role: "Production Supervisor",
    company: "Shree Plastics",
    quote:
      "CombitTech helped us automate our injection molding line. Their PLC integration and sensor calibration made our process more reliable and efficient.",
    rating: 5,
  },
  {
    id: "2",
    name: "Vijay Shah",
    role: "Maintenance Engineer",
    company: "Vraj Dairy Equipments",
    quote:
      "We needed a custom IoT solution for monitoring our cold storage. The team delivered a robust system with real-time alerts and easy reporting.",
    rating: 5,
  },
  {
    id: "3",
    name: "Priya Joshi",
    role: "QA Technician",
    company: "Sunrise Electronics",
    quote:
      "Their embedded firmware upgrade for our test jigs reduced our manual work and improved accuracy. Support was quick and clear.",
    rating: 5,
  },
  {
    id: "4",
    name: "Rakesh Mehta",
    role: "R&D Assistant",
    company: "MicroFab Instruments",
    quote:
      "We collaborated on a small measurement device. CombitTech’s hardware design and documentation were very professional and easy to follow.",
    rating: 5,
  },
];
