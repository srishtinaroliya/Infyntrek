"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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


export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-[#0d1219] text-white pt-[80px]">

    
      {/* ===================== HERO ===================== */}
      <section
        className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] 
        bg-cover bg-center flex items-center justify-center px-4 sm:px-6"
        style={{ backgroundImage: "url('/home/img5.png')" }}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
             
             
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold leading-tight">
            Pioneering the Future of Finance
          </h1>

          <p className="max-w-xl mx-auto mt-3 text-black text-sm sm:text-base md:text-lg">
            Discover Infyntrek Systemes’ journey from a traditional finance firm
            to a global leader in fintech innovation.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Button
      href="/JoinOurTeam"
      variant="solid"
      className="bg-black text-blue-600 px-6 py-3 rounded-xl"
    >
      Work with us
    </Button>
    <Button
      href="/services"
      variant="solid"
      className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg font-semibold"
    >
      Explore our solution
    </Button>
          </div>
        </div>
      </section>

      {/* ===================== FINTECH TRANSFORMATION ===================== */}
      <section className="py-16 sm:py-24 container mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="text-3xl font-bold">
          From Finance Firm to Fintech Powerhouse
        </h2>

        <p className="text-gray-400 mt-4 max-w-3xl">
          Infyntrek Systemes began as a traditional finance firm, but with a
          vision for the future, we have evolved into a fintech powerhouse
          dedicated to creating innovative solutions that redefine the financial
          landscape.
        </p>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
      {/* Our Mission - from left */}
      <motion.div
        className="bg-[#141a22] p-6 rounded-xl border border-gray-700"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-semibold text-lg">🌱 Our Mission</h3>
        <p className="text-gray-400 mt-2">
          To empower financial institutions with cutting-edge technology,
          ensuring security, efficiency, and unparalleled client success.
        </p>
      </motion.div>

      {/* Our Vision - from right */}
      <motion.div
        className="bg-[#141a22] p-6 rounded-xl border border-gray-700"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-semibold text-lg">👁️ Our Vision</h3>
        <p className="text-gray-400 mt-2">
          To be the world’s most trusted partner in financial technology,
          shaping a future where finance is accessible, intelligent, and
          secure for everyone.
        </p>
      </motion.div>
    </div>
       
      </section>

      {/* ===================== TIMELINE ===================== */}
      <section className="py-24 bg-[#0b0f15]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold">Our Journey (2014–2024)</h2>
        </div>

        <div className="mt-16 relative mx-auto max-w-4xl">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-700 -translate-x-1/2"></div>

          <div className="space-y-16">
            {/* TIMELINE ITEM */}
            <div className="flex items-center justify-between">
              <div className="w-full md:w-5/12 text-right md:text-right text-center">
                <h4 className="font-semibold">2014: Company Founding</h4>
                <p className="text-gray-400 text-sm">
                  Infyntrek Systemes is established to modernize financial services.
                </p>
              </div>

              <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-[#0b0f15]"></div>

              <div className="w-5/12"></div>
            </div>

            <div className="flex items-center justify-between">
              <div className="w-5/12"></div>

              <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-[#0b0f15]"></div>

              <div className="w-5/12">
                <h4 className="font-semibold">2016: First Major Product Launch</h4>
                <p className="text-gray-400 text-sm">
                  Launch of QuantumLedger — our flagship blockchain-based platform.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="w-5/12 text-right">
                <h4 className="font-semibold">2019: Series A Funding</h4>
                <p className="text-gray-400 text-sm">
                  Secured $20M to scale operations and R&D.
                </p>
              </div>

              <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-[#0b0f15]"></div>

              <div className="w-5/12"></div>
            </div>

            <div className="flex items-center justify-between">
              <div className="w-5/12"></div>

              <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-[#0b0f15]"></div>

              <div className="w-5/12">
                <h4 className="font-semibold">2022: Strategic Partnership</h4>
                <p className="text-gray-400 text-sm">
                  Partnered with GlobalBank to integrate AI risk-analysis tools.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="w-5/12 text-right">
                <h4 className="font-semibold">2024: Global Expansion</h4>
                <p className="text-gray-400 text-sm">
                  Opened new offices in London and Singapore.
                </p>
              </div>

              <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-[#0b0f15]"></div>

              <div className="w-5/12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== LEADERSHIP ===================== */}
      <section className="py-24 container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold">Meet Our Leadership</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-14">

          {/* Leader */}
          {[
            {
              name: "Johnathan Doe",
              role: "Chief Executive Officer",
              img: "/leader1.png",
              desc:
                "A veteran of the finance industry with 20+ years of experience, leading our vision for a decentralized future.",
            },
            {
              name: "Jane Smith",
              role: "Chief Technology Officer",
              img: "/leader2.png",
              desc:
                "The architect of our cutting-edge platforms, with a background in AI and blockchain development.",
            },
            {
              name: "Samuel Lee",
              role: "Chief Financial Officer",
              img: "/leader3.png",
              desc:
                "Manages our financial strategy, ensuring sustainable growth and investor confidence.",
            },
          ].map((leader) => (
            <div key={leader.name} className="flex flex-col items-center">
             <Image
                src={leader.img}
                width={160}
                height={160}
                alt="Leader"
                className="rounded-full object-cover w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36"
              />


              <h3 className="mt-4 font-semibold">{leader.name}</h3>
              <p className="text-blue-400 text-sm">{leader.role}</p>
              <p className="text-gray-400 text-sm mt-3 max-w-xs">{leader.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== CORE VALUES ===================== */}
      <section className="py-24 bg-[#0b0f15] text-center">
        <h2 className="text-3xl font-bold">Our Core Values</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-5xl mx-auto">
          {[
            {
              title: "Trust & Security",
              desc:
                "We prioritize the security of our clients’ data and assets above all else.",
            },
            {
              title: "Client Success",
              desc:
                "Our success is measured by the success of our clients. We are partners in their growth.",
            },
            {
              title: "Innovation",
              desc:
                "We continuously push the boundaries of technology to deliver groundbreaking solutions.",
            },
            {
              title: "Integrity",
              desc:
                "We operate with transparency and uphold the highest ethical standards.",
            },
          ].map((value) => (
            <div key={value.title}>
              <h3 className="font-semibold">{value.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="py-16 sm:py-24 text-center px-4">
        <h2 className="text-3xl font-bold">
          Join Us in Shaping the Future of Finance
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          We are always looking for passionate innovators to join our team.
          Let’s build the future together.
        </p>

        <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4">

                <Button
      href="/career"
      variant="solid"
      className="bg-black text-blue-600 px-6 py-3 rounded-xl"
    >
      View career
    </Button>
    <Button
      href="/contact"
      variant="solid"
      className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg font-semibold"
    >
      Contact Us
    </Button>
        </div>
      </section>
    </main>
  );
}
