import Image from "next/image";
import React from "react";

const tools = [
  "ReactJs",
  "NextJs",
  "Typescript",
  "Javascript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "BootStrap",
  "Animation",
  "Framer",
];

const About = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="relative min-h-[60vh] z-10 mx-auto flex container items-center justify-between gap-16 px-6 py-10 md:px-14 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="xl:p-16 lg:p-10 p-0 lg:mb-0 mb-8">
            <Image
              src="/dummi-1.png"
              alt="Icon"
              height={100}
              width={100}
              className="max-h-[500px] w-full object-cover rounded-4xl"
            />
          </div>
          <div className="">
            <p className="m-0 text-[18px] font-medium uppercase tracking-[5px] text-[#ff7a2f] mb-6">
              About me
            </p>
            <div className="text-[54px] font-bold text-white xl:mb-10 md:mb-7 mb-4 capitalize leading-[64px]">
              A bit about
              <br />
              Who I am
            </div>
            <p className="mb-4">
              I am Eliott, a freelance designer and frontend developer based in
              Paris with 5 years of experience shipping digital products for
              startups, agencies, and scale-ups across Europe. I thrive at the
              intersection of great design and clean code.
            </p>
            <p className="mb-8">
              I believe great interfaces are invisible — they get out of the
              users way. My work is fast, accessible and built to last. When I
              am not coding, you will find me hiking or hunting for a good
              espresso.
            </p>

            <p className="mb-2 uppercase">Stack & tools</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
