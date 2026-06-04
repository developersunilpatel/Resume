import React from "react";
// import Image from "next/image";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineAcademicCap, } from "react-icons/hi";
import { FiCode, FiTarget, FiUsers, FiTrendingUp, } from "react-icons/fi";

// const tools = [
//   "ReactJs",
//   "NextJs",
//   "Typescript",
//   "Javascript",
//   "HTML5",
//   "CSS3",
//   "Tailwind CSS",
//   "BootStrap",
//   "Animation",
//   "Framer",
// ];

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

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="relative min-h-[60vh] z-10 mx-auto flex container items-center justify-between gap-16 px-6 py-10 md:px-14 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div className="xl:p-16 lg:p-10 p-0 lg:mb-0 mb-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

                    <h3 className="text-[24px] font-semibold text-white transition-colors duration-300 group-hover:text-[#ff7a2f]" >
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <p className="m-0 text-[18px] font-medium uppercase tracking-[5px] text-[#ff7a2f] mb-6">
              About me
            </p>
            <div className="text-[54px] font-bold text-white xl:mb-10 md:mb-7 mb-4 capitalize leading-[64px]">
              A bit About Me
            </div>
            <p className="mb-8 text-[20px] leading-[40px]">
              Passionate Frontend Developer with 4+ years of experience building scalable web applications. Currently working at Simple Energy, where I have contributed to significant revenue growth through innovative frontend solutions and performance optimizations.
            </p>

            <ul className="text-[18px] flex flex-col gap-3 mt-12">
              <li className="flex gap-4">
                <HiOutlineLocationMarker className="text-[#ff7a2f]" size={22} /> Ahmedabad, Gujarat, India
              </li>
              <li className="flex gap-4">
                <HiOutlinePhone className="text-[#ff7a2f]" size={22} /> +91-9909301307
              </li>
              <li className="flex gap-4">
                <HiOutlineMail className="text-[#ff7a2f]" size={22} /> developersunilpatel@gmail.com
              </li>
              <li className="flex gap-4">
                <HiOutlineAcademicCap className="text-[#ff7a2f]" size={22} /> BCA - Gujarat University
              </li>
            </ul>

            {/* <p className="mb-2 uppercase">Stack & tools</p>
            <div className="min-h-[50px] flex gap-3 flex-wrap">
              {tools?.map((s: string, index: number) => {
                return (
                  <div
                    key={index}
                    className={`flex items-center justify-center border-1 rounded-4xl px-3 py-0 h-[30px] text-[14px] border-gray-500`}
                  >
                    {s}
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
