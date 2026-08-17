import CarouselComponent from "@/src/components/shared/Carousel";
import DownloadButton from "@/src/components/shared/DownloadButton";
import SunButton from "@/src/components/ui/SunButton";

export default function DiscoverMore() {
    return (<>
        <section className="flex flex-col items-center justify-center bg-black">
            {/* Background Image Section */}
            <div
                className="w-full h-[1364px] bg-center bg-cover"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)),
                        url('/images/discover-more-bg.png')
                        `,
                }}
            >
                <div className="container-2xl mx-auto px-[55px] h-[416px] max-w-[1004px] text-center h-full flex items-start w-[88%] mt-60">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="gap-2 w-full items-center mb-5">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-lato font-bold text-white leading-tight text-center tracking-wide uppercase max-w-6xl">
                                Learn How solar can help your wallet & your planet.
                            </h1>
                            <h3 className="text-white/70 text-xl font-bold text-center">Watch the videos in the education library</h3>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 max-w-6xl items-center justify-center">
                            <SunButton
                                redirect={'/solar/casestudies'}
                                variant="secondary"
                                text="white"
                                className="uppercase text-[15px] bg-gradient-to-r from-white/10 via-white/20 to-white/30 border border-white/30 backdrop-blur-lg text-base"
                            >
                                Case Studies
                            </SunButton>
                            <SunButton text="[#FFCD28]"
                                redirect={'/solar/apply'}
                                className="text-[15px] border-yellow-300 text-base text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20"
                            >
                                APPLY NOW — JOIN THE SOLAR TRIBE
                            </SunButton>


                        </div>
                    </div>
                </div>
            </div>

            <div className="container-2xl mx-auto flex flex-col items-center px-[55px] -mt-[553px] z-10">

                <img src={'/images/discover-more-video.png'} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full">
                    {
                        ['WHAT IS PPA', 'SOLAR VS UTILITY', 'HOW ANCESTRO WORK?', 'HOW ANCESTRO WORK?'].map((text, i) => (
                            <div key={i} className="flex flex-col max-w-[332px] space-y-4">
                                <div className="border-b-3 border-b-white/10 w-full px-8 py-2" />
                                <h1 className="text-white font-bold text-xl">{text}</h1>
                                <p className="text-white text-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        ))
                    }
                </div>
                <div className="border-b-8 border-b-white/10 w-full px-8 py-2" />
            </div>
            <div className='w-full items-center justify-center mt-20'>
                <h3 className='text-center text-white font-[700] font-lato text-md'>TRUSTED BY DEALERS ACROSS LATAM</h3>
                <CarouselComponent variant="stats"/>
            </div>
            <div className='w-full flex flex-col items-center justify-center mt-20'>
                <div className='max-w-[540px] w-full'>
                    <h2 className='my-2 text-center text-white font-[700] font-lato text-4xl tracking-[2px]'>SAVE 100 TREES PER YEAR</h2>
                    <p className='my-5 self-center uppercase text-center text-white/80 font-[500] font-lato text-sm'>How to make subtle changes in your home/business that have a big environmental impact</p>
                </div>
                
                <DownloadButton />
            </div>
        </section >
    </>)
}
