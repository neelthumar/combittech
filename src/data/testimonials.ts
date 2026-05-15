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
    name: "Dr. Marcus Weber",
    role: "VP of Engineering",
    company: "Precision Instruments GmbH",
    quote:
      "CombitTech delivered a measurement platform that exceeded our accuracy specifications. Their firmware team's understanding of analog signal processing and noise reduction techniques was exceptional. They felt like an extension of our R&D department.",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "CTO",
    company: "NovaSense IoT",
    quote:
      "We engaged CombitTech for our IoT gateway development. They handled everything from hardware design to cloud integration. The quality of their PCB design and firmware architecture gave us confidence to scale production to 50,000 units.",
    rating: 5,
  },
  {
    id: "3",
    name: "Rajesh Patel",
    role: "Director of Product",
    company: "IndusTech Automation",
    quote:
      "The custom motor controller CombitTech designed replaced our legacy PLC-based system at a fraction of the cost. Their industrial protocol expertise (CANopen, Modbus) and safety-critical design approach was exactly what we needed.",
    rating: 5,
  },
  {
    id: "4",
    name: "Emily Richards",
    role: "Founder & CEO",
    company: "WearWell Health",
    quote:
      "CombitTech turned our wearable concept into a certified product in under 8 months. Their power optimization work was remarkable — we achieved 10 days battery life where competitors manage 3-4 days. Outstanding embedded engineering team.",
    rating: 5,
  },
];
