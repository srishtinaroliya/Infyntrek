"use client";

import React, { useState } from "react";
import ApplyJob from "../../components/ui/applyJob";


interface TechRole {
  title: string;
  department: string;
  location: string;
  experience: string;
  salary: string;
  description: string;
  skills: string[];
  benefits: string[];
  urgent?: boolean;
}

const techRoles: TechRole[] = [
  {
    title: "Software Development Intern",
    department: "Engineering",
    location: "Remote (Global)",
    experience: "0-1 years",
    salary: "$72 - $84 / month",
    description:
      "Gain hands-on experience in building and developing software applications within a fast-paced fintech environment.",
    skills: ["Python", "JavaScript", "Data Structures", "Algorithms", "+1 more"],
    benefits: [
      "Mentorship from experienced engineers",
      "Opportunity to work on real-world projects",
      "Flexible working hours",
    ],
  },
  {
    title: "Data Science & ML Intern",
    department: "Data & Analytics",
    location: "Remote (Global)",
    experience: "0-1 years",
    salary: "$72 - $84 / month",
    description:
      "Explore and apply machine learning techniques to real-world financial data, contributing to innovative solutions.",
    skills: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "+1 more"],
    benefits: [
      "Hands-on experience with large datasets",
      "Guidance from data scientists",
      "Exposure to cutting-edge ML applications in fintech",
    ],
  },
  {
    title: "Data Analytics Intern",
    department: "Data & Analytics",
    location: "Remote (Global)",
    experience: "0-1 years",
    salary: "$72 - $84 / month",
    description:
      "Help uncover valuable insights from financial data to support business decisions and improve product performance.",
    skills: ["SQL", "Excel", "Tableau", "Power BI", "+1 more"],
    benefits: [
      "Practical experience in data analysis",
      "Understanding of business intelligence processes",
      "Mentorship opportunities",
    ],
    urgent: true,
  },
  {
    title: "UI/UX Design Intern",
    department: "Product Design",
    location: "Remote (Global)",
    experience: "0-1 years",
    salary: "$72 - $84 / month",
    description:
      "Contribute to creating intuitive and visually appealing user interfaces for our fintech products.",
    skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "+1 more"],
    benefits: [
      "Hands-on experience in product design",
      "Mentorship from experienced designers",
      "Opportunity to impact user experience of financial products",
    ],
  },
];


const Tech: React.FC = () => {
  const [filter, setFilter] = useState<string>("All Roles");

  const filters = ["All Roles", "Urgent", "HR", "Marketing", "Operations"];

  const filteredRoles = techRoles.filter((role) => {
    if (filter === "All Roles") return true;
    if (filter === "Urgent") return role.urgent;
    if (filter === "HR") return role.department.toLowerCase().includes("hr");
    if (filter === "Marketing") return role.department.toLowerCase().includes("marketing");
    if (filter === "Operations") return role.department.toLowerCase().includes("operations");
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0B1220] text-white py-12 px-6 pt-[80px]">
      <h1 className="text-4xl font-bold text-center mb-8">Current Tech Opportunities</h1>
      <h2 className="text-center mb-8">We're actively hiring for these technology roles, including internships. All positions are remote-first with competitive compensation.</h2>


      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            className={`px-4 py-2 rounded-full border ${
              filter === f ? "bg-blue-500 text-white border-blue-500" : "border-blue-500 text-blue-500"
            }`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Role Cards */}
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        {filteredRoles.map((role, idx) => (
          <div
            key={idx}
            className="bg-[#111827] rounded-xl border border-white/10 shadow-lg flex flex-col md:flex-row p-6 items-start gap-6"
          >
            {/* Left: Job Info */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold">{role.title}</h2>
                {role.urgent && (
                  <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">Urgent</span>
                )}
              </div>
              <div className="text-gray-400 text-sm mb-2 flex flex-wrap gap-2">
                <span>💼 {role.department}</span>
                <span>📍 {role.location}</span>
                <span>🕒 {role.experience}</span>
                <span>💰 {role.salary}</span>
              </div>
              <p className="text-gray-300 mb-2">{role.description}</p>
              <div className="mb-2">
                <h4 className="font-semibold text-gray-200">Key Skills:</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {role.skills.map((skill, i) => (
                    <span key={i} className="bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {role.benefits && (
                <div>
                  <h4 className="font-semibold text-gray-200">Key Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-400 mt-1">
                    {role.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right: Action Buttons */}
            <div className="flex flex-col gap-2 md:w-40 md:justify-start mt-4 md:mt-0">
              <ApplyJob />
              <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50">
                View Details
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
                Save for Later
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold">Your Path to Joining Our Team</h2>
        </div>

        <div className="mt-16 relative mx-auto max-w-4xl">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-700 -translate-x-1/2"></div>

          <div className="space-y-16">
            {/* TIMELINE ITEM */}
            <div className="flex items-center justify-between">
              <div className="w-5/12 text-right">
                <h4 className="font-semibold">Application Review</h4>
                <p className="text-gray-400 text-sm">
                  HR team reviews your application and background.
                </p>
              </div>

              <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-[#0b0f15]"></div>

              <div className="w-5/12"></div>
            </div>

            <div className="flex items-center justify-between">
              <div className="w-5/12"></div>

              <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-[#0b0f15]"></div>

              <div className="w-5/12">
                <h4 className="font-semibold">Phone Screening</h4>
                <p className="text-gray-400 text-sm">
                  Initial conversation about your experience and fit
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="w-5/12 text-right">
                <h4 className="font-semibold">2Case Study/Assessment</h4>
                <p className="text-gray-400 text-sm">
                  Role-specific assessment or case study presentation.
                </p>
              </div>

              <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-[#0b0f15]"></div>

              <div className="w-5/12"></div>
            </div>

            <div className="flex items-center justify-between">
              <div className="w-5/12"></div>

              <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-[#0b0f15]"></div>

              <div className="w-5/12">
                <h4 className="font-semibold">Panel Interview</h4>
                <p className="text-gray-400 text-sm">
                  Meet with hiring manager and team members.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="w-5/12 text-right">
                <h4 className="font-semibold">Final Interview</h4>
                <p className="text-gray-400 text-sm">
                  Leadership interview and cultural fit assessment
                </p>
              </div>

              <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-[#0b0f15]"></div>

              <div className="w-5/12"></div>
            </div>

            <div className="flex items-center justify-between">
              <div className="w-5/12"></div>

              <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-[#0b0f15]"></div>

              <div className="w-5/12">
                <h4 className="font-semibold">Offer & Onboarding</h4>
                <p className="text-gray-400 text-sm">
                  Reference check, offer, and remote onboarding.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Tech;
