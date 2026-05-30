import Image from "next/image";
import React from "react";

interface Data {
  title: string;
  skills: string;
  date: string;
  description: string;
}

const blog: Data[] = [
  {
    title: "Why I ditched heavy CSS frameworks for Tailwind",
    skills: "Developer",
    date: "Aug 25, 2026",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur neque ipsum eveniet eligendi dolores, and put usability first.`,
  },
  {
    title: "Building a design system from scratch in a weekend",
    skills: "Designer",
    date: "Jan 25, 2026",
    description:
      "From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first.",
  },
  {
    title: "5 lessons from my first year of full-time freelancing",
    skills: "Freelance",
    date: "Nov 29, 2025",
    description: `From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first.`,
  },
];

const Blog = () => {
  return (
    <section id="blog" className="relative text-white py-6 bg-gray-900">
      <div className="relative min-h-[90vh] z-10 mx-auto flex container items-center justify-between gap-16 px-6 py-24 md:px-14 xl:px-20">
        <div className="flex flex-col">
          <p className="m-0 text-[18px] font-medium uppercase tracking-[5px] text-[#ff7a2f]">
            Thoughts
          </p>
          <div className="text-[54px] font-bold text-white xl:mb-15 md:mb-10 mb-5 flex justify-between items-center gap-4">
            From the blog
            <span className="relative text-[17px] text-[#ccc] font-normal flex gap-3 items-center cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#ccc] after:transition-all after:duration-300 hover:after:w-full">
              All articles{" "}
              <svg
                className="w-3.5 h-3.5"
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
                ></path>
              </svg>
            </span>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {blog.map((item: Data, index: number) => {
              return (
                <div
                  key={index}
                  className="bg-gray-800 p-0 rounded-xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                >
                  <span className="block">
                    <Image
                      src="/dummi-1.png"
                      alt="Icon"
                      height={100}
                      width={100}
                      className="xl-h-[260px] h-[200px] w-full object-cover"
                    />
                  </span>
                  <div className="px-6 py-2">
                    <div className="min-h-[50px] flex items-center gap-3">
                      <div className="flex items-center justify-center border-1 bg-gray-900 rounded-4xl px-2 h-[24px] text-[12px] text-[#ff7a2f] border-[#ff7a2f]">
                        {item?.skills}
                      </div>
                      <div className="text-[#ccc]">{item.date}</div>
                    </div>
                    <div className="text-[20px] leading-[24px] font-medium font-semibold text-white mt-1 block group-hover:text-[#ff7a2f] transition-colors duration-300">
                      {item?.title}
                    </div>
                    <div className="text-[14px] text-[#ccc] my-4 block">
                      {item?.description}
                    </div>
                    <div className="relative w-fit flex gap-2 items-center mb-3 font-bold mt-4 cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#ccc] after:transition-all after:duration-300 group-hover:after:w-full">
                      Read more{" "}
                      <svg
                        className="w-3.5 h-3.5"
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
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
