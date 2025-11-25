"use client";

import { useState } from "react";
import Link from "next/link";
import Support from "../../components/animation/Support";
import ScheduleMeetingModal from "../../components/ui/ScheduleMeetingModal";


export default function ContactPage() {
  const [faqOpen, setFaqOpen] = useState([true, false, false, false]);

  const toggleFaq = (idx) => {
    setFaqOpen((s) => s.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    
      <main className="min-h-screen w-full text-white pb-20 bg-cover bg-center bg-fixed"
     style={{ backgroundImage: "url('/home/img8.png')" }}
     >


      {/* HERO */}
      <section className="pt-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="py-10">
            <h1 className="text-4xl text-black md:text-5xl font-extrabold leading-tight">
              Let's Build the Future of Fintech, Together.
            </h1>
            <p className="text-gray-400 mt-4 max-w-lg">
              Our global remote team is dedicated to crafting innovative solutions. Reach out to discover
              how we can collaborate and drive your success.
            </p>

            <div className="mt-6">
              <Link href="#contact-form" className="inline-block px-5 py-3 bg-blue-600 rounded-md">
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="flex-none w-[220px]">
              <Support />
            </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <a
            href="mailto:inquiries@infyntrek.com"
            className="block cursor-pointer hover:bg-white/30 transition"
          >
          <div className="bg-[#111827]/80 p-6 rounded-lg border border-white/6 text-center">
            <div className="text-2xl mb-2">✉️</div>
            <h4 className="font-semibold">Email Us</h4>
            <p className="text-gray-400 text-sm mt-2">
              inquiries@infyntrek.com<br />General questions
            </p>
          </div>
          </a>
          
          <a
            href="mailto:support@infyntrek.com"
            className="block cursor-pointer hover:bg-white/30 transition"
          >
          <div className="bg-[#111827]/80 p-6 rounded-lg border border-white/6 text-center">
            <div className="text-2xl mb-2">🛠️</div>
            <h4 className="font-semibold">Get Support</h4>
            <p className="text-gray-400 text-sm mt-2">
              support@infyntrek.com<br />Technical assistance
            </p>
          </div>
          </a>
  

          <a
            href="tel:+15551234567"
            className="block cursor-pointer hover:bg-white/30 transition"
          >
          <div className="bg-[#111827]/80 p-6 rounded-lg border border-white/6 text-center">
            <div className="text-2xl mb-2">📞</div>
            <h4 className="font-semibold">Give us a Call</h4>
            <p className="text-gray-400 text-sm mt-2">
              +1 (555) 123-4567<br />Mon-Fri, 9am–5pm PST
            </p>
          </div>
          </a>

          <div className="text-center">
            <ScheduleMeetingModal />
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" className="max-w-7xl mx-auto px-6 mt-16">
        <h2 className="text-center text-2xl font-semibold">Send us a Message</h2>

        <form className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <input className="bg-[#0F1724] border border-white/10 rounded px-4 py-3" placeholder="Full Name" />
          <input className="bg-[#0F1724] border border-white/10 rounded px-4 py-3" placeholder="Email Address" />
          <input className="bg-[#0F1724] border border-white/10 rounded px-4 py-3" placeholder="Company" />
          <input className="bg-[#0F1724] border border-white/10 rounded px-4 py-3" placeholder="Phone Number" />

          <select className="bg-[#0F1724] border border-white/10 rounded px-4 py-3">
            <option>Select a service</option>
            <option>Asset Financing</option>
            <option>Lending & Credit</option>
            <option>KYC Automation</option>
          </select>

          <select className="bg-[#0F1724] border border-white/10 rounded px-4 py-3">
            <option>Select a budget</option>
            <option>$10k - $50k</option>
            <option>$50k - $200k</option>
            <option>$200k+</option>
          </select>

          <input
            className="col-span-1 lg:col-span-2 bg-[#0F1724] border border-white/10 rounded px-4 py-3"
            placeholder="Subject"
          />

          <textarea
            className="col-span-1 lg:col-span-2 bg-[#0F1724] border border-white/10 rounded px-4 py-3 h-36"
            placeholder="Message"
          ></textarea>

          <div className="col-span-1 lg:col-span-2 flex justify-center">
            <button type="button" className="px-8 py-3 bg-blue-600 rounded-md">
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* FOOTPRINT */}
      <section className="max-w-7xl mx-auto px-6 mt-20 text-center">
        <h3 className="text-5xl font-semibold">Our Global <span className="text-black italic">Footprint</span>
        </h3>
        <p className="text-gray-400 mt-2">
          We're a distributed team with a presence in key technology hubs around the world.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-black/60 flex flex-col items-center justify-center p-6 rounded-full border border-white/20 w-48 h-48 mx-auto">
            <div className="text-3xl mb-2">📍</div>
            <h4 className="font-semibold text-lg">Seattle, USA</h4>
            <p className="text-gray-400 text-sm">Headquarters</p>
          </div>

          <div className="bg-black/60 flex flex-col items-center justify-center p-6 rounded-full border border-white/20 w-48 h-48 mx-auto">
            <div className="text-2xl mb-2">🌐</div>
            <h4 className="font-semibold">Bangalore, India</h4>
            <p className="text-gray-400 text-sm">Development Hub</p>
          </div>

          <div className="bg-black/80 flex flex-col items-center justify-center p-6 rounded-full border border-white/20 w-48 h-48 mx-auto">
            <div className="text-2xl mb-2">🏢</div>
            <h4 className="font-semibold">Mumbai, India</h4>
            <p className="text-gray-400 text-sm">Regional Office</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="min-h-screen w-full bg-blue text-white pt-[80px] px-0">
  <div className="w-full lg:w-1/2 max-w-none px-0 lg:px-0"> 
    {/* No left margin, no padding, left aligned */}

    <h3 className="text-2xl font-semibold px-26 flex items-center gap-3">
  <img 
    src="/home/faq.png" 
    alt="FAQ icon" 
    className="w-10 h-10 object-contain"
  />
  Frequently Asked Questions
</h3>


    <div className="mt-8 space-y-4 px-0">
      {[
        {
          q: "How do you collaborate with clients remotely?",
          a: "We use modern collaboration tools like Slack, Jira, and Zoom...",
        },
        {
          q: "What is your typical response time for inquiries?",
          a: "Our team generally responds within 24–48 hours...",
        },
        {
          q: "Do you offer free consultations?",
          a: "Yes — we offer an initial discovery session at no cost...",
        },
        {
          q: "How do you ensure the security of my data?",
          a: "We follow strict security practices including encrypted data transport...",
        },
      ].map((f, i) => (
        <div
          key={i}
          className="bg-white/50 border border-white/6 rounded-r-lg rounded-l-none overflow-hidden w-full"
        >
          <button
            onClick={() => toggleFaq(i)}
            className="w-full text-left px-6 py-4 flex items-center justify-between"
          >
            <p className="font-medium text-black">{f.q}</p>
            <span className="text-black">{faqOpen[i] ? "−" : "+"}</span>
          </button>

          {faqOpen[i] && (
            <div className="px-6 pb-4">
              <p className="text-black">{f.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>

  </div>
</section>


     
    </main>
  );
}
