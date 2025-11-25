"use client";

import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import ApplyForm from "../../components/ui/applyForm";
import Image from "next/image";
import Link from "next/link";


import {
  MapPin,
  Briefcase,
  Clock,
  Search,
  ArrowRight,
  TrendingUp,
  Users,
  Zap,
  Award,
  Heart,
  BookOpen,
} from "lucide-react";
import { useState } from "react";

const jobs = [
  { id: 1, title: "Senior Backend Engineer", department: "Engineering - Remote Eligible", location: "Atlanta, GA", type: "Full-time" },
  { id: 2, title: "Product Manager - Core Banking", department: "Product - Remote USA", location: "New York, NY", type: "Full-time" },
  { id: 3, title: "Digital Marketing Specialist", department: "Marketing - Remote USA", location: "Atlanta, GA", type: "Full-time" },
];

const benefits = [
  { icon: TrendingUp, title: "Training Internship", description: "Comprehensive onboarding and continuous learning opportunities to accelerate your career." },
  { icon: Users, title: "Pre-structured Skillset/Toolbox", description: "Access to cutting-edge tools and technologies from day one." },
  { icon: Zap, title: "Your Hand Picked", description: "We carefully select team members who align with our values and mission." },
  { icon: Award, title: "Letter of Recommendation", description: "Get professional recommendations and career support from industry leaders." },
  { icon: Heart, title: "Stipend & Access Training", description: "Competitive compensation with ongoing professional development." },
  { icon: BookOpen, title: "Industry & Career Training", description: "Specialized training programs to help you excel in fintech." },
];


export default function Careers() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full text-white pb-20 bg-cover bg-center bg-fixed"
     style={{ backgroundImage: "url('/home/img12.png')" }}
     >
      {/* Hero Section */}
      <section className=" relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-white mb-4 text-5xl font-bold md:text-6xl">
              Launch Your Fintech Career with <span className="text-blue-500">Infyntrek Systemes</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our program is free. Hands-on project work and learning through and beyond the world of Fintech.
            </p>
          </motion.div>

          <motion.div className="grid gap-6 md:grid-cols-3 mt-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Card className="p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-primary">95%</div>
              <div className="text-blue-800 text-muted-foreground">Placement Rate</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-primary">₹<AnimatedNumber value={7} />k</div>
              <div className="text-sm text-muted-foreground">Monthly Stipend</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-primary">6 Months</div>
              <div className="text-sm text-muted-foreground">Intensive Training</div>
            </Card>
          </motion.div>
        </div>
        <section className="text-center py-24">
  <div className="flex justify-center gap-4">
    {/* Apply Now Button */}
    <ApplyForm />
    <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 bg-black/90 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/contact">Learn More</Link>
              </Button>
  </div>
</section>

      </section>


    <section className="py-10">
  <div className="mx-auto max-w-7xl px-6">
    <h2 className="text-center text-4xl font-bold text-white mb-12">
      Career Categories
    </h2>

    <div className="grid gap-8 md:grid-cols-3">
      
      {/* Fresher */}
      <Link
        href="/career"
        className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center shadow-xl transition hover:scale-105"
      >
        <h3 className="text-2xl font-semibold text-white mb-4">Fresher</h3>
        <p className="text-gray-300 mb-6">
          Opportunities tailored for students and recent graduates.
        </p>
        <span className="inline-block px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
          Learn More About
        </span>
      </Link>

      {/* Tech Role */}
      <Link
        href="/tech"
        className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center shadow-xl transition hover:scale-105"
      >
        <h3 className="text-2xl font-semibold text-white mb-4">Tech Role</h3>
        <p className="text-gray-300 mb-6">
          Explore opportunities in development, engineering, and IT roles.
        </p>
        <span className="inline-block px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
          Learn More About
        </span>
      </Link>

      {/* Non-Tech Role */}
      <Link
        href="/nontech"
        className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center shadow-xl transition hover:scale-105"
      >
        <h3 className="text-2xl font-semibold text-white mb-4">Non-Tech Role</h3>
        <p className="text-gray-300 mb-6">
          Roles in management, HR, marketing, and business operations.
        </p>
        <span className="inline-block px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
          Learn More About
        </span>
      </Link>

    </div>
  </div>
</section>


  {/* Background Image */}
    <section className="relative w-full py-10">


  {/* Content */}
  <div className="mx-auto max-w-7xl px-6 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="mb-4 text-4xl font-bold text-white">
  <span className="bg-[#0A2A43] px-4 py-2 rounded-lg">
    Program Benefits
  </span>
</h2>


      <p className="mx-auto max-w-2xl text-gray-200">
        Join our comprehensive program and get access to world-class training and opportunities.
      </p>
    </motion.div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black/20">
              <benefit.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-2 text-white text-xl font-semibold">{benefit.title}</h3>
            <p className="text-white">{benefit.description}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-14">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="mb-4 text-4xl font-bold text-primary-foreground">Ready to Start Your Journey?</h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Apply to our hands-on program today and start building your career in fintech.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="#openings">Submit Resume</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  return <span>{value}</span>;
}
