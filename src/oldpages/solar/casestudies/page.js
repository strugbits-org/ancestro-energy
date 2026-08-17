import CarouselComponent from '@/src/components/shared/Carousel';
import CaseStudy from '@/src/components/shared/SolarCaseStudy';
import DownloadButton from '@/src/components/shared/DownloadButton';
import SunButton from '@/src/components/ui/SunButton';
import { SolarCaseStudy } from '@/src/constants/data';

export default function CaseStudies() {
    return (<>
        <section className="flex flex-col items-center justify-center bg-black">
            {/* Background Image Section */}
            <div
                className="w-full h-[1364px] bg-center bg-cover"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)),
                        url('/images/solar-panel-case-study.png')
                        `,
                }}
            >
                <div className="container-2xl mx-auto px-[55px] text-center h-full flex mt-60 w-[88%]">
                    <div className="flex flex-col gap-4 w-full">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-6xl">
                            REAL PEOPLE, REAL RESULTS
                        </h1>

                        <div className="flex flex-col md:flex-row gap-2 max-w-6xl items-center">
                            <SunButton
                                redirect={'/solar/apply'}
                                text={'[#FFCD28]'}
                                className="max-w-[392px] w-full px-4 flex justify-around py-2 md:py-5 text-sm md:text-base border-yellow-300 text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20"
                                textClassName="[@media(max-width:450px)]:text-[10px] whitespace-nowrap text-sm lg:text-base"
                            >
                                APPLY NOW — JOIN THE SOLAR TRIBE
                            </SunButton>

                            <button
                                className="rounded-full uppercase font-bold py-1 max-h-[90px] md:max-h-fit px-3 text-[10px] bg-white md:text-base shadow"
                            >
                                25 YeaRS of warranty + Guarantees Insurance from ancestro protect.
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Case Study Grid */}
            <div className="container-2xl mx-auto px-[5px] sm:px-[55px] -mt-[853px] z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-12">
                    {SolarCaseStudy.map((study, i) => (
                        <CaseStudy
                            key={i}
                            content={{
                                alt: `${study.country}`,
                                study: study,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className='w-full items-center justify-center mt-20'>
                <h3 className='text-center text-white font-[700] font-lato text-md'>TRUSTED BY MANY</h3>
                <CarouselComponent />
            </div>

            <div className='w-full flex flex-col items-center justify-center mt-20'>
                <div className='max-w-[540px] w-full'>
                    <h2 className='my-2 text-center text-white font-[700] font-lato text-4xl tracking-[2px]'>SAVE 100 TREES PER YEAR</h2>
                    <p className='my-5 self-center uppercase text-center text-white/80 font-[500] font-lato text-sm'>How to make subtle changes in your home/business that have a big environmental impact</p>
                </div>

                <DownloadButton />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-5'>
                    {
                        ['/images/save-trees-1.png', '/images/save-trees-2.png', '/images/save-trees-3.png', '/images/save-trees-4.png'].map((image, i) => (
                            <img key={i} src={image} className='h-[493px] w-auto rounded-xl' />
                        ))
                    }
                </div>
            </div>
        </section>

    </>)
}