"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

interface Data {
  title: string;
  skills: string[];
  description: string[];
  url: string;
  thumb: string;
}

const data: Data[] = [
  {
    title: "HodlPerks",
    skills: ["ReactJs", "Typescript", "Web3", "CSS3"],
    description: [
      "Built responsive React.js UI components for holder, creator, and admin dashboards.",
      "Integrated REST APIs and Web3 APIs for NFT metadata, wallet connection, and user flows.",
      "Implemented reusable components and business logic to manage NFT perks, rewards, and listings.",
      "Improved UI performance and ensured smooth user experience across all sections.",
    ],
    url: "https://perkulator.app/",
    thumb: "/portfolio/hodlperks.png",
  },
  {
    title: "The Doge Pound",
    skills: ["ReactJs", "Typescript", "Web3", "CSS3"],
    description: [
      "Built responsive React.js UI components for holder, creator, and admin dashboards.",
      "Integrated REST APIs / Web3 APIs for NFT metadata, wallet connection, and user flows.",
      "Implemented reusable components and business logic to manage NFT perks, rewards, and listings.",
      "Improved UI performance and ensured smooth user experience across all sections.",
    ],
    url: "https://thedogepoundnft.com/",
    thumb: "/portfolio/thedogepound.png",
  },
  {
    title: "Anshar Labs",
    skills: ["ReactJs", "Typescript", "Node.js", "MongoDB"],
    description: [
      "Developed scalable backend services and RESTful APIs for data management and integration.",
      "Designed and implemented responsive frontend interfaces using React.js and modern JavaScript.",
      "Collaborated with cross-functional teams to define requirements and deliver high-quality software solutions.",
      "Optimized application performance and ensured code maintainability through best practices.",
    ],
    url: "https://www.ansharlabs.com/",
    thumb: "/portfolio/ansharlabs.png",
  },
  {
    title: "Skill Up with USC Online",
    skills: ["ReactJs", "Typescript", "REST APIs", "CSS3"],
    description: [
      "Developed responsive educational platform interfaces for online learning and course management.",
      "Implemented reusable UI components for course listings, enrollment flows, and student dashboards.",
      "Integrated APIs for authentication, course content management, and personalized learning experiences.",
      "Optimized frontend performance and accessibility to ensure smooth user interaction across devices.",
    ],
    url: "https://skillup.online.usc.edu/",
    thumb: "/portfolio/skillup.png",
  },
  {
    title: "Amplitech",
    skills: ["ReactJs", "Javascript", "HTML5", "CSS3"],
    description: [
      "Built modern and responsive frontend interfaces for communication and RF technology solutions.",
      "Developed reusable React.js components and optimized application workflows for better maintainability.",
      "Integrated APIs and dynamic content modules to improve user engagement and information accessibility.",
      "Enhanced website performance, responsiveness, and cross-browser compatibility for seamless experience.",
    ],
    url: "https://about.ampliteach.com/",
    thumb: "/portfolio/ampliteach.png",
  },
  {
    title: "Celcius Logistics Solutions",
    skills: ["ReactJs", "Typescript", "Bootstrap", "REST APIs"],
    description: [
      "Developed responsive logistics management dashboards for transporters, enterprises, and operations teams.",
      "Integrated REST APIs to manage cold-chain bookings, shipment tracking, and transportation workflows.",
      "Built reusable UI components for load management, booking flows, and real-time logistics operations.",
      "Improved platform performance and optimized user experience across desktop and mobile devices.",
    ],
    url: "https://www.celcius.in/",
    thumb: "/portfolio/celcius.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative text-white py-6 bg-gray-900">
      <div className="relative min-h-[90vh] z-10 mx-auto flex container items-center justify-between gap-16 py-24">
        <div className="flex flex-col">

          <SectionTitle title="Worked on" subTitle="Projects" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6"
          >
            {data.map((item: Data, index: number) => {
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
                    scale: 1.02,
                    y: -6,
                  }}
                  className="group overflow-hidden rounded-xl bg-gray-700 transition-all duration-300"
                >
                  <span className="block overflow-hidden">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                    >
                      <Image
                        src={item.thumb}
                        alt={item.title}
                        height={200}
                        width={400}
                        className="h-[200px] w-full object-cover object-top"
                      />
                    </motion.div>
                  </span>

                  <div className="px-6 py-6">
                    <div className="min-h-[50px] flex flex-wrap gap-1">
                      {item?.skills?.map((s: string, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.05,
                          }}
                          viewport={{ once: true }}
                          className="flex h-[24px] items-center justify-center rounded-4xl border border-gray-500 bg-gray-800 px-2 py-0 text-[12px]"
                        >
                          {s}
                        </motion.div>
                      ))}
                    </div>

                    <h3 className="mb-4 block text-[24px] font-semibold text-white transition-colors duration-300 group-hover:text-[#ff7a2f]">
                      {item?.title}
                    </h3>

                    <ul className="mt-2 space-y-3">
                      {item?.description?.map(
                        (para: string, descriptionIndex: number) => (
                          <motion.li
                            key={descriptionIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: descriptionIndex * 0.08,
                            }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-[18px] text-[#ccc] transition-colors duration-300 hover:text-white"
                          >
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff7a2f]" />
                            <span>{para.trim()}</span>
                          </motion.li>
                        )
                      )}
                    </ul>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative mt-4 mb-3 flex w-fit cursor-pointer items-center gap-2 text-[16px] text-[#ccc] transition-all duration-300 group-hover:gap-4 group-hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#ccc] after:transition-all after:duration-300 group-hover:after:w-full"
                    >
                      View case study

                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>



        </div>
      </div>
    </section>
  );
};

export default Projects;
