import SunButton from "@/src/components/ui/SunButton";

export default function Earn() {
    return (<>
        <section className="flex flex-col items-center justify-center bg-black">
            {/* Background Image Section */}
            <div
                className="w-full h-full min-h-[1200px] bg-center bg-cover "
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,1)),
                        url('/images/earn-hero.png')
                        `,
                }}
            >
                <div className="container-2xl mx-auto px-[55px] text-center h-full flex flex-col mt-60 w-full sm:w-[88%]">
                    <div className="flex flex-col gap-4 w-full items-center justify-start mt-10">
                        <h1 className="md:whitespace-nowrap text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-6xl">
                            ways to earn with ancestro
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row gap-15 lg:gap-50 items-center justify-center my-20">
                        {
                            [{
                                img: '/icons/host-ev-charger.png',
                                title: 'HOST AN EV CHARGER'
                            }, {
                                img: '/icons/green-cash.png',
                                title: 'GREEN CASH A.S.'

                            }].map((el, i) => (
                                <div key={i} className="flex flex-col gap-10 items-center">
                                    <div className="h-30 w-30 lg:h-40 lg:w-40 flex justify-around items-center rounded-[30px] bg-gradient-to-r from-white/20 via-white/10 to-white/5 border border-white/30 backdrop-blur-lg">
                                        <img className="h-13 w-13 lg:h-20 lg:w-20" src={el.img} />
                                    </div>
                                    <div className="font-bold text-2xl text-white max-w-[160px]">{el.title}</div>
                                    <div className="flex flex-col md:flex-row gap-2 max-w-6xl ">
                                        <SunButton
                                            text="[#FFCD28]"
                                            redirect={'/dealer/apply'}
                                            textClassName='whitespace-nowrap sm:text-base'
                                            className="text-[11px] sm:text-base py-4 border-yellow-300 text-base text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20"
                                        >
                                            APPLY NOW — JOIN THE SOLAR TRIBE
                                        </SunButton>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* Partner Logos */}
                <div className="flex justify-center items-center w-full my-10">
                    <h1 className="flex justify-center text-center text-lg md:text-xl lg:text-2xl xl:text-3xl font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-6xl">
                        Our Companies
                    </h1>
                </div>
                
                <div className="w-fit mx-auto flex flex-wrap justify-between items-center gap-2 md:gap-4 px-15 py-6 bg-gradient-to-r from-white/36 to-gray-500/0 border border-white/30 backdrop-blur-sm rounded-lg mb-6">
                    <img
                        src={`/images/Ancestro-Capital.png`}
                        alt={`flag`}
                        className="w-[324px] h-[40px] rounded-sm  shadow"
                    />
                    <img
                        src={`/images/Ancestro-Charge.png`}
                        alt={`flag`}
                        className="w-[244px] h-[40px] rounded-sm  shadow"
                    />
                    <img
                        src={`/images/AncestroProject.png`}
                        alt={`flag`}
                        className="w-[235px] h-[40px] rounded-sm  shadow"
                    />
                    <img
                        src={`/images/Ancestro-Sustainability.png`}
                        alt={` flag`}
                        className="w-[215px] h-[40px] rounded-sm  shadow"
                    />
                    <img
                        src={`/images/Ancestro-Foundation.png`}
                        alt={`flag`}
                        className="w-[164px] h-[40px] rounded-sm shadow"
                    />
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-5'>
                {
                    ['/images/save-trees-1.png', '/images/save-trees-2.png', '/images/save-trees-3.png', '/images/save-trees-4.png'].map((image, i) => (
                        <img key={i} src={image} className='h-[493px] w-auto rounded-xl' />
                    ))
                }
            </div>

        </section>
    </>)
}