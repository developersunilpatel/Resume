import Image from "next/image";

interface Data {
  title: string;
  skills: string[];
  description: string[];
  url: string;
  thumb: string;
}

const data: Data[] = [
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
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative text-white py-6 bg-gray-800">
      <div className="relative min-h-[90vh] z-10 mx-auto flex container items-center justify-between gap-16 px-6 py-24 md:px-14 xl:px-20">
        <div className="flex flex-col">
          <p className="m-0 text-[18px] font-medium uppercase tracking-[5px] text-[#ff7a2f]">
            Portfolio
          </p>
          <span className="text-[54px] font-bold text-white xl:mb-15 md:mb-10 mb-5">
            Worked on
          </span>

          <div className="grid lg:grid-cols-3 gap-6">
            {data.map((item: Data, index: number) => {
              return (
                <div
                  key={index}
                  className={`group scale-[0.98] hover:scale-[1] transition-all duration-300 bg-gray-900 p-0 rounded-xl overflow-hidden`}
                >
                  <span className="block">
                    <Image
                      src={item.thumb}
                      alt={item.title}
                      height={200}
                      width={400}
                      className="h-[200px] w-full object-cover object-top"
                    />
                  </span>
                  <div className="px-6 py-6">
                    <div className="min-h-[50px] flex gap-3">
                      {item?.skills?.map((s: string, index: number) => {
                        return (
                          <div
                            key={index}
                            className={`flex items-center justify-center border-1 bg-gray-800 rounded-4xl px-3 py-0 h-[24px] text-[10px] ${index === 0 ? "text-[#ff7a2f] border-[#ff7a2f]" : "border-gray-500"}`}
                          >
                            {s}
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-[24px] font-medium font-semibold text-white group-hover:text-[#ff7a2f] transition-colors duration-300 mb-4 block">
                      {item?.title}
                    </div>
                    <ul className="space-y-3 mt-2">
                      {item?.description?.map((para: string, index: number) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-[#ccc] hover:text-[#ff7a2f] transition-colors duration-300"
                        >
                          <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-[#ff7a2f] shrink-0" />
                          <span>{para.trim()}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-fit flex gap-2 text-[#ccc] group-hover:text-white group-hover:gap-4 transition-all duration-300 items-center mb-3 font-semobold mt-4 cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#ccc] after:transition-all after:duration-300 group-hover:after:w-full"
                    >
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
                    </a>
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
