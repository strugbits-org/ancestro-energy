
"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function CaseStudySection() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen">
      {/* Background split: 20% black + 80% image */}
      <div className="absolute top-0 left-0 w-full h-[20%] bg-black z-0"></div>
      <div
        className="absolute top-[20%] left-0 w-full h-[80%] bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/case-bg.png')" }}
      ></div>

      {/* Overlay content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-white space-y-16">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-[25px] font-bold font-lato text-center">
          {t("caseStudySection.title")}
        </h2>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {t("caseStudySection.caseStudies", { returnObjects: true }).map((card, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF1A] backdrop-blur-sm rounded-2xl p-6 flex flex-col items-start space-y-2 border border-[#FFFFFF4D] transition-transform duration-300 hover:-translate-y-10"
            >
              {/* Card Image */}
              <div className="relative w-[421px] h-[281px] max-w-full mx-auto">
                <Image
                  src={`/case${index + 1}.png`}
                  alt={card.heading}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Heading */}
              <h3 className="text-xl font-bold font-lato text-[25px]">{card.heading}</h3>

              {/* Description */}
              <p className="text-sm text-white/80 font-lato italic">{card.description}</p>

              {/* Highlighted Tag */}
              <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-lato font-bold text-[12px]">
                {card.tag}
              </span>

              {/* Paragraph */}
              <p className="text-sm text-white/80 font-lato text-[14px]">{card.paragraph}</p>

              {/* Quote */}
              <p className="text-sm font-lato text-[14px]">{card.quote}</p>
            </div>
          ))}
        </div>

        {/* Powered by Ancestro */}
        <div className="w-full text-center space-y-16 mt-20">
          <h3 className="text-2xl md:text-[28px] font-bold font-lato">
            {t("caseStudySection.poweredBy")}
          </h3>

          {/* Ecosystem Images Row */}
  
  <div
    className="
      grid 
      grid-cols-2 
      sm:grid-cols-3 
      md:grid-cols-4 
      lg:grid-cols-5 
      xl:grid-cols-6 
      gap-6 
      md:gap-8 
      justify-items-center 
      w-full
      px-4
    "
  >
    {[1, 2, 3, 4, 5, 6].map((eco) => (
      <div
        key={eco}
        className="flex flex-col items-center space-y-2 w-full max-w-[180px]"
      >
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={`/eco${eco}.png`}
            alt={`Ecosystem ${eco}`}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, (max-width: 1024px) 180px, 200px"
          />
        </div>
      </div>
    ))}
  </div>
          {/* Logo + Address */}
    
<div className="flex flex-col items-center space-y-8 mt-12">
  {/* Logo */}
  <div className="relative w-[200px] h-[70px] sm:w-[260px] sm:h-[90px] md:w-[337px] md:h-[119px]">
    <Image
      src="/Logo.png"
      alt="Ancestro Logo"
      fill
      className="object-contain"
    />
  </div>

  {/* Address + Divider + Contact + Icons */}
  <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-center mt-6">
    {/* <p className="text-sm md:text-base text-white/80 font-lato font-bold">
      {t("caseStudySection.address")}
    </p> */}

    {/* Divider */}
    {/* <div className="w-[40px] md:w-[50px] h-[1px] bg-white/60"></div> */}

    {/* Contact */}
    <span className="text-sm md:text-base text-white/80 font-lato font-bold">
      {t("caseStudySection.contact")}
    </span>

    {/* Social Icons */}
    <div className="flex items-center justify-center gap-4 md:gap-6 ml-2">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/company/ancestro-energy/posts/?feedView=all"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] md:w-[38px] md:h-[38px] hover:opacity-80 transition"
      >
        <Image
          src="/linkedin.png"
          alt="LinkedIn"
          fill
          className="object-contain"
        />
      </a>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/ancestroenergy/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] md:w-[38px] md:h-[38px] hover:opacity-80 transition"
      >
        <Image
          src="/insta.png"
          alt="Instagram"
          fill
          className="object-contain"
        />
      </a>

    </div>
  </div>
</div>


        </div>
      </div>
    </section>
  );
}