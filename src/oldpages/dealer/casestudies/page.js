import CaseStudy from '@/src/components/shared/DealerCaseStudy';
import SunButton from '@/src/components/ui/SunButton';
import { DealerCaseStudy } from '@/src/constants/data';

export default function CaseStudies() {
    return (<>
        <section className="flex flex-col items-center justify-center bg-black">
            {/* Background Image Section */}
            <div
                className="w-full h-[1364px] bg-center bg-cover"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)),
                        url('/images/dealer-case-study-hero.png')
                        `,
                }}
            >
                <div className="container-2xl mx-auto px-[55px] text-center h-full flex mt-60 w-[88%]">
                    <div className="flex flex-col gap-4 w-full">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-6xl">
                            SEE REAL EXAMPLES
                        </h1>

                        <div className="flex flex-col md:flex-row gap-2 max-w-6xl">
                            <SunButton
                                redirect={'/dealer/apply'} text='yellow-400'
                                className="max-w-[392px] whitespace-nowrap text-[10px] lg:text-[12px] xl:text-[15px] border-yellow-300 text-base text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20"
                            >
                                APPLY NOW — JOIN THE SOLAR TRIBE
                            </SunButton>
                        </div>
                    </div>
                </div>
            </div>

            {/* Case Study Grid */}
            <div className="container-2xl mx-auto px-[10px] sm:px-[20px] md:px-[55px] -mt-[853px] z-10 flex flex-col items-center gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-12">
                    {DealerCaseStudy.map((study, i) => (
                        <CaseStudy
                            key={i}
                            content={{
                                ...study
                            }}
                        />
                    ))}
                </div>
                <div className="flex items-center gap-2 mb-4">
                    <SunButton
                        redirect={'/dealer/apply'} text={'yellow-400'}
                        className="text-[15px] border-yellow-300 text-base text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20"
                    >
                        APPLY NOW — JOIN THE SOLAR TRIBE
                    </SunButton>
                </div>
            </div>

        </section>

    </>)
}