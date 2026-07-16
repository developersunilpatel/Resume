"use client";

import React, { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const navContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navItem = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const mobileMenuContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const mobileMenuItem = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const menuItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = menuItems.map((item) => document.querySelector(item.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gray-900/95 backdrop-blur-md border-b border-white/10">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        aria-label="Global"
        className="container mx-auto flex items-center justify-between px-6 py-5"
      >
        {/* Logo */}
        <div className="flex lg:flex-1 mt-2">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white"
          >
            <strong className="text-[54px] tracking-wide uppercase text-heading-2 font-medium leading-[0.7]">
              Sunil Patel
            </strong>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-md p-2 text-gray-300"
          >
            <Bars3Icon className="h-6 w-6" />
          </motion.button>
        </div>

        {/* Desktop Menu */}
        <motion.div
          variants={navContainer}
          initial="hidden"
          animate="show"
          className="hidden lg:flex lg:gap-x-10 ml-auto"
        >
          {menuItems.map((item) => (
            <motion.a
              key={item.label}
              variants={navItem}
              href={item.href}
              whileHover={{
                y: -2,
                scale: 1.05,
              }}
              className={`text-[20px] font-semibold transition-colors ${activeSection === item.href.replace("#", "") ? "text-[#ff7a2f]" : "text-white hover:text-[#ff7a2f]"}`}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Resume Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              x: 4,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="text-[20px] font-semibold text-white hover:text-[#ff7a2f]"
          >
            Resume →
          </motion.a>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm"
            >
              <DialogPanel>
                {/* Header */}
                <div className="flex items-center justify-between">
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[24px] font-bold text-white uppercase"
                  >
                    &lt;Sunil Patel /&gt;
                  </motion.h2>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-md p-2 text-gray-300"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <motion.div
                  variants={mobileMenuContainer}
                  initial="hidden"
                  animate="show"
                  className="mt-10 space-y-2"
                >
                  {menuItems.map((item) => (
                    <motion.a
                      key={item.label}
                      variants={mobileMenuItem}
                      href={item.href}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-[20px] font-semibold hover:bg-white/10 ${
                        activeSection === item.href.replace("#", "")
                          ? "text-[#ff7a2f]"
                          : "text-white"
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </motion.div>

                {/* Resume */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 border-t border-white/10 pt-6"
                >
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                    className="block rounded-lg px-4 py-3 text-[20px] font-semibold text-white hover:bg-white/10"
                  >
                    Resume →
                  </motion.a>
                </motion.div>
              </DialogPanel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
