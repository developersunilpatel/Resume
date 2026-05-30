import React from "react";

const Contact = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-900 text-white py-6">
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

      <div className="relative min-h-[90vh] z-10 mx-auto flex container items-center justify-between gap-16 px-6 py-24 md:px-14 xl:px-20">
        <div className="flex flex-col">
          <p className="m-0 text-[18px] font-medium uppercase tracking-[5px] text-[#ff7a2f]">
            Get in touch
          </p>
          <span className="text-[54px] font-bold text-white xl:mb-15 md:mb-10 mb-5">
            Let&rsquo;s work together
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
