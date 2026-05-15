"use client";

import { useState, FormEvent } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { company } from "@/data/company";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.message.trim().length > 0 && formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email Us",
      value: company.contact.email,
      href: `mailto:${company.contact.email}`,
      description: "For project inquiries and quotes",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call Us",
      value: company.contact.phone,
      href: `tel:${company.contact.phone}`,
      description: "Mon–Fri, 9:30 AM – 6:30 PM IST",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Visit Us",
      value: company.address.line1,
      href: "#map",
      description: company.address.full,
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Business Hours",
      value: "Mon – Fri, 9:30 AM – 6:30 PM",
      href: undefined,
      description: "Indian Standard Time (IST)",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-gray-900 via-primary-950 to-gray-900">
        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contactGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 30h60M30 0v60" stroke="white" strokeWidth="0.5" fill="none" />
                <circle cx="30" cy="30" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactGrid)" />
          </svg>
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
              Let&apos;s Discuss Your Project
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Whether you need a feasibility study, a quick prototype, or a full product development
              engagement — we&apos;re here to help. Tell us about your embedded engineering challenge.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-3">
                      {info.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{info.label}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-medium text-primary-600 hover:text-primary-700 block mb-1"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-900 mb-1">{info.value}</p>
                    )}
                    <p className="text-xs text-gray-500">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeIn>

          {/* Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn direction="left">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-500 mb-6 text-sm">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {isSubmitted && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-green-800">Message sent successfully!</p>
                      <p className="text-xs text-green-600">We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={errors.name ? "border-red-400 focus-visible:ring-red-400" : ""}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={errors.email ? "border-red-400 focus-visible:ring-red-400" : ""}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project inquiry, partnership, etc."
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      className={errors.subject ? "border-red-400 focus-visible:ring-red-400" : ""}
                    />
                    {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements, timeline, and any specific technical challenges..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={errors.message ? "border-red-400 focus-visible:ring-red-400" : ""}
                      rows={5}
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </FadeIn>

            {/* Map Placeholder */}
            <FadeIn direction="right">
              <div id="map">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Location</h2>
                <p className="text-gray-500 mb-6 text-sm">
                  Visit our office and engineering lab in Mehsana, Gujarat.
                </p>
                <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-100 aspect-[4/3]">
                  <iframe
                    src={company.address.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CombitTech Office Location"
                  />
                </div>

                <Card className="mt-6">
                  <CardContent className="p-5">
                    <h3 className="text-sm font-bold text-gray-900 mb-2">Office Address</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>{company.address.line1}</p>
                      <p>{company.address.line2}</p>
                      <p>{company.address.city}, {company.address.state} {company.address.pincode}</p>
                      <p>{company.address.country}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
