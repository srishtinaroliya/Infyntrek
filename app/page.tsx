"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";
import Cartoon from "../components/animation/cartoon";
import Idea from "../components/animation/idea";
import Category from "../components/ui/Category";
import ApplyJob from "../components/ui/applyJob";



/* -------------------------
   Small reusable components
   ------------------------- */

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

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/4 p-4 rounded-xl border border-white/6 shadow-sm">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-white/70 mt-1">{label}</div>
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-white/3 p-6 rounded-2xl border border-white/6 ${className}`}>
      {children}
    </div>
  );
}

function AccordionItem({
  title,
  children,
  openByDefault = false,
}: {
  title: string;
  children: React.ReactNode;
  openByDefault?: boolean;
}) {
  const [open, setOpen] = useState(openByDefault);

  return (
    <div className="mb-3">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex justify-between items-center p-4 bg-white/3 rounded-lg border border-white/6"
      >
        <span className="text-white font-medium">{title}</span>
        <span className="text-white/70">{open ? "−" : "+"}</span>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.28 }}
        className="overflow-hidden mt-2 text-white/80"
      >
        <div className="p-3">{children}</div>
      </motion.div>
    </div>
  );
}

/* -------------------------
   Main Page
   ------------------------- */
import { usePathname } from "next/navigation";

function NavbarLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        px-3 py-2 rounded-md transition-all duration-200
        ${isActive ? "text-blue-400 font-semibold" : "text-white/80"}
        hover:bg-blue-500 hover:text-white
      `}
    >
      {label}
    </Link>
  );
}



export default function HomePage() {
  return (
    
    <main className="min-h-screen w-full bg-[#0d1720] text-white pt-[80px]">
      
    
    {/* HERO SECTION */}
<section className="relative w-full h-[600px] px-6 pt-6 z-0">
  <div className="
  absolute 
  left-2 right-2 
  sm:left-4 sm:right-4 
  md:left-6 md:right-6 
  lg:left-8 lg:right-8 
  top-0 bottom-0 
  rounded-2xl overflow-hidden z-[-1]
">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/home/moving_img.mp4" type="video/mp4" />
    </video>

    <div className="absolute inset-0 bg-black/30"></div>
  </div>


  {/* Everything inside your Card */}
  <div className="relative rounded-2xl overflow-hidden border border-white/6 shadow-2xl p-6 sm:p-8 md:p-14">

    {/* CONTENT */}
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-left"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-2xl">
          Innovating Finance,
          <br />
          <span className="text-white">Building the Future of FinTech</span>
        </h1>

        <p className="mt-4 text-white/75 max-w-xl">
          Join us in creating next-generation financial solutions in
          collaboration with industry leaders.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Button href="/career" variant="solid">
            Explore Careers
          </Button>
          <Button href="/contact" variant="outline">
            Schedule a Consultation
          </Button>
        </div>
      </motion.div>
    </div>

    {/* STATS */}
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 px-2">
      <StatCard label="Years of Experience" value="10+" />
      <StatCard label="Team Members" value="150+" />
      <StatCard label="Annual Turnover" value="$20M+" />
      <StatCard label="Client Projects" value="500+" />
    </div>

  </div>
</section>




      {/* JOURNEY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mt-6 space-y-6">
              <Card>
                <h4 className="font-semibold">Custom Financial Software Solutions</h4>

                <p className="mt-2 text-white/70">
                  We specialize in crafting bespoke financial software — from data analytics to
                  secure payment gateways.
                </p>

                <div className="mt-4">
                  <Button
                    href="/services"
                    variant="solid"
                    className="transition-transform duration-200 hover:scale-105 hover:shadow-lg active:scale-95 active:bg-blue-700"
                  >
                    Learn More About Our Tech
                  </Button>
                </div>

              </Card>
            </div>
          </div>

         <div className="flex justify-center">
            <div className="w-52 sm:w-64 md:w-72">
                <Idea />
            </div>
        </div>

        </div>
      </section>
 
 <section className="max-w-7xl mx-auto px-6 py-12">
  <h2 className="text-3xl font-bold mb-4 text-white text-center">
    6 Years of Fintech Innovation
  </h2>
  <p className="text-white/70 text-center max-w-2xl mx-auto mb-8">
    From startup to industry leader - collaborating with Amazon & AMEX to deliver cutting-edge fintech solutions and training
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    <TimelineCard
      year="2019"
      title="Foundation"
      description="Founded as a small finance consultancy firm, offering business-focused financial services under RBI-compliant practices."
      highlight="RBI-compliant foundation"
    />

    <TimelineCard
      year="2020"
      title="Major Breakthrough"
      description="Won large-scale project managing Asset Finance Systems for multiple MNC clients. Expanded team and began productizing solutions."
      highlight="MNC client partnerships secured"
    />

    <TimelineCard
      year="2023"
      title="Scale-Up Phase"
      description="Reached ₹1 Crore turnover milestone. Grew to 84 employees under one roof. Became known for agile and compliant fintech solutions."
      highlight="₹1 Crore turnover achieved"
    />

    <TimelineCard
      year="2025"
      title="New Era"
      description="Launched Finance Software Development Division. Started training programs and internship pathways for freshers and entry-level professionals."
      highlight="Software Development Division launched"
    />
  </div>
</section>



      {/* HIRING SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">
       <div className="rounded-2xl bg-gradient-to-r from-blue-500/60 to-blue-400/60 p-8 text-center shadow-lg">

          <h3 className="text-2xl font-bold">We're Hiring. Exponentially.</h3>
            
            <Category />
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-28">

  {/* LEFT — Cartoon */}
  <div className="w-[130px] sm:w-[150px] md:w-[180px] flex-shrink-0 mx-auto md:mx-0">

    <Cartoon />
  </div>

  {/* RIGHT — Content stacked vertically */}
  <div className="flex flex-col space-y-4">

   <div className="inline-block">
  <button className=" text-white px-6 py-3 rounded-xl mt-4">
   <ApplyJob />
  </button>
</div>


    <p className="text-white/90 max-w-xl">
      Ready to make your mark in the fintech revolution? Join our rapidly growing team.
    </p>

    <Button
      href="/career"
      variant="solid"
      className="bg-black text-blue-600 px-6 py-3 rounded-xl"
    >
      View Open Roles
    </Button>

  </div>

</div>
  
        </div>
      </section>

  
<section className="relative w-full h-[600px] pl-6 pr-0 pt-6">
  <div className="absolute inset-0 z-[-1]">
  
  </div>

{/* CONTENT ABOVE */}
  <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start">
    
    <motion.h2
      initial={{ x: -300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
     className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight"
    >
      <span className="block text-white ml-10">FRESHER</span>
      <span className="block text-white ml-20 mt-2">SPOT<span className="text-blue-300">LIGHT</span></span>
    </motion.h2>

    <div className="flex flex-col gap-4 mt-10 md:mt-0 w-full max-w-md">
      {[
        "Real-world skills from domain experts",
        "Work on live fintech projects",
        "Monthly stipend during training",
        "Industry-recognized certification",
        "Performance-based absorption",
        "Mentorship from senior developers",
      ].map((point, idx) => (
        <div
          key={idx}
          className="bg-gray-600 text-white-bold px-4 py-3 shadow-lg shadow-black/40 text-sm md:text-base"
        >
          {point}
        </div>
      ))}
    </div>
  </div>

  <div className="relative z-10 flex flex-wrap gap-4 mt-6 justify-center">
    <Button
      href="/JoinOurTeam"
      variant="solid"
      className="bg-black text-blue-600 px-6 py-3 rounded-xl"
    >
      Join Training Program
    </Button>
    <Button
      href="/our-team"
      variant="solid"
      className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg font-semibold"
    >
      Learn more
    </Button>
  </div>
  c

</section>



<section className="py-5">
  <div className="max-w-6xl mx-auto text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
        WHY JOIN US</h1>
     <h3 className="py-1">Start your journey with a company that values innovation and growth</h3>
    {/* Overlapping Boxes */}
    <div className="relative mt-14 sm:mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6
                      max-w-5xl mx-auto
                      mb-20 z-20 relative">
        
        {/* Box 1 */}
        <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-md border border-white/20 text-white shadow-lg">
          <h2 className="font-bold text-black text-xl">Pioneering Innovation</h2>
          <p className="text-black mt-2">We invest in R&D, prototyping and next-gen fintech experiments.</p>
        </div>

        {/* Box 2 */}
        <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-md border border-white/20 text-white shadow-lg">
          <h2 className="font-bold text-black text-xl">Unmatched Growth Culture</h2>
          <p className="text-black mt-2">Mentorship-driven ecosystem with clear technical career paths</p>
        </div>

        {/* Box 3 */}
        <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-md border border-white/20 text-white shadow-lg">
          <h2 className="font-bold text-black text-xl">Impactful Work & Benefits</h2>
          <p className="text-black mt-2">Competitive salary, health benefits, and flexible remote options.</p>
        </div>

      </div>
    </div>
  </div>
</section>
      
  <section
  className="relative w-full h-[600px] bg-cover bg-center"
  style={{ backgroundImage: "url('/home/img4.png')" }}
>
  {/* Overlay (optional for better readability) */}
  <div className="absolute inset-0 bg-black/40 -z-10"></div>

  <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col md:flex-row items-center justify-center px-6 md:px-12 gap-8">
    
    {/* Left Column */}
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">

        Work on Meaningful Projects
      </h2>
      <p className="mt-4 text-white/80 md:text-lg">
        Collaborate with experts and make a real impact in the fintech space.
      </p>
    </div>

    {/* Right Column */}
    <div className="flex-1 flex flex-col gap-3 md:gap-4 pl-4 md:pl-36">
      {[
  "RBI-Compliant Financial Software",
  "Custom Enterprise Fintech Solutions",
  "Expert Team from Top Financial Institutions",
  "24/7 Technical Support & Maintenance",
  "Agile Development with Quick Turnaround",
  "ISO 27001 Certified Security Standards"
].map((point, idx) => (
  <div key={idx} className="flex items-start gap-2 text-white text-sm md:text-base">
    {/* Blue bullet */}
    <span className="w-2 h-2 mt-2 rounded-full bg-blue-500"></span>

    {/* Text */}
    <span>{point}</span>
  </div>
))}

    </div>

  </div>
</section>


    </main>
  );
}
