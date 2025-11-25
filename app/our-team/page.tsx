import React from "react";
import Link from "next/link";
import Dept from "../../components/ui/dept";
import Team from "../../components/ui/team";

const OurTeam = () => {
  return (
    <div className="min-h-screen w-full text-white pb-20 bg-cover bg-center bg-fixed"
     style={{ backgroundImage: "url('/home/img7.png')" }}
     >

      {/* HERO */}
      <section className="pt-32 text-center max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold">
          Meet the Global Innovators Behind <br /> Infyntrek Systèmes
        </h1>
        <p className="text-gray-400 mt-4">
          Our diverse, remote-first team is building secure, scalable, and
          user-centric financial technologies.
        </p>
      </section>

      {/* METRICS */}
      <section className="max-w-5xl mx-auto px-6 mt-14 grid md:grid-cols-4 gap-6 text-center">
        {[
          { label: "Team Members", value: "150+" },
          { label: "Countries", value: "35+" },
          { label: "Departments", value: "6" },
          { label: "Retention Rate", value: "96%" },
        ].map((m, i) => (
          <div
            key={i}
            className="bg-[#141B2D] py-6 rounded-lg border border-gray-800"
          >
            <p className="text-gray-400 text-sm">{m.label}</p>
            <p className="text-2xl font-semibold mt-2">{m.value}</p>
          </div>
        ))}
      </section>
    <div className="py-26">
    <h1 className="text-4xl font-bold text-center"> Decades of Experience, One Mission </h1>
    <h2 className="text-center">Our leadership team has guided top financial institutions and fintech companies, bringing insight and vision to every solution we create.</h2>
    <Team />
    </div>

    <h2 className="text-4xl py-20 font-semibold text-center">Department Leaders & Specialists
    <Dept/>
    </h2>
      
      

      {/* DEPARTMENTS */}
      <section className="max-w-7xl mx-auto px-6 mt-20 text-center">
        <h2 className="text-2xl font-semibold">Where Expertise Meets Execution</h2>
        <p className="text-gray-400 mt-1">Six specialized departments working in harmony to build cutting-edge financial technology solutions</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "Engineering",
              desc: "Backend, DevOps, Security Engineering",
              members: "70+ Team Members",
            },
            {
              title: "Product & Design",
              desc: "Product Managers, UI/UX Designers",
              members: "25+ Team Members",
            },
            {
              title: "Client Success & Support",
              desc: "Customer Support, Account Managers",
              members: "20+ Team Members",
            },
            {
              title: "Compliance & Security",
              desc: "Compliance Analysts, InfoSec Experts",
              members: "15+ Team Members",
            },
            {
              title: "Operations & HR",
              desc: "People Ops, Talent Acquisition",
              members: "10+ Team Members",
            },
            {
              title: "Research & Innovation",
              desc: "Data Science, Machine Learning",
              members: "10+ Team Members",
            },
          ].map((d, i) => (
            <div
              key={i}
              className="p-6 bg-[#141B2D] border border-gray-800 rounded-lg"
            >
              <h3 className="font-semibold">{d.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{d.members}</p>
              <p className="text-gray-500 text-xs mt-2">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-5xl mx-auto px-6 mt-24 text-center">
  <h2 className="text-2xl font-semibold">Our Values & Ways of Working</h2>
  <p className="text-gray-400 mt-2">
    The principles guiding innovation and growth at Infyntrek.
  </p>

  <div className="grid md:grid-cols-4 gap-10 mt-10">
    {[
      {
        title: "Remote-First",
        text: "We hire globally with flexibility.",
        img: "/home/logo1.png", // Add your image URL here
      },
      {
        title: "Continuous Learning",
        text: "We invest in growth and upskilling.",
        img: "/home/logo2.png",
      },
      {
        title: "Innovation Mindset",
        text: "We push the boundaries of fintech.",
        img: "/home/logo3.png",
      },
      {
        title: "Work-Life Balance",
        text: "We support personal well-being.",
        img: "/home/logo4.png",
      },
    ].map((v, i) => (
      <div key={i} className="flex flex-col items-center">
        <img
          src={v.img}
          alt={v.title}
          className="w-16 h-16 rounded-full object-cover mb-4"
        />
        <h3 className="font-semibold">{v.title}</h3>
        <p className="text-gray-400 text-sm mt-2">{v.text}</p>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default OurTeam;
