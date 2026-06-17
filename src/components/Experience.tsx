"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import SectionTitle from "./SectionTitle";

const experiences = [
  {
    company: "Celcius Logistics Solutions Private Limited",
    role: "Senior Front-End Developer",
    duration: "April 2024 - Present",
    location: "Ahmedabad",
    logo: "/experience/celciusLogisticsSolution.png",
    points: [
      "Lead frontend development for logistics management applications using React.js and TypeScript.",
      "Architect and develop scalable, reusable, and maintainable UI components.",
      "Collaborate with backend teams to integrate REST APIs and optimize application workflows.",
      "Optimized frontend rendering performance using lazy loading, memoization, and reusable component strategies.",
      "Conduct code reviews and mentor junior developers to maintain coding standards and best practices.",
      "Work closely with product managers and UI/UX designers to deliver user-centric solutions.",
      "Contributed to frontend architecture decisions and application scalability improvements."
    ],
  },
  {
    company: "HK Infosoft",
    role: "Front-End Developer & UI Team Lead",
    duration: "January 2022 - March 2024",
    location: "Delhi",
    logo: "/experience/hkInfosoft.jpeg",
    points: [
      "Developed NFT reward platform frontend using ReactJS.",
      "Integrated REST APIs and implemented business logic.",
      "Built responsive UI screens and dashboards.",
      "Improved reliability through testing and debugging.",
    ],
  },
  {
    company: "Artoon Solution Private Limited",
    role: "Design Team Lead",
    duration: "December 2020 - January 2022",
    location: "Noida",
    logo: "/experience/artoonsolutions.jpeg",
    points: [
      "Led UI design initiatives and contributed to frontend implementation using React.js",
      "Collaborated with clients and stakeholders to gather requirements and deliver tailored solutions.",
      "Managed project timelines and ensured high-quality deliverables within deadlines. ",
      "Assisted in transitioning traditional UI workflows into modern frontend development practices.",
    ],
  },
  {
    company: "Echo Innovate IT Solutions Private Limited",
    role: "Junior Web Designer → Design Team Lead",
    duration: "Aug 2015 - Nov 2020",
    location: "Ahmedabad",
    logo: "/experience/echoInnovateIT.jpeg",
    points: [
      "Designed responsive websites and admin panels for multiple client projects. ",
      "Worked extensively with HTML5, CSS3, SCSS, Bootstrap, and JavaScript. ",
      "Converted PSD/Figma/XD designs into responsive web layouts. ",
      "Collaborated with development teams to improve usability and frontend consistency.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0f172a] py-24 transition-all duration-500 ease-out"
    >
      {/* orange glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,47,0.12),transparent_35%)]" />

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10 mx-auto">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionTitle title="The Story So Far" subTitle="Experience" />
        </motion.div>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-[28px] top-0 hidden h-full w-[2px] bg-gradient-to-b from-[#ff7a2f] to-transparent md:block" />

          <div className="flex flex-col gap-14">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="group relative flex flex-col gap-6 md:flex-row"
              >
                {/* timeline icon */}
                <div className="relative z-10 hidden md:flex">
                  <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#ff7a2f] shadow-[0_0_30px_rgba(255,122,47,0.35)]">
                    <HiOutlineBriefcase
                      size={28}
                      className="text-white"
                    />
                  </div>
                </div>

                {/* card */}
                <motion.div
                  whileHover={{
                    scale: 1.01,
                    y: -4,
                    borderColor: "rgba(53,224,161,0.35)",
                  }}
                  className="w-full rounded-2xl border border-white/10 bg-gray-800/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#ff7a2f]/30 hover:bg-gray-800 md:p-8"
                >
                  {/* top */}
                  <div className="mb-7 flex flex-col justify-between gap-6 lg:flex-row">
                    {/* left */}
                    <div className="flex gap-5">
                      <div className="relative h-[56px] w-[56px] overflow-hidden rounded-xl bg-white">
                        <Image
                          src={item.logo}
                          alt={item.company}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold leading-snug text-white">
                          {item.role}
                        </h3>

                        <p className="mt-1 text-lg font-semibold text-[#ff7a2f]">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    {/* right */}
                    <div className="flex flex-col text-[20px] items-start gap-2 text-left lg:items-end lg:text-right group-hover:text-white">
                      <div className="flex items-center gap-2 text-gray-300 group-hover:text-white">
                        <HiOutlineCalendar
                          size={18}
                          className="text-gray-400 group-hover:text-white"
                        />

                        <span>{item.duration}</span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-400 group-hover:text-white">
                        <HiOutlineLocationMarker
                          size={18}
                          className="text-gray-400 group-hover:text-white"
                        />

                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* points */}
                  <ul className="space-y-4">
                    {item.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: i * 0.08,
                        }}
                        viewport={{ once: true }}
                        className="flex gap-4 text-[20px] leading-[30px] text-gray-300 group-hover:text-white"
                      >
                        <span className="mt-[10px] h-[8px] min-w-[8px] rounded-full bg-gray-500" />

                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}