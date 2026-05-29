import Image from "next/image";

const Hero = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[700px] w-[700px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />

        {/* Noise / texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle at center, white 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen container items-center justify-between gap-16 px-6 py-10 md:px-14 xl:px-20">
        {/* LEFT CONTENT */}
        <div className="max-w-[720px] flex-1">
          {/* Small Label */}
          <p className="mb-10 text-[18px] font-medium uppercase tracking-[5px] text-[#ff7a2f]">
            Available for work
          </p>

          {/* Heading */}
          <h1 className="leading-[0.95] tracking-[-4px]">
            <span className="block text-[36px] font-bold text-white md:text-[72px]">
              Hi, I&apos;m{" "}
              <span className="text-[#ff7a2f]">KreyNik</span>
            </span>
          </h1>

          {/* Description */}
          <p className="mt-10 max-w-[640px] text-[14px] leading-[1.7] text-[#9e9e9e] md:text-[24px]">
            <span className="font-semibold text-white">
              Freelance UI/UX Designer & Frontend Developer.
            </span>{" "}
            I design and build digital products that people love to use —
            fast, clean, and accessible.
          </p>

          {/* Buttons */}
          <div className="mt-14 flex flex-wrap items-center gap-6">
            <button className="cursor-pointer group flex h-[48px] items-center gap-3 rounded-full bg-white px-10 text-[16px] font-medium text-black transition-all duration-300 hover:scale-[1.02]">
              View my work
            </button>

            <button className="cursor-pointer flex h-[48px] items-center rounded-full border border-white/15 bg-white/5 px-12 text-[16px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10">
              Get in touch
            </button>
          </div>

          {/* Divider */}
          <div className="mt-20 h-px w-full bg-white/8" />

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-16 md:gap-24">
            {[
              { value: "34+", label: "Projects done" },
              { value: "21+", label: "Happy clients" },
              { value: "5y", label: "Experience" },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="text-[36px] font-bold leading-none text-white">
                  {item.value}
                </h3>
                <p className="mt-3 text-[16px] text-[#8d8d8d]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative hidden flex-1 items-center justify-center lg:flex">
          {/* Orange Glow */}
          <div className="absolute h-[520px] w-[520px] rounded-full bg-orange-500/20 blur-[140px]" />

          {/* Image Card */}
          <div className="relative">
            <div className="overflow-hidden rounded-[42px] border border-white/5 bg-[#111] shadow-[0_0_80px_rgba(0,0,0,0.6)]">
              <Image
                src="/dummi-2.png"
                alt="Profile"
                width={560}
                height={720}
                priority
                className="h-[720px] w-[560px] object-cover"
              />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-5 left-[-20px] rounded-[24px] bg-[#ff7a2f] px-10 py-4 shadow-xl">
              <p className="text-[20px] font-semibold text-white">
                Open to projects
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero