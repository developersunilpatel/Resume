"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineAcademicCap,
} from "react-icons/hi";
import {
  FiCode,
  FiTarget,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";
import SectionTitle from "./SectionTitle";

const qualities = [
  {
    title: "Problem Solver",
    icon: FiCode,
  },
  {
    title: "Goal Oriented",
    icon: FiTarget,
  },
  {
    title: "Team Player",
    icon: FiUsers,
  },
  {
    title: "Growth Mindset",
    icon: FiTrendingUp,
  },
];

interface Bullet {
  text: string;
  icon: React.ReactElement;
}

const bullets: Bullet[] = [
  {
    text: "Mumbai, Maharashtra, India",
    icon: <HiOutlineLocationMarker className="text-[#ff7a2f]" size={22} />,
  },
  {
    text: "+91-9909301307",
    icon: <HiOutlinePhone className="text-[#ff7a2f]" size={22} />,
  },
  {
    text: "developersunilpatel@gmail.com",
    icon: <HiOutlineMail className="text-[#ff7a2f]" size={22} />,
  },
  {
    text: "BCA - Gujarat University",
    icon: <HiOutlineAcademicCap className="text-[#ff7a2f]" size={22} />,
  },
];

const About = () => {
  return (
    <section id="about" className="bg-gray-900 py-16 overflow-hidden">
      <div className="container relative z-10 mx-auto min-h-[80vh] py-10">
        <div className="flex flex-col-reverse gap-14 lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
          
          {/* Left Side - Quality Cards */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="xl:py-16 lg:py-10"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {qualities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.03,
                      y: -6,
                    }}
                    className="group rounded-xl bg-gray-800 p-7 transition-all duration-300 hover:bg-gray-700/80 hover:shadow-[0_0_30px_rgba(255,122,47,0.08)]"
                  >
                    <div className="mb-14">
                      <Icon
                        size={34}
                        className="text-[#ff7a2f] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110"
                      />
                    </div>

                    <h3 className="text-[26px] font-semibold text-white transition-colors duration-300 group-hover:text-[#ff7a2f]">
                      {item.title}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <SectionTitle
                title="A bit About Me"
                subTitle="About me"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="mb-8 text-[22px] leading-[40px] text-[#ccc]"
            >
              Passionate Frontend Developer with 4+ years of experience
              building scalable web applications. Currently working at
              Simple Energy, where I have contributed to significant
              revenue growth through innovative frontend solutions and
              performance optimizations.
            </motion.p>

            <ul className="mt-12 flex flex-col gap-4 text-[22px] text-[#ccc]">
              {bullets.map((bullet, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-800 transition-colors">
                    {bullet.icon}
                  </span>

                  <span>{bullet.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;