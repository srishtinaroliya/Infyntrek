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
    email: "",
    fullName: "",
    gender: "",
    qualification: "",
    college: "",
    program: "",
    duration: "",
    contact: "",
    portfolio: "",
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

                  {/* Full Name */}
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={18} />
                    <Input
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-[#1E293B] border-white/10"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-[#1E293B] border-white/10"
                    />
                  </div>

                  {/* Gender */}
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="bg-[#1E293B] text-white p-3 rounded border border-white/10"
                    required
                  >
                    <option value="" disabled>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>

                  {/* Qualification */}
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className="bg-[#1E293B] text-white p-3 rounded border border-white/10"
                    required
                  >
                    <option value="" disabled>Qualification</option>
                    <option>Bachelors</option>
                    <option>Masters</option>
                    <option>PhD</option>
                  </select>

                  {/* College */}
                  <div className="relative">
                    <School className="absolute left-3 top-3 text-gray-400" size={18} />
                    <Input
                      name="college"
                      placeholder="College / University"
                      value={formData.college}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-[#1E293B] border-white/10"
                    />
                  </div>

                  {/* Program */}
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="bg-[#1E293B] text-white p-3 rounded border border-white/10"
                    required
                  >
                    <option value="" disabled>Internship Program</option>
                    <option>Engineering</option>
                    <option>Product</option>
                    <option>Marketing</option>
                  </select>

                  {/* Duration */}
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="bg-[#1E293B] text-white p-3 rounded border border-white/10"
                    required
                  >
                    <option value="" disabled>Duration</option>
                    <option>4 Weeks</option>
                    <option>6 Weeks</option>
                  </select>

                  {/* Phone */}
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                    <Input
                      name="contact"
                      placeholder="Contact Number"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-[#1E293B] border-white/10"
                    />
                  </div>

                  {/* Portfolio */}
                  <div className="relative md:col-span-2">
                    <LinkIcon className="absolute left-3 top-3 text-gray-400" size={18} />
                    <Input
                      name="portfolio"
                      placeholder="Resume / LinkedIn / Portfolio / GitHub Link"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="pl-10 bg-[#1E293B] border-white/10"
                    />
                  </div>

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
