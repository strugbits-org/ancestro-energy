import CarouselComponent from '@/src/components/shared/Carousel';
import CaseStudy from '@/src/components/shared/DealerCaseStudy';
import DownloadButton from '@/src/components/shared/DownloadButton';
import SunButton from '@/src/components/ui/SunButton';
import { DealerCaseStudy } from '@/src/constants/data';

export default function Learn() {
    return (<>
        <section className="flex flex-col items-center justify-center bg-black">
            {/* Background Image Section */}
            <div
                className="w-full h-[1364px] bg-center bg-cover"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)),
                        url('/images/solar-hero-section.png')
                        `,
                }}
            >

                <div className="container-2xl mx-auto px-[55px] text-center h-full flex flex-col mt-60 w-[88%]">
                    <div className="flex flex-col gap-4 w-full">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-6xl">
                            Grow With Ancestro — More Deals, More Revenue.
                        </h1>

                        <span className="text-sm md:text-base lg:text-md text-left text-white font-lato">Sell what no one else can: $0 down solar subscriptions across 18 countries. Higher close rates, recurring revenue, and the tools to scale your business.</span>
                        <div className="flex flex-col md:flex-row gap-2 max-w-6xl">
                            <SunButton
                                redirect={'/dealer/apply'}
                                text={"secondary"}
                                 textClassName=" whitespace-nowrap text-[11px] lg:text-base xl:text-[15px]"
                                className="text-[10px] lg:text-base xl:text-[15px] border-yellow-300  text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20"
                            >
                                APPLY NOW — JOIN THE SOLAR TRIBE
                            </SunButton>
                        </div>
                    </div>
                    <div className='my-7 md:my-20 grid grid-cols-1 gap-y-2 gap-x-6 md:gap-x-10 items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20 md:mb-0 w-[88%] justify-center mt-20'>
                        {
                            [
                                {
                                    icon: '/icons/down-financing.png', desc: '$0 Down Financing — Unlock deals competitors can’t.'
                                },
                                {
                                    icon: '/icons/close-projects.png', desc: 'Close More Projects — Higher conversion rates, faster closes.'
                                },
                                {
                                    icon: '/icons/recurring.png', desc: 'Recurring Revenue — Earn long-term, not one-off.'
                                },
                                {
                                    icon: '/icons/18-country.png', desc: '18-Country Network — LATAM’s largest dealer platform.'
                                }
                            ].map((obj, i) => (
                                <div key={i} className='z-50 flex flex-col gap-1 justify-between md:gap-4 max-w-[323px] items-center px-7 py-2'>
                                    <img src={obj.icon} className='w-12 h-12' />
                                    <div className='uppercase text-white/90 text-xs xl:text-sm 2xl:text-base font-bold'>{obj.desc}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>

        </section>

        <section className="flex flex-col bg-black  py-10 items-center pt-45 [@media(min-width:365px)]:pt-35 sm:!pt-0 sm:-mt-[350px] xl:-mt-[500px]">
            <h2 className="text-center font-lato font-bold text-[25px] font-lato leading-relaxed text-white p-5 mb-10">SEE HOW IT WORKS</h2>
            <div className="w-[82%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10">
                {
                    [
                        { img: '/images/learn-more-6.png', title: 'How $0 Down Works', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                        { img: '/images/learn-more-6.png', title: 'Why Solar Is Inevitable in LATAM', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                        { img: '/images/learn-more-6.png', title: 'Why Customers Trust Ancestro', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                        { img: '/images/learn-more-6.png', title: 'HOW ANCESTRO WORK?', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                        { img: '/images/learn-more-6.png', title: 'HOW ANCESTRO WORK?', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                        { img: '/images/learn-more-6.png', title: 'HOW ANCESTRO WORK?', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                    ].map((card, i) => (
                        <div key={i} className="relative w-full h-[523px] overflow-hidden">
                            <img
                                className="rounded-2xl w-auto h-full object-cover transition-transform duration-1000 hover:scale-125 hover:rounded-lg"
                                src={card.img}
                            />
                            <div className="gap-1 absolute bottom-0 p-5">
                                <h2 className="font-lato text-[22px] font-bold font-lato text-white uppercase">{card.title}</h2>
                                <span className="font-lato text-white font-lato text-[12px]">{card.desc}</span>
                            </div>
                        </div>

                    ))
                }
            </div>
            <div className="flex flex-col md:flex-row gap-3 mt-5">
                <SunButton text='secondary' redirect={'/dealer/apply'} className="text-[15px] border-yellow-300 text-base text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20">APPLY NOW — JOIN THE SOLAR TRIBE</SunButton>
            </div>
        </section>

        <section className="flex flex-col bg-black  py-10 items-center ">
            <div className="w-[82%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10">
                {
                    Array(9).fill(
                        { img: '/images/learn-more-6.png', title: 'HOW ANCESTRO WORK?', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                    ).map((card, i) => (
                        <div key={i} className="relative w-full h-[523px] overflow-hidden">
                            <img
                                className="rounded-2xl w-auto h-full object-cover transition-transform duration-1000 hover:scale-125 hover:rounded-lg"
                                src={card.img}
                            />
                            <div className="gap-1 absolute bottom-0 p-5">
                                <h2 className="font-lato text-[22px] font-bold font-lato text-white">{card.title}</h2>
                                <span className="font-lato text-white font-lato text-[12px]">{card.desc}</span>
                            </div>
                        </div>

                    ))
                }
            </div>
            <div className="flex flex-col md:flex-row gap-3 mt-5">
                <SunButton text='secondary' redirect={'/dealer/apply'} className="py-5 text-[15px] border-yellow-300 text-base text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20">APPLY NOW — JOIN THE SOLAR TRIBE</SunButton>
            </div>
            <div className='w-[87%] md:w-[74%] mt-20 py-10'>
                <div className='max-h-fit p-6 2xl:max-h-[352px] w-auto 2xl:px-7 2xl:py-10 md:p-15 flex flex-col items-center gap-10 rounded-4xl border border-secondary text-base text-yellow-200 bg-gradient-to-r from-yellow-300/20 via-yellow-100/20 to-black/20'>
                    <h1 className='uppercase text-center text-xl  md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold tracking-[2px]'>Your Time is Now. Join the Largest Dealer Network in Latin America.</h1>
                    <SunButton text='secondary' redirect={'/dealer/apply'}
                        className="2xl:min-h-[63px] [@media(min-width:1800px)]:min-h-[58px] py-5 text-[15px] border-yellow-300 text-base text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20"
                        textClassName=" whitespace-nowrap text-sm lg:text-base xl:text-[15px]"

                    >APPLY NOW — JOIN THE SOLAR TRIBE</SunButton>

                </div>
            </div>
        </section>


        <section className=''>
            <div className='w-full items-center justify-center'
                style={{
                    backgroundImage: `
        linear-gradient(
          to bottom,
          rgba(0,0,0,0.8) 0%,
          rgba(0,0,0,0.1) 50%,
         rgba(0,0,0,0.1) 50%,
          rgba(0,0,0,0.8) 100%
        ),
        url('/images/dealer-learn-carousel-bg.png')
      `, backgroundSize: 'cover',
                    backgroundPosition: "center",
                }}
            >
                <h3 className='py-6 text-center text-white font-[700] font-lato tracking-[2px] text-md'>TRUSTED BY DEALERS ACROSS LATAM</h3>
                <CarouselComponent variant='stats' />
                <div className='w-full flex flex-col items-center justify-center mt-5'>
                    <div className='max-w-[678px] w-full'>
                        <h2 className='my-2 text-center text-white font-[700] font-lato text-5xl tracking-[2px] uppercase'>Get the Edge in Solar Sales</h2>
                        <p className='my-5 mx-10 self-center text-center text-white/80 font-[500] font-lato text-lg'>Monthly LATAM Market Report + Growth Projections
                            (Exclusive from Ancestro)</p>
                    </div>

                    <DownloadButton />
                    <p className='pb-15 uppercase max-w-[678px] px-3 italic my-5 self-center text-center text-white/80 font-[500] font-lato text-lg'>Alternative freebie ideas: Dealer Playbook: Closing $0 Down Deals or Ancestro 2025 Market Outlook.</p>

                </div>
            </div>
        </section>

    </>)
}