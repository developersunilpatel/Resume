"use client";

import MouseGlow from "@/components/MouseGlow";
import { motion, useAnimation, Variants } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { useEffect } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const socialVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const skills = 'REACT.JS | NEXT.JS | TYPESCRIPT | JAVASCRIPT | FRONTEND ARCHITECTURE | UI ENGINEERING | RESPONSIVE WEB DEVELOPMENT | CHROME EXTENSION | PERFORMANCE OPTIMIZATION | COMPONENT REUSABILITY | TEAM LEADERSHIP | API INTEGRATION | AGILE DEVELOPMENT | CROSS-BROWSER COMPATIBILITY | CODE REVIEW & MENTORSHIP | CUSTOM HOOKS | CODE SPLITTING | LAZY LOADING | REACT ROUTER | SSG/SSR | GITHUB COPILOT | BITBUCKET PIPELINE | CURSOR AI | CI/CD WORKFLOWS | JENKINS';
const colors = [
  "text-red-400",
  "text-blue-400",
  "text-green-400",
  "text-yellow-400",
  "text-purple-400",
  "text-pink-400",
  "text-cyan-400",
  "text-orange-400",
];

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gray-900 pt-16 text-white selection:bg-emerald-400/30"
    >
      <MouseGlow />

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[700px] w-[700px] rounded-full bg-gray-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-gray-500/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, white 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex min-h-[90vh] flex-col items-center justify-center gap-6 container px-6 py-10 md:px-14 xl:px-20"
      >
        {/* Heading */}
        <motion.div
          variants={itemVariants}
          className="relative leading-[0.95] tracking-[-4px] transition-transform duration-200"
          onMouseMove={(e) => {
            const target = e.currentTarget;

            const x = (window.innerWidth / 2 - e.clientX) * 0.01;
            const y = (window.innerHeight / 2 - e.clientY) * 0.01;

            target.style.transform = `translate(${x}px, ${y}px)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translate(0px,0px)";
          }}
        >
          <div className="absolute inset-0 bg-emerald-500/20 opacity-20 blur-3xl" />

          <h1 className="text-center text-[42px] font-bold capitalize tracking-[1px] text-[#ff7a2f] md:text-[72px] md:tracking-[4px]">
            &lt;frontend developer /&gt;
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={itemVariants}
          className="mb-4 mt-10 max-w-[1080px] text-center text-[24px] leading-[1.8] tracking-[1px] text-[#ccc] md:text-[24px] md:tracking-[2px]"
        >
          Frontend Developer with <strong>11+ years of experience</strong>,<div className="md:block inline ml-2" />including <strong>6+ years in Web Design</strong> and <strong>4+ years in
            Frontend Development</strong>. Proficient in <strong>React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3 and responsive
              Web design</strong>. Experienced in developing scalable web applications, optimizing performance, integrating
          APIs, building reusable components and delivering high-quality solutions in agile environments.
        </motion.div>
        <div className="relative w-full overflow-hidden border-y border-gray-300 py-5">

          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-gray-900 to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-gray-900 to-transparent" />

          <motion.div
            className="flex whitespace-nowrap w-max"
            animate={{
              x: [0, -6610],
            }}
            transition={{
              duration: 80,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="pr-20 text-[24px] uppercase tracking-[3px]">
              {skills.split("|").map((s, index) => (
                <span key={index} className={colors[index % colors.length]}>
                  {s.trim()}
                  <span className="px-5 text-zinc-600">|</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          variants={socialVariants}
          className="mt-4 flex flex-wrap items-center gap-6"
        >
          <motion.a
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              y: -4,
            }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/developersunilpatel"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[50px] cursor-pointer items-center gap-3 rounded-full bg-white px-4 text-[16px] font-medium text-black transition-all duration-500 ease-out lg:h-[48px] lg:px-10"
          >
            <FaLinkedinIn size={20} />
          </motion.a>

          <motion.a
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              y: -4,
            }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/developersunilpatel"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[50px] cursor-pointer items-center gap-3 rounded-full bg-white px-4 text-[16px] font-medium text-black transition-all duration-500 ease-out lg:h-[48px] lg:px-10"
          >
            <FaGithub size={20} />
          </motion.a>

          <motion.a
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              y: -4,
            }}
            whileTap={{ scale: 0.95 }}
            href="https://leetcode.com/u/developersunilpatel/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[50px] cursor-pointer items-center gap-3 rounded-full bg-white px-4 text-[16px] font-medium text-black transition-all duration-500 ease-out lg:h-[48px] lg:px-10"
          >
            <SiLeetcode size={20} />
          </motion.a>

          <motion.a
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              y: -4,
            }}
            whileTap={{ scale: 0.95 }}
            href="mailto:developersunilpatel@gmail.com"
            className="flex h-[50px] cursor-pointer items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 text-[16px] font-medium text-white backdrop-blur-sm transition-all duration-500 ease-out hover:border-white/30 hover:bg-white/10 lg:h-[48px] lg:px-10"
          >
            <HiOutlineMail size={20} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <a href="#about">
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
              className="h-8 w-8 animate-pulse text-emerald-400"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;