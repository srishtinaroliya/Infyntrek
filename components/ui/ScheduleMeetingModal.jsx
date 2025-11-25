"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScheduleMeetingModal() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Meeting Request Submitted", formData);
    alert("Your meeting request has been submitted!");
    setOpen(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-[#111827]/80 p-6 rounded-lg border border-white/6 text-center block cursor-pointer hover:bg-white/30 transition w-full"
      >
        <div className="text-2xl mb-2">📅</div>
        <h4 className="font-semibold">Schedule a Meeting</h4>
        <p className="text-gray-400 text-sm mt-2">
          Live Chat: 9am–5pm PST<br />Book a free consultation
        </p>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#0B1221] p-6 rounded-xl w-full max-w-lg border border-white/10"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">
                Request a Meeting
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="firstName"
                    placeholder="First Name"
                    className="w-full px-4 py-2 rounded bg-[#111827] border border-white/10"
                    onChange={handleChange}
                  />
                  <input
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full px-4 py-2 rounded bg-[#111827] border border-white/10"
                    onChange={handleChange}
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded bg-[#111827] border border-white/10"
                  onChange={handleChange}
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="date"
                    type="date"
                    className="w-full px-4 py-2 rounded bg-[#111827] border border-white/10"
                    onChange={handleChange}
                  />
                  <input
                    name="time"
                    type="time"
                    className="w-full px-4 py-2 rounded bg-[#111827] border border-white/10"
                    onChange={handleChange}
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Message (optional)"
                  className="w-full px-4 py-2 rounded bg-[#111827] border border-white/10 h-24"
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg"
                >
                  Request Meeting
                </button>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-full mt-2 bg-gray-600 hover:bg-gray-700 py-2 rounded-lg"
                >
                  Close
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
