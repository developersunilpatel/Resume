import Image from "next/image";

interface Data {
  title: string;
  skills: string[];
  description: string;
}

const data: Data[] = [
  {
    title: "Project 01",
    skills: ["ReactJs", "NextJs", "Typescript", "Javascript"],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur neque ipsum eveniet eligendi dolores, dicta beatae? Velit iusto nemo praesentium architecto, ipsa excepturi facere quisquam, reprehenderit a cumque sapiente?
    Laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur neque ipsum eveniet eligendi dolores, dicta beatae? Velit iusto nemo praesentium architecto, ipsa excepturi facere quisquam, reprehenderit a cumque sapiente? Laudantium!
    From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first. From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first.
    From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first.`,
  },
  {
    title: "Project 02",
    skills: ["ReactJs", "Typescript", "Photoshop"],
    description:
      "From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first.",
  },
  {
    title: "Project 03",
    skills: ["ReactJs", "NextJs", "HTML5", "CSS3"],
    description: `From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first.`,
  },
];

const Portfolio = () => {
  return (
    <section className="relative text-white">
      <div className="relative min-h-[90vh] z-10 mx-auto flex container items-center justify-between gap-16 px-6 py-24 md:px-14 xl:px-20">
        <div className="flex flex-col">
          <p className="m-0 text-[18px] font-medium uppercase tracking-[5px] text-[#ff7a2f]">
            Portfolio
          </p>
          <span className="text-[54px] font-bold text-white xl:mb-15 md:mb-10 mb-5">
            Selected work
          </span>

          <div className="grid lg:grid-cols-2 gap-6">
            {data.map((item: Data, index: number) => {
              return (
                <div
                  key={index}
                  className={`group scale-[0.98] hover:scale-[1] transition-all duration-300 bg-gray-800 p-0 rounded-xl overflow-hidden ${index === 0 ? "md:row-span-2" : ""}`}
                >
                  <span className="block">
                    <Image
                      src="/sunil.png"
                      alt="Icon"
                      height={100}
                      width={100}
                      className="h-[260px] w-full object-cover object-top"
                    />
                  </span>
                  <div className="px-6 py-6">
                    <div className="min-h-[50px] flex gap-3">
                      {item?.skills?.map((s: string, index: number) => {
                        return (
                          <div
                            key={index}
                            className={`flex items-center justify-center border-1 bg-gray-900 rounded-4xl px-3 py-0 h-[24px] text-[12px] ${index === 0 ? "text-[#ff7a2f] border-[#ff7a2f]" : "border-gray-500"}`}
                          >
                            {s}
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-[24px] font-medium font-semibold text-white mb-4 block">
                      {item?.title}
                    </div>
                    {item?.description
                      .split("\n")
                      .map((para: string, index: number) => (
                        <p key={index} className="py-2">
                          {para.trim()}
                        </p>
                      ))}
                    <div className="relative w-fit flex gap-2 group-hover:gap-4 transition-all duration-300 items-center mb-3 font-semobold mt-4 cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#ccc] after:transition-all after:duration-300 group-hover:after:w-full">
                      View case study{" "}
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

export default Portfolio;
