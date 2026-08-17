import SunButton from '@/src/components/ui/SunButton';

export default function Donate() {
    return (<>
        <section className="flex flex-col items-center justify-center bg-black">
            {/* Background Image Section */}
            <div
                className="w-full h-[1364px] bg-center bg-cover"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)),
                        url('/images/donate-hero.png')
                        `,
                }}
            >
                <div className="container-2xl mx-auto px-[55px] text-center h-full flex flex-col mt-60 w-[88%]">
                    <div className="flex flex-col gap-4 w-full items-center justify-start mt-60">
                        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-6xl">
                            LET'S SAVE THE WORLD
                        </h1>
                    </div>

                </div>
            </div>
            <div className="relative container-2xl mx-auto px-[55px] -mt-[853px] z-10 flex flex-col items-center gap-10">
                <div className=''>
                    <div className="flex flex-col gap-4 w-full items-center justify-start mt-60">
                        <h1 className="text-center [@media(max-width:430px)]:text-base text-lg md:text-xl lg:text-2xl xl:text-3xl font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-6xl">
                            Ancestro Foundation Supports
                        </h1>
                    </div>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                    {[
                        {
                            img: '/images/donate-1.png',
                            title: 'Amazon Revival',
                            description:
                                'The revival of the Amazon rainforest is vital for our planet’s climate and biodiversity. Protecting it from deforestation, restoring forests, and empowering indigenous communities are key to its sustainable future.',
                        },
                        {
                            img: '/images/donate-2.png',
                            title: 'Great Pacific Garbage Patch',
                            description:
                                'The revival of the Amazon rainforest is vital for our planet’s climate and biodiversity. Protecting it from deforestation, restoring forests, and empowering indigenous communities are key to its sustainable future.',
                        },
                        {
                            img: '/images/donate-3.png',
                            title: 'Solar for poor',
                            description:
                                'The revival of the Amazon rainforest is vital for our planet’s climate and biodiversity. Protecting it from deforestation, restoring forests, and empowering indigenous communities are key to its sustainable future.',
                        },
                        {
                            img: '/images/donate-4.png',
                            title: 'River waste removal',
                            description:
                                'The revival of the Amazon rainforest is vital for our planet’s climate and biodiversity. Protecting it from deforestation, restoring forests, and empowering indigenous communities are key to its sustainable future.',
                        },
                    ].map((card, i) => (
                        <div
                            key={i}
                            className="relative group relative w-full h-[400px] md:h-[584px] overflow-hidden"
                        >
                            <img
                                className=" bg-gradient-to-t from-black/80 via-black/10 to-transparent rounded-2xl w-auto h-full object-cover transition-transform duration-1000 group-hover:scale-125 group-hover:rounded-lg"
                                src={card.img}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent rounded-2xl"></div>

                            <div className="absolute bottom-0 p-5 w-full">
                                <h2
                                    className="font-lato text-xl tracking-[2px] font-bold uppercase text-white
          transition-all duration-500 group-hover:-translate-y-4"
                                >
                                    {card.title}
                                </h2>
                                <span
                                    className="opcaity:100 md:opacity-0 max-h-0 overflow-hidden block font-lato text-white text-sm
          transition-all duration-500 group-hover:opacity-100 group-hover:max-h-[200px] group-hover:mt-2"
                                >
                                    {card.description}
                                </span>
                                <div className="my-2 ">
                                    <SunButton className="w-[133px] py-3 px-4 text-white border border-white text-md font-bold rounded-full bg-gradient-to-r from-white/30 via-white/20 to-white/10 backdrop-blur-lg active:text-bold"
                                    textClassName='active:text-black active:font-bold'
                                    >
                                        Donate
                                    </SunButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
        <section >
            <div className="w-[95%] md:w-[66%] container-2xl mx-auto px-[55px] z-10 flex flex-col items-center gap-10">
                <div>
                    <div className="flex flex-col gap-4 w-full items-center justify-start mt-10 lg:mt-30 xl:mt-60">
                        <h1 className="text-center text-lg md:text-xl lg:text-2xl xl:text-3xl font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-6xl">
                            OUR BLOGS
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-10 pb-10 ">
                    <div className="">
                        <div className="group relative w-full h-[400px] md:h-[448px] overflow-hidden">
                            <img
                                className="rounded-2xl w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125 group-hover:rounded-lg"
                                src={'/images/donate-5.png'}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent rounded-2xl"></div>

                            <div className="absolute bottom-0 p-5 w-full">
                                <h2 className="font-lato text-xl tracking-[2px] font-bold uppercase text-white">
                                    GREAT pacific garbage patch
                                </h2>
                                <div className="my-2">
                                    <SunButton className="w-[133px] py-3 px-4 text-white border border-white text-md font-bold rounded-full bg-gradient-to-r from-white/30 via-white/20 to-white/10 backdrop-blur-lg">
                                        Donate
                                    </SunButton>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 2xl:grid-cols-2 gap-3 items-center ">
                        {[
                            '/images/solar-blog-1.png',
                            '/images/solar-blog-2.png',
                            '/images/solar-blog-3.png',
                            '/images/solar-blog-4.png',
                            '/images/solar-blog-5.png',
                            '/images/solar-blog-6.png',
                        ].map((img, i) => (
                            <div key={i} className="bg-gradient-to-r from-black/30 via-white/20 to-white/10 backdrop-blur-lg border border-white/30 rounded-lg py-2 px-3 flex items-center max-h-[130px] h-full w-full gap-3">
                                <div className="flex-shrink-0">
                                    <img src={img} className="h-23 w-28 rounded-[16px]" />
                                </div>
                                <div className="flex flex-col gap-2 w-[400px] my-1">
                                    <div className="flex justify-between">
                                        <div className="hidden md:block bg-white px-2 py-0 md:py-1 rounded-lg text-sm max-h-6 max-w-12 flex justify-around">Solar</div>
                                        <div className="text-white/30 text-[10px] sm:text-sm">
                                            Aug 4, 2025 • 3344 views
                                        </div>
                                    </div>
                                    <div className="text-white font-bold text-md">
                                        Augmented Reality Trends for 2025
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
        <section className='flex flex-wrap gap-5 justify-center items-center mb-5'>
            <div className='flex flex-wrap gap-10 justify-center py-10 px-5'>
                <h3 className='text-white text-base uppercase font-bold tracking-[2px]'>Address: 123 Green Avenue, Ancestro Business Park, Suite 405, New York, NY 10001, United States</h3>
                <h3 className='text-white text-base uppercase font-bold tracking-[2px]'>—</h3>
                <h3 className='text-white text-base uppercase font-bold tracking-[2px]'>Contact us: +1 (555) 123-4567s  |  +44 20 7946 0958</h3>
            </div>
            <SunButton className='w-[136px] max-h-[58px] h-full py-2 text-white border border-white text-md font-bold rounded-full bg-gradient-to-r from-white/30 via-white/20 to-white/10 backdrop-blur-lg'>Privacy</SunButton>
        </section>
    </>)
}