import React from 'react'

interface SectionTitleProps {
  title: string;
  subTitle: string;
}

const SectionTitle = ({title, subTitle}: SectionTitleProps) => {
  return (
    <>
      <p className="text-[18px] font-medium uppercase tracking-[5px] text-[#ff7a2f] mb-4">
        {subTitle}
      </p>
      <div className="relative lg:text-[74px] text-[44px] font-bold text-white capitalize leading-[74px] md:mb-16 mb-10 text-heading tracking-[2px]">
        {title}
        <span className='ml-5 lg:h-[15px] lg:w-[15px] h-[10px] w-[10px] rounded-full bg-[#ff7a2f] inline-block'></span>
      </div>
    </>
  )
}

export default SectionTitle