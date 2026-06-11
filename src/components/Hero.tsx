"use client";

import MouseGlow from "@/components/MouseGlow";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative md:min-h-screen min-h-[90vh] overflow-hidden text-white py-0 bg-gray-900 selection:bg-emerald-400/30"
    >
      <MouseGlow />

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[700px] w-[700px] rounded-full bg-gray-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-gray-500/10 blur-3xl" />

        {/* Noise / texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, white 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />
      </div>

      <div className="relative min-h-[90vh] z-10 mx-auto flex flex-col container items-center justify-center gap-6 px-6 py-10 md:px-14 xl:px-20">
        {/* Heading */}
        <div
          className="relative leading-[0.95] tracking-[-4px] transition-transform duration-200"
          onMouseMove={(e) => {
            const target = e.currentTarget;

            const x = (window.innerWidth / 2 - e.clientX) * 0.01;
            const y = (window.innerHeight / 2 - e.clientY) * 0.01;

            target.style.transform = `translate(${x}px, ${y}px)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = `translate(0px,0px)`;
          }}
        >
          <div className="absolute inset-0 bg-emerald-500/20 blur-3xl opacity-20" />
          <div className="text-[42px] text-center font-bold md:text-[72px] text-[#ff7a2f] capitalize md:tracking-[4px] tracking-[1px]">
            &lt;frontend developer /&gt;
          </div>
        </div>

        <p className="mt-10 max-w-[640px] text-[24px] leading-[1.8] text-[#ccc] md:text-[24px] md:tracking-[2px] tracking-[1px] text-center mb-4">
          Crafting exceptional user experiences with React, Next.js, and modern
          web technologies. Specialized in performance optimization and scalable
          frontend architectures.
        </p>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap items-center gap-6">
          <a
            href="https://www.linkedin.com/in/developersunilpatel"
            target="_blank"
            className="cursor-pointer group flex lg:h-[48px] h-[50px] items-center gap-3 rounded-full bg-white lg:px-10 px-4 text-[16px] font-medium text-black transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02]"
          >
            <FaLinkedinIn size={20} />
          </a>

          <a
            href="https://github.com/jskpatel"
            target="_blank"
            className="cursor-pointer group flex lg:h-[48px] h-[50px] items-center gap-3 rounded-full bg-white lg:px-10 px-4 text-[16px] font-medium text-black transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02]"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://leetcode.com/u/developersunilpatel/"
            target="_blank"
            className="cursor-pointer group flex lg:h-[48px] h-[50px] items-center gap-3 rounded-full bg-white lg:px-10 px-4 text-[16px] font-medium text-black transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02]"
          >
            <SiLeetcode size={20} />
          </a>

          <a
            href="mailto:developersunilpatel@gmail.com"
            className="cursor-pointer flex lg:h-[48px] h-[50px] items-center gap-3 rounded-full border border-white/15 bg-white/5 lg:px-10 px-4 text-[16px] font-medium text-white backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
          >
            <HiOutlineMail size={20} />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hover:scale-[1.02] transition-all duration-300">
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
              className="lucide lucide-chevron-down w-8 h-8 mx-auto text-emerald-400 animate-pulse"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
