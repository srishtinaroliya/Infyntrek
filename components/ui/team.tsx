"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Leader {
  name: string;
  role: string;
  location: string;
  experience: string;
  about: string;
  expertise: string[];
  education: string;
  achievements: string[];
  photo?: string;
}

const leaders: Leader[] = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    location: "Seattle, WA (Remote)",
    experience: "15+ years",
    photo: "home/photo1.png",
    about:
      "Visionary leader with 15+ years in financial services and fintech. Previously served as VP of Digital Banking at HDFC Bank and led fintech initiatives at ICICI Bank. Founded FinanceStream with the mission to democratize financial technology.",
    expertise: ["Strategic Planning", "Financial Services", "RBI Regulations", "Business Development", "Team Leadership"],
    education: "MBA Finance, IIM Bangalore | B.Tech, IIT Delhi",
    achievements: ["Led ₹1 Cr+ revenue growth", "Built team from 5 to 84 members", "RBI compliance expert"],
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    location: "Bangalore, India (Remote)",
    experience: "12+ years",
    photo: "home/photo2.png",
    about: "Elara is a visionary leader dedicated to revolutionizing fintech with innovative financial technologies.",
    expertise: ["Fintech Strategy", "Leadership", "Innovation Management"],
    education: "MBA, Harvard Business School | B.Tech, MIT",
    achievements: ["Scaled startup to $50M revenue", "Built team of 120 members"],
  },
  {
    name: "Amit Patel",
    role: "Head of Compliance & Risk",
    location: "Mumbai, India (Remote)",
    experience: "18+ years",
    photo: "home/photo3.png",
    about: "Former RBI official with deep expertise in financial regulations and compliance frameworks. Specialized in NBFC regulations, AML policies, and risk management for financial institutions.",
    expertise: ["RBI Compliance","Risk Management", "AML/KYC Frameworks","Regulatory Affairs","Audit & Assessment"],
    education: "M.Com, Mumbai University | Chartered Accountant",
    achievements: ["15+ years at RBI", "Compliance framework architect","Industry thought leader"],
  },
];

export default function TeamCards() {
  const [openLeader, setOpenLeader] = useState<Leader | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 relative">
      {leaders.map((leader, idx) => (
        <div
          key={idx}
          className=" border border-gray-800 rounded-lg p-6 flex flex-col items-center relative"
        >
          <img
            src={leader.photo || "/default-profile.png"}
            alt={leader.name}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h3 className="font-semibold text-lg">{leader.name}</h3>
          <p className="text-sm text-blue-400">{leader.role}</p>
          <p className="text-xs text-gray-100 mt-1">{leader.location}</p>

          <button
            className="mt-4 text-blue-400 hover:text-white flex items-center gap-1"
            onClick={() => setOpenLeader(leader)}
          >
            <span>Details</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      ))}

      {/* Overlay Popup */}
      <AnimatePresence>
        {openLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-[#0B1221] p-8 rounded-xl max-w-2xl w-full text-white relative overflow-y-auto max-h-[90vh]"
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setOpenLeader(null)}
              >
                ✕
              </button>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={openLeader.photo || "/default-profile.png"}
                  alt={openLeader.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold">{openLeader.name}</h3>
                  <p className="text-blue-400">{openLeader.role}</p>
                  <p className="text-gray-400 text-sm mt-1">
                    {openLeader.experience} • {openLeader.location}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{openLeader.about}</p>

              <p className="font-semibold mt-2">Expertise</p>
              <ul className="list-disc list-inside mb-2">
                {openLeader.expertise.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>

              <p className="font-semibold mt-2">Education</p>
              <p className="mb-2">{openLeader.education}</p>

              <p className="font-semibold mt-2">Key Achievements</p>
              <ul className="list-disc list-inside">
                {openLeader.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
