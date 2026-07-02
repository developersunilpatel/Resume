'use client';

import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiMail, } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import SectionTitle from "./SectionTitle";

interface ContactDetails {
  icon: React.ReactElement,
  text: string,
  link: string
}

const contactDetails: ContactDetails[] = [
  {
    icon: <FiPhone size={14} />,
    text: "+91-990 930 1307",
    link: "callto:9909301307"
  },
  {
    icon: <FiMapPin size={14} />,
    text: "Mumbai, Maharashtra, India",
    link: "#"
  },
  {
    icon: <FiMail size={14} />,
    text: "developersunilpatel@gmail.com",
    link: "mailto:developersunilpatel@gmail.com"
  },
  {
    icon: <FaLinkedin size={14} />,
    text: "linkedin.com/in/developersunilpatel",
    link: "https://linkedin.com/in/developersunilpatel"
  },
  {
    icon: <FaGithub size={14} />,
    text: "github.com/developersunilpatel",
    link: "https://github.com/developersunilpatel/"
  },
  {
    icon: <SiLeetcode size={14} />,
    text: "leetcode.com/developersunilpatel",
    link: "https://leetcode.com/u/developersunilpatel/"
  },
]

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative md:min-h-[70vh] overflow-hidden bg-gray-900 text-white md:py-26 py-6"
    >
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

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="group container scale-[0.95] rounded-xl bg-gray-800 md:p-7 py-7 transition-all duration-300 hover:scale-[1] hover:bg-gray-700/80 hover:shadow-[0_0_30px_rgba(255,122,47,0.08)]"
      >
        <div className="relative z-10 mx-auto flex items-center justify-between gap-16 md:py-14 py-5 md:px-14 xl:px-20">
          <div className="grid grid-cols-1">
            <div className="flex flex-col">

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <SectionTitle
                  title="Let&rsquo;s work together"
                  subTitle="Get in touch"
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
                className="max-w-[640px] md:text-[22px] text-[20px] leading-[1.7] text-[#ccc] group-hover:text-white"
              >
                I&rsquo;m open to UI/UX and frontend missions, short or long-term.
                Landing page, full product redesign, or just a second pair of eyes
                — let&rsquo;s talk.
              </motion.p>

              <div className="mt-10 flex flex-col gap-4">
                {contactDetails.map(
                  (data: ContactDetails, index: number) => (
                    <motion.a
                      key={index}
                      href={data.link}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: index * 0.02,
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        x: 8,
                      }}
                      className="flex items-center gap-3 text-[#ccc] transition-colors md:text-[22px] text-[20px] hover:text-white"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-800 transition-all duration-300 group-hover:bg-zinc-700">
                        {data.icon}
                      </span>

                      <span>{data.text}</span>
                    </motion.a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>


    </motion.section>
  );
};

export default Contact;
