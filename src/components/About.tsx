import React from "react";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineAcademicCap, } from "react-icons/hi";
import { FiCode, FiTarget, FiUsers, FiTrendingUp, } from "react-icons/fi";
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
  icon: React.ReactElement
}

const bullets: Bullet[] = [
  {
    text: "Ahmedabad, Gujarat, India",
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
    <section id="about" className="py-16 bg-gray-900">
      <div className="relative min-h-[80vh] z-10 mx-auto flex container items-center justify-between gap-16 py-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-30 gap-14 lg:items-center ">
          <div className="xl:py-16 lg:py-10 p-0 lg:mb-0 mb-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {qualities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group scale-[0.95] rounded-xl bg-gray-800 p-7 transition-all duration-300 hover:scale-[1] hover:bg-gray-700/80 hover:shadow-[0_0_30px_rgba(255,122,47,0.08)]"
                  >
                    <div className="mb-14">
                      <Icon
                        size={34}
                        className="text-[#ff7a2f] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110"
                      />
                    </div>

                    <h3 className="text-[26px] font-semibold text-white transition-colors duration-300 group-hover:text-[#ff7a2f]" >
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            
            <SectionTitle title="A bit About Me" subTitle="About me" />

            <p className="mb-8 text-[22px] text-[#ccc] leading-[40px]">
              Passionate Frontend Developer with 4+ years of experience building scalable web applications. Currently working at Simple Energy, where I have contributed to significant revenue growth through innovative frontend solutions and performance optimizations.
            </p>

            <ul className="text-[22px] flex flex-col gap-3 mt-12 text-[#ccc]">
              {
                bullets.map((bullet: Bullet, index: number) => {
                  return <li key={index} className="flex gap-4">
                    <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                      {bullet.icon}
                    </span>
                    {bullet.text}
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
