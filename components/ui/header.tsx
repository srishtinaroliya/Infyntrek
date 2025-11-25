"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function NavbarLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        px-3 py-2 rounded-md transition-all duration-200
        ${isActive ? "text-blue-400 font-semibold" : "text-white/80"}
        hover:bg-blue-500 hover:text-white
      `}
    >
      {label}
    </Link>
  );
}

function Button({
  children,
  href,
  variant = "solid",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center px-5 py-2 rounded-full font-medium transition-shadow text-sm";

  const variants: Record<string, string> = {
    solid: "bg-blue-500 text-white shadow-md hover:shadow-lg",
    outline:
      "bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white",
    ghost: "bg-transparent text-white/90 hover:bg-white/3",
  };

  const content = <button className={`${base} ${variants[variant]} ${className}`}>{children}</button>;

  if (href) return <Link href={href}>{content}</Link>;
  return content;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-tight">
           
          <span className="flex items-center text-white text-xl font-light tracking-wide">
            <img
      src="/infotact-logo.png" // path to your favicon
      alt="logo"
      className="w-5 h-5 mr-2" // adjust size and spacing
    />
            Infy<span className="font-semibold text-blue">NTREK</span>
          </span>
          <span className="text-xs tracking-[0.20em] text-white/70">
            BUILD. INNOVATE. SCALE.
          </span>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-6">
          <NavbarLink href="/" label="Home" />
          <NavbarLink href="/about" label="About Us" />
          <NavbarLink href="/services" label="Services" />
          <NavbarLink href="/our-team" label="Our Team" />
          <NavbarLink href="/career" label="Career" />
          <NavbarLink href="/contact" label="Contact" />

          <Button href="/contact" variant="ghost">
            Get Consultation
          </Button>
          <Button href="/JoinOurTeam" variant="solid">
            Join Our Team
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navbar */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1720]/95 backdrop-blur-md px-6 py-4 space-y-3">
          <NavbarLink href="/" label="Home" />
          <NavbarLink href="/about" label="About Us" />
          <NavbarLink href="/services" label="Services" />
          <NavbarLink href="/our-team" label="Our Team" />
          <NavbarLink href="/career" label="Career" />
          <Button href="/contact" variant="ghost" className="w-full">
            Get Consultation
          </Button>
          <Button href="/join" variant="solid" className="w-full">
            Join Our Team
          </Button>
        </div>
      )}
    </header>
  );
}
