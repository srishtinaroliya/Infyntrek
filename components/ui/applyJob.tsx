"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, Link as LinkIcon, School } from "lucide-react";

export default function InternshipModal() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  experience: "",
  location: "",
  salary: "",
  education: "",
  noticePeriod: "",
  linkedIn: "",
  portfolio: "",
  coverLetter: "",
});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
    setOpen(false);
  };

  return (
    <div className="relative">
      <Button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 text-lg shadow-md"
      >
        Apply Now
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-[#0B1221] rounded-xl p-0 max-w-3xl w-full text-white relative overflow-y-auto max-h-[90vh] shadow-2xl border border-white/10"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 rounded-t-xl">
                <h2 className="text-2xl font-bold">Infyntrek Internship Application</h2>
                <p className="text-white/80 mt-1">
                  Fill out the form below to apply for our program.
                </p>
              </div>

              <div className="p-6">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <Input
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="bg-[#1E293B] border-white/10"
                  />

                  {/* Email */}
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#1E293B] border-white/10"
                  />

                  {/* Phone */}
                  <Input
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-[#1E293B] border-white/10"
                  />

                  {/* Experience */}
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="bg-[#1E293B] text-white p-3 rounded border border-white/10"
                  >
                    <option value="">Years of Experience *</option>
                    <option>0-1</option>
                    <option>1-3</option>
                    <option>3-5</option>
                    <option>5+</option>
                  </select>

                  {/* Location */}
                  <Input
                    name="location"
                    placeholder="Current Location *"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="bg-[#1E293B] border-white/10"
                  />

                  {/* Expected Salary */}
                  <Input
                    name="salary"
                    placeholder="Expected Salary (USD) e.g., $70,000"
                    value={formData.salary}
                    onChange={handleChange}
                    className="bg-[#1E293B] border-white/10"
                  />

                  {/* Highest Education */}
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="bg-[#1E293B] text-white p-3 rounded border border-white/10"
                  >
                    <option value="">Highest Education</option>
                    <option>High School</option>
                    <option>Bachelor's</option>
                    <option>Master's</option>
                    <option>PhD</option>
                  </select>

                  {/* Notice Period */}
                  <select
                    name="noticePeriod"
                    value={formData.noticePeriod}
                    onChange={handleChange}
                    className="bg-[#1E293B] text-white p-3 rounded border border-white/10"
                  >
                    <option value="">Notice Period</option>
                    <option>Immediate</option>
                    <option>1 Month</option>
                    <option>2 Months</option>
                    <option>3+ Months</option>
                  </select>

                  {/* LinkedIn */}
                  <Input
                    name="linkedIn"
                    placeholder="LinkedIn Profile"
                    value={formData.linkedIn}
                    onChange={handleChange}
                    className="bg-[#1E293B] border-white/10 md:col-span-2"
                  />

                  {/* Portfolio */}
                  <Input
                    name="portfolio"
                    placeholder="Portfolio/Website"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="bg-[#1E293B] border-white/10 md:col-span-2"
                  />

                  {/* Cover Letter */}
                  <Textarea
                    name="coverLetter"
                    placeholder="Cover Letter *"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    required
                    className="bg-[#1E293B] border-white/10 md:col-span-2"
                  />

                  <Button
                    type="submit"
                    className="w-full md:col-span-2 bg-blue-600 hover:bg-blue-700 py-3 text-lg mt-2"
                  >
                    Submit Application
                  </Button>
                </form>
              </div>

              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-white/80 hover:text-white text-2xl"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
