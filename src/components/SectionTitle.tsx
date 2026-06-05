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
      <div className="lg:text-[54px] text-[44px] font-bold text-white capitalize leading-[64px] md:mb-16 mb-10">
        {title}
      </div>
    </>
  )
}

export default SectionTitle