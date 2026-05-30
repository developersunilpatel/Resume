import Image from "next/image";
import React from "react";

interface FeedbackData {
  rate: number;
  text: string;
  profile: string;
  name: string;
  position: string;
}

const feedback: FeedbackData[] = [
  {
    rate: 5,
    text: "Eliott delivered our redesign in record time and the quality blew us away. Our conversion rate jumped 28% in the first month. Absolutely recommend.",
    profile: "/sunil.png",
    name: "lorem ispum",
    position: "CPO, Novu",
  },
  {
    rate: 0,
    text: "Eliott delivered our redesign in record time and the quality blew us away. Our conversion rate jumped 28% in the first month. Absolutely recommend.",
    profile: "/sunil.png",
    name: "lorem ispum",
    position: "CPO, Novu",
  },
  {
    rate: 3,
    text: "Eliott delivered our redesign in record time and the quality blew us away. Our conversion rate jumped 28% in the first month. Absolutely recommend.",
    profile: "/sunil.png",
    name: "lorem ispum",
    position: "CPO, Novu",
  },
];

const ClientFeedback = () => {
  const fixRatingStars = (rating: number) => {
    const noRates = 5 - rating;

    return (
      <>
        {Array.from({ length: rating }).map((_, i: number) => (
          <span key={i} className="text-[#ff7a2f]">
            *
          </span>
        ))}
        {Array.from({ length: noRates }).map((_, i: number) => (
          <span key={i} className="text-[#cccccc]">
            *
          </span>
        ))}
      </>
    );
  };

  return (
    <section className="relative text-white py-6 bg-gray-800">
      <div className="relative min-h-[60vh] z-10 mx-auto flex container items-center justify-between gap-16 px-6 py-10 md:px-14 xl:px-20">
        <div className="flex flex-col w-full">
          <p className="m-0 text-[18px] font-medium uppercase tracking-[5px] text-[#ff7a2f]">
            Social proof
          </p>
          <div className="text-[54px] font-bold text-white xl:mb-15 md:mb-10 mb-5 capitalize">
            What clients say
          </div>

          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6 w-full">
            {feedback?.map((item: FeedbackData, index: number) => {
              return (
                <div
                  key={index}
                  className="group hover:scale-[1.02] transition-transform duration-300 bg-gray-900 rounded-xl p-8 flex flex-col gap-6"
                >
                  <div className="tracking-[10px] text-[28px]">
                    {item.rate === 0 ? "*****" : fixRatingStars(item.rate)}
                  </div>
                  <div>{item.text}</div>
                  <div className="flex gap-3 items-center">
                    <div>
                      <Image
                        src={item.profile}
                        alt="Icon"
                        height={100}
                        width={100}
                        className="h-[50px] w-[50px] rounded-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="p-0 m-0 font-medium group-hover:text-[#ff7a2f] transition-colors duration-300">
                        {item.name}
                      </label>
                      <label className="p-0 m-0 text-[12px]">
                        {item.position}
                      </label>
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

export default ClientFeedback;
