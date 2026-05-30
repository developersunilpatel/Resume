import Image from "next/image";

interface Data {
  title: string;
  description: string;
}

const data: Data[] = [
  {
    title: "UI/UX Design",
    description:
      "From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first.",
  },
  {
    title: "Frontend Dev",
    description:
      "From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first.",
  },
  {
    title: "React JS",
    description:
      "From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first.",
  },
  {
    title: "Frontend Dev",
    description:
      "From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first.",
  },
  {
    title: "React JS",
    description:
      "From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first.",
  },
];

const Services = () => {
  return (
    <section className="relative text-white py-6 bg-gray-900">
      <div className="relative min-h-[90vh] z-10 mx-auto flex container items-center justify-between gap-16 px-6 py-10 md:px-14 xl:px-20">
        <div className="flex flex-col">
          <p className="m-0 text-[18px] font-medium uppercase tracking-[5px] text-[#ff7a2f]">
            What I do
          </p>
          <div className="text-[54px] font-bold text-white xl:mb-15 md:mb-10 mb-5">
            Services
          </div>

          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
            {data.map((item: Data, index: number) => {
              return (
                <div
                  key={index}
                  className="group scale-[0.95] hover:scale-[1] transition-all duration-300 bg-gray-800 p-7 rounded-xl"
                >
                  <span className="mb-4 block">
                    <Image
                      src="/dummi-1.png"
                      alt="Icon"
                      height={100}
                      width={100}
                      className="h-[60px] w-[60px] object-cover rounded"
                    />
                  </span>
                  <span className="text-[24px] font-medium font-semibold text-white group-hover:text-[#ff7a2f] transition-colors duration-300 mb-4 block">
                    {item?.title}
                  </span>
                  <p className="">{item?.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
