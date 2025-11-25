"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Sarah Chen",
    position: "VP of Engineering",
    location: "San Francisco, CA (Remote)",
    experience: "10+ years",
    roles: ["Scalable Architecture", "Team Leadership", "Tech Strategy"],
  },
  {
    name: "Vikram Sing",
    position: "Senior Product Manager",
    location: "Berlin, Germany",
    experience: "12 years",
    roles: ["Product Planning", "DevOps Coordination", "QA Oversight"],
  },
  {
    name: "Support & Training",
    position: "Team",
    location: "Remote",
    experience: "Varies",
    roles: ["Technical Support", "Training Coordinators", "Documentation Specialists", "Client Success"],
  },
  {
    name: "Jennifer Park",
    position: "Head of Design",
    location: "Toronto, Canada (Remote)",
    experience: "9+ years",
    roles: ["UX Design", "Design Systems", "Prototyping"],
  },
  {
    name: "John Doe",
    position: "Data Scientist",
    location: "New York, USA",
    experience: "7 years",
    roles: ["Machine Learning", "Data Analysis", "Model Deployment"],
  },
  {
    name: "Anita Kapoor",
    position: "Marketing Lead",
    location: "London, UK",
    experience: "8 years",
    roles: ["SEO Strategy", "Content Marketing", "Campaign Management"],
  },
];

export default function JobCategories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 mx-6 md:mx-12 gap-6 border border-white/20">

      {categories.map((cat, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.05,
            y: -8,
            boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
            backgroundColor: "rgba(255, 255, 255, 0.18)",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="p-6  bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg"
        >
          {/* Name */}
          <h2 className="text-xl font-semibold mb-1 text-blue-200">{cat.name}</h2>

          {/* Position & Experience */}
          <p className="text-white/80 text-sm mb-1">{cat.position} • {cat.experience}</p>

          {/* Location */}
          <p className="text-blue text-xs mb-3">{cat.location}</p>

          {/* Roles / Work */}
          <ul className="space-y-1 text-white/80 text-sm">
            {cat.roles.map((role, i) => (
              <li key={i}>• {role}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
