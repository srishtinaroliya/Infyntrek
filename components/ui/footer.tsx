"use client";

import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";         // valid
import { FaLocationDot } from "react-icons/fa6";   // valid


export default function Footer() {
  return (
    <footer className="bg-[#0e1620] text-white/80 border-t border-white/10 mt-20 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* LEFT Section */}
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-500 rotate-45 block"></span>
            Infyntrek Systèmes
          </h2>

          <p className="mt-3 text-sm max-w-xs">
            Infyntrek Systèmes is a fast-growing fintech innovation startup,
            creating next-generation financial solutions in collaboration
            with industry leaders.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-white/70">
            <FaLinkedin className="w-5 h-5 cursor-pointer hover:text-white" />
            <FaTwitter className="w-5 h-5 cursor-pointer hover:text-white" />
            <FaFacebook className="w-5 h-5 cursor-pointer hover:text-white" />
            <FaInstagram className="w-5 h-5 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold text-white mb-3">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Services</li>
            <li>Our Team</li>
            <li>Training Program</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold text-white mb-3">OUR SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>RBI Compliance Solutions</li>
            <li>Fintech Development</li>
            <li>API Integration</li>
            <li>Mobile App Development</li>
            <li>Consulting Services</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold text-white mb-3">CONTACT US</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <IoMail className="text-blue-400" />
              contact@infyntrek.com
            </li>

            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-400" />
              +1 (234) 567-890
            </li>

            <li className="flex items-center gap-2">
              <FaLocationDot className="text-blue-400" />
              123 Fintech Avenue, Innovation City, 45678
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <p className="text-center text-xs text-white/50 mt-10 border-t border-white/10 pt-4">
        © 2024 Infyntrek Systèmes. All rights reserved.
      </p>
    </footer>
  );
}
