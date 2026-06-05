"use client";

import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";
import { LuGauge, LuPanelsTopLeft, } from "react-icons/lu";
import SectionTitle from "./SectionTitle";

type Skill = {
  name: string;
  percentage: number;
  color: string;
};

const skills: Skill[] = [
  {
    name: "React JS",
    percentage: 95,
    color: "from-blue-400 to-cyan-400",
  },
  {
    name: "Next JS",
    percentage: 90,
    color: "from-gray-300 to-black",
  },
  {
    name: "TypeScript",
    percentage: 88,
    color: "from-blue-600 to-indigo-600",
  },
  {
    name: "JavaScript",
    percentage: 92,
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Redux/RTK",
    percentage: 85,
    color: "from-purple-400 to-fuchsia-600",
  },
  {
    name: "Express js",
    percentage: 90,
    color: "from-cyan-400 to-teal-500",
  },
  {
    name: "Node js",
    percentage: 80,
    color: "from-orange-400 to-red-600",
  },
  {
    name: "Performance Optimization",
    percentage: 92,
    color: "from-green-400 to-green-600",
  },
];

const expertise = [
  {
    icon: FiCode,
    title: "Frontend Technologies",
    skills: "React 18+, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS"
  },
  {
    icon: LuGauge,
    title: "Performance Optimization",
    skills: "Web Vitals, Bundle Optimization, SEO"
  },
  {
    icon: LuPanelsTopLeft,
    title: "UI/UX Implementation",
    skills: "Responsive Design, Figma, Adobe XD, Photoshop"
  },
];

export default function Skills() {
  return (

    <section id="skills" className="py-16 bg-gray-800">
      <div className="relative min-h-[70vh] z-10 mx-auto flex flex-col container justify-between py-10">


        {/* Background Glow */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-500 blur-[140px]" />
          <div className="absolute right-1/4 bottom-20 h-72 w-72 rounded-full bg-green-500 blur-[140px]" />
        </div>

        <SectionTitle title="Skills & Expertise" subTitle="About my skills" />

        <div className="relative z-10 w-full">
          <div className="grid gap-8 lg:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                {/* Card Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-green-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative mb-5 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    {skill.name}
                  </h3>

                  <span className="text-2xl font-bold text-emerald-400">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="relative h-[14px] overflow-hidden rounded-full bg-white/10">
                  {/* Dark Track */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10" />

                  {/* Animated Fill */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{
                      duration: 1.4,
                      ease: "easeOut",
                      delay: 0.2,
                    }}
                    viewport={{ once: true }}
                    className={`relative h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  >
                    {/* Shine Effect */}
                    <div className="absolute inset-0 animate-pulse bg-white/20" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="xl:py-16 lg:py-10 p-0 lg:mt-0 mt-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group lg:scale-[0.95] lg:hover:scale-[1] scale-[1] hover:scale-[0.95] rounded-xl bg-gray-700 p-7 transition-all duration-300 hover:bg-gray-700/80 hover:shadow-[0_0_30px_rgba(255,122,47,0.08)]"
                >
                  <div className="mb-14">
                    <Icon
                      size={34}
                      className="text-[#ff7a2f] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-[26px] font-semibold text-white transition-colors duration-300" >
                    {item.title}
                  </h3>

                  <p className="text-[22px] text-[#ccc] transition-colors duration-300 group-hover:text-white" >
                    {item.skills}
                  </p>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
}