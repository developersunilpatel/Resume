const Hero = () => {
  return (
    <main
      id="hero"
      className="relative min-h-screen overflow-hidden text-white py-0 bg-gray-900"
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

      <section className="relative z-10 mx-auto flex flex-col min-h-screen container items-center justify-center gap-6 px-6 py-10 md:px-14 xl:px-20">
        {/* Heading */}
        <div className="leading-[0.95] tracking-[-4px]">
          <div className="text-[36px] text-center font-bold text-white md:text-[72px]">
            {/* Hi, I&apos;m <br /> &lt; */}
            <span className="text-[#ff7a2f] capitalize tracking-[4px]">
              &lt;frontend developer /&gt;
            </span>
          </div>
        </div>

        <p className="mt-10 max-w-[640px] text-[14px] leading-[1.7] text-[#9e9e9e] md:text-[24px]">
          Crafting exceptional user experiences with React, Next.js, and modern
          web technologies. Specialized in performance optimization and scalable
          frontend architectures.
        </p>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap items-center gap-6">
          <a
            href="#portfolio"
            className="cursor-pointer group flex h-[48px] items-center gap-3 rounded-full bg-white px-10 text-[16px] font-medium text-black transition-all duration-300 hover:scale-[1.02]"
          >
            View my work
          </a>

          <a
            href="mailto:developersunilpatel@gmail.com"
            className="cursor-pointer flex h-[48px] items-center rounded-full border border-white/15 bg-white/5 px-12 text-[16px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>

        {/* Divider */}
        {/* <div className="mt-4 h-px w-full bg-white/8" /> */}

        {/* Stats */}
        {/* <div className="mt-4 flex flex-wrap gap-16 md:gap-24">
          {[
            { value: "34+", label: "Projects done" },
            { value: "21+", label: "Happy clients" },
            { value: "5y", label: "Experience" },
          ].map((item) => (
            <div key={item.label}>
              <h3 className="text-[36px] font-bold leading-none text-white">
                {item.value}
              </h3>
              <p className="mt-3 text-[16px] text-[#8d8d8d]">{item.label}</p>
            </div>
          ))}
        </div> */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hover:scale-[1.02] transition-all duration-300">
          <a href="#about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down w-8 h-8 mx-auto text-emerald-400 animate-pulse"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Hero;
