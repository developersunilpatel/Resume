import React from "react";
import { FiPhone, FiMapPin, FiMail, } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

interface ContactDetails {
  icon: React.ReactElement,
  text: string,
  link: string
}

const contactDetails: ContactDetails[] = [
  {
    icon: <FiPhone size={14} />,
    text: "+91-990 930 1307",
    link: "callto:9909301307"
  },
  {
    icon: <FiMapPin size={14} />,
    text: "Ahmedabad, Gujarat, India",
    link: "#"
  },
  {
    icon: <FiMail size={14} />,
    text: "developersunilpatel@gmail.com",
    link: "mailto:developersunilpatel@gmail.com"
  },
  {
    icon: <FaLinkedin size={14} />,
    text: "linkedin.com/in/developersunilpatel",
    link: "https://linkedin.com/in/developersunilpatel"
  },
  {
    icon: <FaGithub size={14} />,
    text: "github.com/developersunilpatel",
    link: "https://github.com/jskpatel/"
  },
]

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative md:min-h-[70vh] overflow-hidden bg-gray-900 text-white md:py-26 py-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[700px] w-[700px] rounded-full bg-gray-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-gray-500/10 blur-3xl" />

        {/* Noise / texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, white 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />
      </div>

      <div
        className="group container scale-[0.95] rounded-xl bg-gray-800 md:p-7 py-7 px-3 transition-all duration-300 hover:scale-[1] hover:bg-gray-700/80 hover:shadow-[0_0_30px_rgba(255,122,47,0.08)]"
      >
        <div className="relative z-10 mx-auto flex container items-center justify-between gap-16 px-6 md:py-14 py-5 md:px-14 xl:px-20">
          <div className="grid grid-cols-1">
            <div className="flex flex-col">

              <SectionTitle title="Let&rsquo;s work together" subTitle="Get in touch" />

              <p className="max-w-[640px] md:text-[22px] text-[20px] leading-[1.7] text-[#ccc] group-hover:text-white">
                I&rsquo;m open to UI/UX and frontend missions, short or long-term.
                Landing page, full product redesign, or just a second pair of eyes
                — let&rsquo;s talk.
              </p>

              <div className="flex flex-col gap-4 mt-10">
                {
                  contactDetails.map((data: ContactDetails, index: number) => {
                    return <a
                      key={index}
                      href={data.link}
                      className="group flex items-center gap-3 text-[#ccc] group-hover:text-white hover:text-white transition-colors md:text-[22px] text-[20px]"
                    >
                      <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                        {data.icon}
                      </span>
                      <span>{data.text}</span>
                    </a>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Contact;
