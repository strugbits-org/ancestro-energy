'use client'

import { useState } from "react";
import VideoTestimonial from "./VideoTestimonial";

const CaseStudy = ({ content }) => {
    const [open, setOpen] = useState(false)
    return (<>
        <div
            className="group px-5 flex flex-col items-center justify-around shadow-lg h-[652px] max-w-[481px] w-full rounded p-4 text-sm w-fit bg-gradient-to-r from-white/10 via-white/20 to-white/30 border border-white/30 backdrop-blur-lg rounded-[20px] hover:mt-[-30px]  transition-all duration-500 delay-200"
        >
            <div className="overflow-hidden w-full h-[40%] rounded">

                <img className="h-full w-full transition-transform duration-2000 group-hover:scale-125" src={content.image} />
            </div>
            <div className="mt-2 flex w-full justify-start items-center gap-3">
                <img src={content.flag} />
                <h1 className="font-lato text-white text-[25px] font-bold">{`${content?.title?.toUpperCase()}`} </h1>
            </div>
            <div className="flex flex-wrap gap-[5px] justify-start w-full">
                {content.investmentData.map((data, i) => (
                    <div key={i} className="flex items-center gap-2 font-lato text-lg text-white px-3 py-1 bg-gradient-to-r from-white/10 via-white/20 to-white/30 border border-white/30 backdrop-blur-lg rounded-full">
                        <div key={i} className="uppercase text-[10px] 2xl:text-sm font-bold">
                            {data.metric} :
                        </div>
                        <div className="flex w-fit items-center gap-2 pb-[5px]">
                            <div className="text-sm 2xl:text-lg font-bold text-green-400">↑</div>
                            <div className="text-sm 2xl:text-lg text-white">{data.magnitude}</div>
                        </div>
                    </div>))}
            </div>
            <div className="px-1 pb-2 pt-1 mt-2 font-lato text-white/80 text-[14px] text-start leading-[22px]">
                {content.description}
            </div>
            <div onClick={()=>setOpen(true)} className="flex justify-between w-full cursor-pointer">
                <div className="text-white text-md font-lato leading-loose mt-2">VIDEO TESTIMONIAL<strong className="ml-2 text-xl">→</strong></div>
                <img className='w-15 h-15' src={'/images/customer-card.png'} />
            </div>
        </div>
        <VideoTestimonial open={open} setOpen={setOpen} />
    </>)
}

export default CaseStudy;
