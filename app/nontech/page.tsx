"use client";

import React, { useState } from "react";
import ApplyJob from "../../components/ui/applyJob";

interface NonTechRole {
  title: string;
  department: string;
  location: string;
  experience: string;
  salary: string;
  description: string;
  skills: string[];
  benefits?: string[];
  urgent?: boolean;
}

const careerCategories = [
  {
    title: "Product & Strategy",
    roles: ["Product Manager", "Business Analyst", "Strategy Consultant"],
  },
  {
    title: "Sales & Marketing",
    roles: ["Sales Executive", "Marketing Manager", "Growth Specialist"],
  },
  {
    title: "Client Success",
    roles: ["Client Success Manager", "Account Manager", "Support Lead"],
  },
  {
    title: "Operations & HR",
    roles: ["Operations Manager", "HR Business Partner", "Finance Manager"],
  },
];

const nonTechRoles: NonTechRole[] = [
  {
    title: "HR Business Partner",
    department: "Human Resources",
    location: "Remote (Americas)",
    experience: "5+ years",
    salary: "$75,000 - $105,000",
    description:
      "Partner with leadership to develop and execute HR strategies that support our rapid growth and remote-first culture.",
    skills: ["HR Strategy", "Talent Acquisition", "Employee Relations", "Performance Management"],
    benefits: ["Competitive salary package", "Comprehensive health benefits", "Remote work stipend"],
  },
  {
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "Remote (Global)",
    experience: "4+ years",
    salary: "$65,000 - $95,000",
    description:
      "Drive digital marketing strategies to increase brand awareness and generate qualified leads for our fintech solutions.",
    skills: ["Digital Marketing", "Content Marketing", "Marketing Automation", "SEO/SEM", "+4 more"],
    benefits: ["Competitive salary", "Marketing tool subscriptions", "Remote work flexibility"],
    urgent: true,
  },
  {
    title: "Enterprise Sales Executive",
    department: "Sales",
    location: "Remote (Americas/Europe)",
    experience: "5+ years",
    salary: "$80,000 - $120,000 + Commission",
    description:
      "Drive revenue growth by selling our fintech solutions to enterprise clients and financial institutions.",
    skills: ["Enterprise Sales", "B2B Sales", "Financial Services", "Negotiation", "+4 more"],
    benefits: ["Base salary plus uncapped commission", "Sales performance bonuses", "Remote work setup"],
    urgent: true,
  },
  {
    title: "Training Program Coordinator",
    department: "Learning & Development",
    location: "Remote (India/APAC)",
    experience: "2+ years",
    salary: "$35,000 - $55,000",
    description:
      "Coordinate and manage our fresher training programs and professional development initiatives.",
    skills: ["Training Design", "Curriculum Development", "Learning Management", "Project Coordination", "+4 more"],
    benefits: ["Competitive local market salary", "Professional development opportunities", "Remote work flexibility"],
  },
  {
    title: "Operations Manager",
    department: "Operations",
    location: "Remote (Global)",
    experience: "4+ years",
    salary: "$70,000 - $100,000",
    description:
      "Oversee daily operations and drive process improvements to support our growing team and business objectives.",
    skills: ["Operations Management", "Process Improvement", "Project Management", "Financial Planning", "+4 more"],
    benefits: ["Competitive salary", "Operations management training", "Remote work environment"],
  },
];

const NonTech: React.FC = () => {
  const [filter, setFilter] = useState<string>("All Roles");

  const filters = ["All Roles", "Urgent", "HR", "Marketing", "Operations"];

  const filteredRoles = nonTechRoles.filter((role) => {
    if (filter === "All Roles") return true;
    if (filter === "Urgent") return role.urgent;
    if (filter === "HR") return role.department.toLowerCase().includes("hr");
    if (filter === "Marketing") return role.department.toLowerCase().includes("marketing");
    if (filter === "Operations") return role.department.toLowerCase().includes("operations");
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0B1220] text-white py-12 px-6 pt-[80px]">
      <h1 className="text-4xl font-bold text-center mb-8">Non-Tech Open Positions</h1>

 <section className="mb-12 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Career Categories</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {careerCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white/10 text-gray-800 p-6 rounded-xl shadow-md text-left"
            >
              <div className="flex items-center gap-2 mb-3">
          {/* Add icons using emojis */}
          {category.title === "Product & Strategy" && <span>📦</span>}
          {category.title === "Sales & Marketing" && <span>🎯</span>}
          {category.title === "Client Success" && <span>😊</span>}
          {category.title === "Operations & HR" && <span>⚙️</span>}
          
          <h3 className="font-semibold text-white">{category.title}</h3>
        </div>
              <ul className="list-disc list-inside text-white">
                {category.roles.map((role, i) => (
                  <li key={i}>{role}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

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

export default NonTech;
