import React from "react";
import Link from "next/link";


function Button({
  children,
  href,
  variant = "solid",
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center px-5 py-3 rounded-full font-medium transition-shadow";

  const variants: Record<string, string> = {
    solid: "bg-blue-500 text-white shadow-md hover:shadow-lg",
    outline:
      "bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white",
    ghost: "bg-transparent text-white/90 hover:bg-white/3",
  };

  const content = (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );

  if (href) return <Link href={href}>{content}</Link>;
  return content;
}

const Services = () => {
  return (
    <div className="bg-[#0B1221] text-white">
      
      
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-10">
        <div>
    
          <h1 className="text-4xl font-bold leading-snug">
            Innovating the Future of <br /> Finance, Together
          </h1>
          <p className="text-gray-400 mt-4 max-w-md">
            We deliver scalable, secure, and cutting-edge fintech solutions
            tailored to accelerate your business growth.
          </p>
        <br/>
            <Button href="/contact" variant="solid">
            request a Consultation
          </Button>
      
        </div>

        <div className="flex justify-center">
          <img
            src="/home/img6.png"
            alt="Fintech Graph"
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </section>

      {/* Core Services */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-center text-3xl font-semibold">
          Our Core Fintech Solutions
        </h2>
        <p className="text-center text-gray-400 mt-2">
          Driving financial innovation with our comprehensive suite of core services.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {[
            {
              title: "Asset Financing Platforms",
              desc: "Robust platforms for managing the entire asset financing lifecycle.",
              time: "12+ weeks",
            },
            {
              title: "Lending & Credit Management",
              desc: "End-to-end solutions for loan origination, underwriting, and servicing.",
              time: "10+ weeks",
            },
            {
              title: "KYC & Compliance Automation",
              desc: "Automate identity verification and ensure regulatory compliance.",
              time: "8-10 weeks",
            },
            {
              title: "Financial Analytics & BI",
              desc: "Transform data into actionable insights with powerful analytics.",
              time: "6+ weeks",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#141B2D] p-5 rounded-lg border border-gray-800 hover:border-blue-600 transition"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
              <p className="text-gray-500 text-xs mt-3">Delivery: {item.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-center text-3xl font-semibold">Additional Services</h2>
        <p className="text-center text-gray-400 mt-2">
          Extending our capabilities to meet every fintech challenge.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {[
            "Mobile Banking Solutions",
            "Payment Gateway Integration",
            "Cloud Migration & DevOps",
            "API Development & Integration",
          ].map((s, i) => (
            <div
              key={i}
              className="bg-[#141B2D] p-5 rounded-lg border border-gray-800 hover:border-blue-600 transition text-center"
            >
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-center text-3xl font-semibold">Our Proven 4-Step Process</h2>
        <p className="text-center text-gray-400 mt-2">
          A streamlined workflow designed for clarity, efficiency, and exceptional results.
        </p>

        <div className="grid md:grid-cols-4 gap-10 mt-12 text-center">
          {[
            {
              step: "Discover",
              desc: "We start by understanding your vision, goals, and requirements.",
            },
            {
              step: "Design",
              desc: "We craft intuitive UI/UX and detailed architecture blueprints.",
            },
            {
              step: "Develop",
              desc: "Agile development cycle to build scalable, robust solutions.",
            },
            {
              step: "Deploy",
              desc: "We ensure a seamless launch, backed by ongoing support.",
            },
          ].map((s, i) => (
            <div key={i}>
              <div className="w-10 h-10 bg-blue-600 rounded-full mx-auto flex items-center justify-center mb-4">
                {i + 1}
              </div>
              <h3 className="font-semibold">{s.step}</h3>
              <p className="text-gray-400 text-sm mt-2 max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-center text-3xl font-semibold">Industries We Serve</h2>

        <div className="grid md:grid-cols-5 gap-6 text-center mt-12 text-gray-300">
          {["Banking", "Lending", "Insurance", "NBFCs", "Wealth Management"].map(
            (x, i) => (
              <div key={i} className="p-4 bg-[#141B2D] rounded-lg border border-gray-800">
                {x}
              </div>
            )
          )}
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-center text-3xl font-semibold">
          Certifications & Compliance
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-10 text-gray-400">
          {["ISO 27001", "RBI Compliance", "PCI DSS", "AWS", "Azure", "GCP"].map(
            (c, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-[#141B2D] rounded-lg border border-gray-800"
              >
                {c}
              </span>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-semibold">
          Let's Build Your Next Fintech Solution
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Partner with us to build innovative, secure, and scalable solutions that deliver growth and delight your customers.
        </p>
        <br/>
         <Button href="/contact" variant="solid">
            Get in Touch
          </Button>
          
       
      </section>
    </div>
  );
};

export default Services;
