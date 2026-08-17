import CaseStudy from "@/src/components/shared/SolarCaseStudy";
import FlagHover from "@/src/components/shared/FlagHover";
import SunButton from "@/src/components/ui/SunButton";
import { SolarCaseStudy } from "@/src/constants/data";


export default function Solar() {


    return (<div className="min-h-screen">

        {/*Hero Section*/}
        <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            {/* Background */}
            {/* <div className="absolute inset-0">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)),
                            url('/images/solar-hero-section.png')
                            `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </div> */}
            <div className="bg-slideshow">
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/*Hero section - Main content*/}
            <div className="container-2xl mx-auto px-[10px] sm:px-[55px] text-center relative z-10 pt-20 [@media(max-width:550px)]:pt-35 md:pt-35 lg:py-30 ">
                <div className=" mx-auto flex flex-col xl:flex-row gap-10 items-stretch p-4 md:p-20">
                    {/* Left Side: Heading + Flags */}
                    <div className="flex-3 flex flex-col items-start justify-center gap-4 w-full xl:w-[45%]">
                        <h1 className="w-full text-3xl md:text-4xl lg:text-5xl xl:text-[53px] 2xl:text-6xl font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-6xl mx-auto">
                            Join LATAM’s Fastest-Growing Solar Subscription Network.
                        </h1>
                        <span className="text-md text-left text-white font-lato">$0 upfront. Day-one savings. Long-term stability. Available now in 18 countries.</span>
                        <div className="flex flex-wrap justify-center items-center gap-1 mb-4">
                            {SolarCaseStudy.map((study, i) => (
                                <FlagHover
                                    key={i}
                                    content={{
                                        src: `/images/${study.country.toLowerCase()}.png`,
                                        alt: `${study.country}`,
                                        study: study
                                    }}
                                />
                            ))}
                            <div
                                className="relative inline-block w-25 h-10 mt-3"
                            >
                                <img
                                    src={'/images/belize.png'}
                                    alt={'belize'}
                                    className="w-20 h-13 rounded-sm object-cover shadow"
                                />
                            </div>
                            <div
                                className="relative inline-block w-25 h-10 mt-3"
                            >
                                <img
                                    src={'/images/ecuador.png'}
                                    alt={'ecuador'}
                                    className="w-20 h-13 rounded-sm object-cover shadow"
                                />
                            </div>
                            <div
                                className="relative inline-block w-25 h-10 mt-3"
                            >
                                <img
                                    src={'/images/paraguay.png'}
                                    alt={'paraguay'}
                                    className="w-20 h-13 rounded-sm object-cover shadow"
                                />
                            </div>
                        </div>
                        <div className="flex justify-start mt-4 w-full">
                            <SunButton redirect={'/solar/apply'} text={'[#FFCD28]'}
                                className="p-1 whitespace-nowrap text-[10px] lg:text-[12px] xl:text-[15px] border-yellow-300 text-base text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20"
                                textClassName=" whitespace-nowrap text-sm lg:text-base xl:text-[15px]"
                            >
                                APPLY NOW — JOIN THE SOLAR TRIBE
                            </SunButton>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    {/* <div className="flex-2">
                        <div className="w-[100%] overflow-hidden relative max-w-2xl rounded-[5%]">
                            <img
                                src="/images/solar-video.png"
                                alt="solar"
                                className="w-full object-cover object-center scale-[1.35]"
                            />
                        </div>
                    </div> */}
                    <div className="flex-[2] min-h-[300px] md:min-h-[500px] w-full">
                        <div className="w-full xl:aspect-[716/664] overflow-hidden relative rounded-[5%]">
                            <img
                                src="/images/solar-video.png"
                                alt="solar"
                                className="w-full h-full  object-cover object-center scale-[1.6] md:scale-[1.35]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="z-50 text-center font-lato font-bold text-[25px] font-lato leading-relaxed text-white p-5">OUR CASE STUDY</h2>


        </section>

        {/*OUR CASE STUDY*/}
        <section className="flex flex-col bg-black  py-10 items-center">
            {/* <h2 className="text-center font-lato font-bold text-[25px] font-lato leading-relaxed text-white p-5">OUR CASE STUDY</h2> */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-[95%] md:w-[90%] lg:w-[82%] justify-items-center mb-10 gap-7">
                {
                    SolarCaseStudy.map((study, i) => i < 3 && (
                        <CaseStudy
                            key={i}
                            content={{
                                alt: `${study.country}`,
                                study: study
                            }} />
                    ))
                }
            </div>
            <div className="flex flex-col md:flex-row gap-3 mt-5">
                <SunButton redirect={'/solar/casestudies'} textClassName=" whitespace-nowrap text-sm lg:text-base xl:text-[15px]"
                >SEE MORE CASE STUDIES.
                </SunButton>
                <SunButton redirect={'/solar/apply'} text={'[#FFCD28]'}
                    className="text-[15px] font-lato border-yellow-300 text-base text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20"
                    textClassName=" whitespace-nowrap text-sm lg:text-base xl:text-[15px]"
                >APPLY NOW — JOIN THE SOLAR TRIBE
                </SunButton>
            </div>
        </section>

        {/*LEARN MORE ABOUT ANCESTRO*/}
        <section className="flex flex-col bg-black  py-10 items-center">
            <h2 className="text-center font-lato font-bold text-[25px] font-lato leading-relaxed text-white p-5 mb-10">LEARN MORE ABOUT ANCESTRO</h2>
            <div className="w-[82%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10">
                {
                    [
                        { img: '/images/learn-more-1.png', title: 'How $0 Down Works', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                        { img: '/images/learn-more-2.png', title: 'Why Solar Is Inevitable in LATAM', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                        { img: '/images/learn-more-3.png', title: 'Why Customers Trust Ancestro', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                    ].map((card, i) => (
                        <div key={i} className="relative w-full h-[523px] overflow-hidden">
                            <img
                                className="rounded-lg w-auto h-full object-cover transition-transform duration-1000 hover:scale-125 hover:rounded-lg"
                                src={card.img}
                            />
                            <div className="gap-1 absolute bottom-0 p-5">
                                <h2 className="font-lato text-[22px] font-bold font-lato text-white uppercase uppercase">{card.title}</h2>
                                <span className="font-lato text-white font-lato text-[12px]">{card.desc}</span>
                            </div>
                        </div>

                    ))
                }
            </div>
            <div className="flex flex-col md:flex-row gap-3 mt-5">
                <SunButton redirect={'/solar/discovermore'}>DISCOVER MORE.</SunButton>
                <SunButton redirect={'/solar/apply'}
                    text={"[#FFCD28]"}
                    className="text-[15px] border-yellow-300 text-base text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20"
                    textClassName=" whitespace-nowrap text-sm lg:text-base xl:text-[15px]"
                >APPLY NOW — JOIN THE SOLAR TRIBE</SunButton>
            </div>
        </section>
    </div>);
}
