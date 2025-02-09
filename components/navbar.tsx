"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#github-activity", label: "GitHub" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (isOpen && Math.abs(window.scrollY - lastScrollY) > 10) {
        closeMenu();
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  const resumeUrl =
    "https://drive.google.com/uc?export=download&id=129VRi7SGY4BEpwHIodACtMFy6o5U1Ikn";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-white">
          SK
        </Link>
        <nav className="hidden space-x-4 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-300 transition-colors hover:text-white"
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button className="hidden md:inline-flex" asChild>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            Hire Me
          </a>
        </Button>
        {/* Hamburger Menu Button */}
        <Button variant="ghost" className="md:hidden text-white" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
      </div>

      {/* Fullscreen Overlay for Mobile Menu */}
      <AnimatePresence>
  {isOpen && (
    <>
      {/* Backdrop: Fullscreen Black with Blur */}
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-lg z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeMenu}
      />

      {/* Menu Dropdown with Red Background */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="fixed top-0 right-0 w-1/2 h-full bg-gray-900 text-white z-50 shadow-xl flex flex-col"
      >
{/* Close Button at the Bottom */}
       <button className="self-end text-end text-gray-400 hover:text-white p-6 bg-black/90  w-full" onClick={closeMenu}>
          ✕
        </button>

  <nav className="flex flex-col space-y-4 bg-black/90 p-6">
    {menuItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className="text-lg text-gray-200 transition-colors hover:text-white"
        onClick={(e) => handleClick(e, item.href)}
      >
        {item.label}
      </Link>
    ))}
  </nav>
  <Button className="pt-6 w-full bg-white text-red-600 hover:bg-gray-200" asChild>
    <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
      Hire Me
    </a>
  </Button>
</motion.div>

    </>
  )}
</AnimatePresence>


    </header>
  );
}
