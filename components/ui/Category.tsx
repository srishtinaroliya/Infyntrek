"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Software Development",
    roles: [
      "Frontend Developers",
      "Backend Engineers",
      "Full Stack Developers",
      "Mobile App Developers",
    ],
  },
  {
    title: "DevOps & Testing",
    roles: [
      "DevOps Engineers",
      "QA Engineers",
      "Test Automation Specialists",
      "Cloud Architects",
    ],
  },
  {
    title: "Support & Training",
    roles: [
      "Technical Support",
      "Training Coordinators",
      "Documentation Specialists",
      "Client Success",
    ],
  },
  {
    title: "Operations",
    roles: [
      "Business Analysts",
      "Project Managers",
      "HR Specialists",
      "Finance Operations",
    ],
  },
];

export default function JobCategories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
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
          className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-3 text-blue-200">{cat.title}</h2>
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
