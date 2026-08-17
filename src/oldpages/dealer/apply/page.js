import ComparisonTable from '@/src/components/tables/PlanComparisonTable';
import SunButton from '@/src/components/ui/SunButton';
import DealerForm from '@/src/components/forms/DealerForm';
import LoanForm from '@/src/components/forms/LoanForm';

export default function Apply() {
    return (<>
        <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">

            {/* Background */}

            <div className="absolute inset-0 overflow-hidden z-0">
                {/* Background Video */}
                <video
                    className="w-full h-full object-cover"
                    src="/assets/dealer-apply.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
            </div>

            {/*Hero section - Main content*/}
            <div className="container-2xl mr-12 sm:mx-auto w-full text-center relative z-10 p-20">
                <div className="flex items-stretch mt-15 py-5 md:px-15 md:py-10 items-start w-full lg:max-w-[50%]">
                    <div className=" flex flex-col items-start gap-4 w-full">

                        <h1 className="flex flex-col gap-1 text-3xl md:text-4xl lg:text-5xl xl:text-6xl  font-lato font-bold text-white leading-tight text-start tracking-wide uppercase ">
                            {/* {"ONE DECISION\n ETERNAL IMPACT."} */}
                            <div className="whitespace-nowrap text-3xl md:text-4xl lg:text-5xl xl:text-6xl  font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-xl ">ONE DECISION</div>
                            <div className="whitespace-nowrap text-3xl md:text-4xl lg:text-5xl xl:text-6xl  font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-xl ">ETERNAL IMPACT</div>
                        </h1>
                        <h3 className="text-white/70 text-md font-bold text-left lg:text-center uppercase tracking-[2px]">Apply to join LATAM’s largest dealer network.</h3>

                    </div>

                </div>
                <div className='flex flex-col xl:flex-row  md:max-w-[50%] md:px-15 gap-8 items-start'> {/**/}
                    {/*DONATE*/}
                    <div className='flex flex-col gap-4 '>
                        <div className=' h-[224px] w-[341px] flex flex-col justify-around rounded-[25px] py-5 px-6 bg-gradient-to-r from-white/20 via-white/10 to-white/5 border border-white/30 backdrop-blur-lg'>
                            {
                                ['BRONZE', "SILVER", 'GOLD', 'PLATINUM'].map((el, i) => (
                                    <div key={i} className='flex justify-between'>
                                        <div className='text-white text-sm font-bold tracking-[2px]'>{el}</div>
                                        <div className='flex gap-2 flex-col'>
                                            <div className='flex gap-10'>
                                                {
                                                    Array(3).fill('/icons/tick-icon.png').map((image, ind) => (
                                                        <div key={ind} className='flex flex-col'>
                                                            <img src={image} />

                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className="border-b border-b-white/30 w-full" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <DealerForm />
                    </div>
                    {/*LOAN*/}
                    <div className='flex flex-col gap-4'>
                        <div className='h-[224px]  w-[341px] rounded-[25px] p-4 bg-gradient-to-r from-white/20 via-white/10 to-white/5 border border-white/30 backdrop-blur-lg'>
                            <h6 className="p-2 uppercase text-left text-sm font-[700] text-white tracking-[2px]">
                                CONSTRUCTION LOAN
                            </h6>
                            <div className='flex flex-col items-start'>
                                {
                                    ['1.75% origination fee', '7-10% interest rate', '$700k min loan'].map((el, i) => (
                                        <div key={i} className='flex flex-col p-2 gap-4 w-full'>
                                            <div className="border-b border-b-white/30 w-full" />
                                            <div className="text-left uppercase text-sm font-[700] text-white tracking-[2px]">{el}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        {/* <SunButton
                            redirect={'/'}
                            className="max-w-[167px] text-[15px] border-white text-base text-white "
                        >
                            LOAN APP
                        </SunButton> */}
                        <LoanForm />
                    </div>
                </div>
            </div>


        </section>

        {/*Membership Type Section*/}
        <section className='bg-black py-12'>
            <div className='w-full flex flex-col items-center justify-center mt-20'>
                <div className='w-full'>
                    <h2 className='my-2 text-center text-white font-[700] font-lato text-2xl tracking-[2px]'>Membership types</h2>
                    <p className='mt-1 mb-10 self-center text-center text-white/80 font-[500] font-lato text-md'>Choose the perfect plan for your business needs</p>
                </div>
            </div>
            <div className="max-w-[920px] mx-auto flex flex-col gap-8 [column-fill:_balance] lg:block lg:columns-2">

                <div className="active:border-yellow-400 inline-block w-[98%] mx-auto h-fit sm:h-auto sm:w-[447px] h-[289px] mb-8 break-inside-avoid rounded-lg p-4 border border-white/10 
      bg-[linear-gradient(135deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.85)_calc(50%_-_120px),rgba(255,255,255,0.2)_50%,rgba(0,0,0,0.85)_calc(50%_+_120px),rgba(0,0,0,0.85)_100%)]">
                    <div className='flex justify-between  items-center'>
                        <h6 className='text-white font-bold'>Bronze</h6>
                        <div className='flex gap-1 items-center'>
                            <h1 className='text-[32px] font-bold text-white'>$2,000</h1>
                            <h3 className='text-white text-[12px]'>/month</h3>
                        </div>
                    </div>
                    <SunButton text='yellow-600' className='w-full tracking-[2px] uppercase rounded-lg border-yellow-400 text-base text-yellow-500 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20'>Get Started</SunButton>
                    <div className='flex flex-col justify-around  w-full mt-2'>
                        {
                            [
                                'Sell solar subscriptions (PPA) in home country.',
                                'Access to Dealer Portal + CRM -(contract, proposals, lead input)',
                                'Digital Training Library ',
                                'Standard Seating at Ancestro Dealer Events'
                            ].map((el, i) => {
                                let mainText = el;
                                let extraText = null;

                                if (el.includes('-(')) {
                                    const [before, after] = el.split('-(');
                                    mainText = before.trim();
                                    extraText = `(${after.trim()}`;
                                }
                                return (
                                    <div key={i} className='flex gap-4 p-2'>
                                        <img className="h-[18px] w-[20px] sm:h-[20px] sm:w-[24px]" src={'/icons/checkmark.png'} />
                                        {!el.includes('-(') ?
                                            <div className='text-sm sm:text-base text-white/80'>{el}</div>
                                            :
                                            <div className="text-sm sm:text-base text-white/80">
                                                {mainText}{' '}
                                                {extraText && (
                                                    <span className="text-[10px] text-white">{extraText}</span>
                                                )}
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>


                <div className="active:border-yellow-400 border border-white/10  inline-block mx-auto h-fit sm:h-auto w-[98%] sm:w-[447px] h-[663px] mb-8 break-inside-avoid rounded-lg p-4 
      bg-[linear-gradient(135deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.85)_calc(50%_-_250px),rgba(255,255,255,0.2)_50%,rgba(0,0,0,0.85)_calc(50%_+_250px),rgba(0,0,0,0.85)_100%)]">
                    <div className='flex justify-between  items-center'>
                        <h6 className='text-white font-bold'>Platinum</h6>
                        <div className='flex gap-1 items-center'>
                            <h1 className='text-[32px] font-bold text-white'>$10,000</h1>
                            <h3 className='text-white text-[12px]'>/yr</h3>
                        </div>
                    </div>
                    <SunButton text='yellow-600' className='w-full tracking-[2px] uppercase rounded-lg border-yellow-400 text-base text-yellow-500 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20'>Get Started</SunButton>
                    <div className='flex flex-col justify-around  w-full mt-2'>
                        {
                            [
                                'Sell solar subscriptions (PPA) across all LATAM Countries.',
                                'Sell + build EV chargers across LATAM',
                                'Offer insurance on solar + wind farm projects',
                                'Access to Dealer Portal + CRM -(contract, proposals, lead input)',
                                'Monthly private team training with Ancestro trainers',
                                'Monthly 45-minute private strategy call for your business',
                                '10 free leads per quarter + warm referrals from Ancestro marketing partners',
                                '1 free project assignment per quarter -(pre-approved + ready-to-build)',
                                'VIP + backstage access at Ancestro Dealer Events',
                                'Featured spotlight on Ancestro social, press + YouTube',
                                'Free construction loan applications (save $500 each)',
                                'Invite-only access to equity co-development pool'
                            ].map((el, i) => {
                                let mainText = el;
                                let extraText = null;

                                if (el.includes('-(')) {
                                    const [before, after] = el.split('-(');
                                    mainText = before.trim();
                                    extraText = `(${after.trim()}`;
                                }
                                return (
                                    <div key={i} className='flex gap-4 p-2'>
                                        <img className="h-[18px] w-[20px] sm:h-[20px] sm:w-[24px]" src={'/icons/checkmark.png'} />
                                        {
                                            !el.includes('-(') ?
                                                <div className='text-[13px] sm:text-[15px] text-white/80'>{el}</div> :
                                                <div className="text-[13px] sm:text-[15px] text-white/80">
                                                    {mainText}{' '}
                                                    {extraText && (
                                                        <span className="text-[10px] text-white">{extraText}</span>
                                                    )}
                                                </div>

                                        }
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

                <div className="active:border-yellow-400 border border-white/10  inline-block h-fit sm:h-auto mx-auto w-[98%] sm:w-[447px] h-[409px] mb-8 break-inside-avoid rounded-lg p-4 
      bg-[linear-gradient(135deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.85)_calc(50%_-_150px),rgba(255,255,255,0.2)_50%,rgba(0,0,0,0.85)_calc(50%_+_150px),rgba(0,0,0,0.85)_100%)]">
                    <div className='flex justify-between  items-center'>
                        <h6 className='text-white font-bold'>Silver</h6>
                        <div className='flex gap-1 items-center'>
                            <h1 className='text-[32px] font-bold text-white'>$3,000</h1>
                            <h3 className='text-white text-[12px]'>/yr</h3>
                        </div>
                    </div>
                    <SunButton text='yellow-600' className='w-full tracking-[2px] uppercase rounded-lg border-yellow-400 text-base text-yellow-500 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20'>Get Started</SunButton>
                    <div className='flex flex-col justify-around  w-full mt-[8px]'>
                        {
                            [
                                'Sell solar subscriptions (PPA) in home country.',
                                'Sell+build  EV Chargers in home country. ',
                                'Offer Insurance on solar+wind farm projects',
                                'Access to Dealer Portal + CRM -(contract, proposals, lead input)',
                                'Digital Training Library -(Self-learning)',
                                'Preferred Seating at Ancestro Dealer Events',
                                'Listed on Ancestro “Find a Dealer” map'
                            ].map((el, i) => {
                                let mainText = el;
                                let extraText = null;

                                if (el.includes('-(')) {
                                    const [before, after] = el.split('-(');
                                    mainText = before.trim();
                                    extraText = `(${after.trim()}`;
                                }
                                return (
                                    <div key={i} className='flex gap-4 p-2'>
                                        <img className="h-[18px] w-[20px] sm:h-[20px] sm:w-[24px]" src={'/icons/checkmark.png'} />
                                        {!el.includes('-(') ?
                                            <div className='text-sm sm:text-base text-white/80'>{el}</div>
                                            :
                                            <div className="text-sm sm:text-base text-white/80">
                                                {mainText}{' '}
                                                {extraText && (
                                                    <span className="text-[10px] text-white">{extraText}</span>
                                                )}
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="active:border-yellow-400 border border-white/10  inline-block mx-auto h-fit sm:h-auto w-[98%] sm:w-[447px] h-[513px] mb-8 break-inside-avoid rounded-lg p-4 
      bg-[linear-gradient(135deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.85)_calc(50%_-_150px),rgba(255,255,255,0.2)_50%,rgba(0,0,0,0.85)_calc(50%_+_150px),rgba(0,0,0,0.85)_100%)]">
                    <div className='flex justify-between  items-center'>
                        <h6 className='text-white font-bold'>Gold</h6>
                        <div className='flex gap-1 items-center'>
                            <h1 className='text-[32px] font-bold text-white'>$5,000</h1>
                            <h3 className='text-white text-[12px]'>/yr</h3>
                        </div>
                    </div>
                    <SunButton text='yellow-600' className='w-full tracking-[2px] uppercase rounded-lg border-yellow-400 text-base text-yellow-500 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20'>Get Started</SunButton>
                    <div className='flex flex-col justify-around  w-full mt-[8px]'>
                        {
                            [
                                'Sell solar subscriptions (PPA) across all LATAM Countries.',
                                'Sell + build EV chargers across LATAM ',
                                'Offer insurance on solar + wind farm projects',
                                'Access to Dealer Portal + CRM -(contract, proposals, lead input)',
                                'Monthly private team training with Ancestro trainers ',
                                'Monthly LATAM strategy webinar (group)',
                                '5 free leads per quarter',
                                'Reserved seating at Ancestro Dealer Events',
                                'Regional recognition across Ancestro marketing + dealer map'
                            ].map((el, i) => {
                                let mainText = el;
                                let extraText = null;

                                if (el.includes('-(')) {
                                    const [before, after] = el.split('-(');
                                    mainText = before.trim();
                                    extraText = `(${after.trim()}`;
                                }
                                return (
                                    <div key={i} className='flex gap-4 p-2'>
                                        <img className="h-[18px] w-[20px] sm:h-[20px] sm:w-[24px]" src={'/icons/checkmark.png'} />
                                        {!el.includes('-(') ?
                                            <div className='text-sm sm:text-[15px] text-white/80'>{el}</div>
                                            : <div className="text-sm sm:text-[15px] text-white/80">
                                                {mainText}{' '}
                                                {extraText && (
                                                    <span className="text-[10px] text-white">{extraText}</span>
                                                )}
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>

        </section>

        {/*Dealer Membership Comparison Section*/}
        <section className='bg-black py-12'>
            <div className='w-full flex flex-col items-center justify-center mt-20'>
                <div className='w-full'>
                    <h2 className='my-2 text-center text-white font-[700] font-lato text-2xl tracking-[2px]'>Ancestro Dealer Memberships — Side-by-Side Comparison</h2>
                    <p className='mt-1 mb-10 self-center text-center text-white/80 font-[500] font-lato text-md'>Choose the perfect plan for your business needs</p>
                </div>
            </div>
            <div className="max-w-[1348px] mx-auto flex flex-wrap justify-center md:justify-end gap-4">

                {
                    ['$2,000', '$3,000', '$5,000', '$10,000'].map((el, i) => (
                        <div key={i} className="active:border-yellow-400 inline-block w-[224px] h-[145px] mb-8 break-inside-avoid rounded-lg p-3 border border-white/10 
      bg-[linear-gradient(135deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.85)_calc(50%_-_50px),rgba(255,255,255,0.2)_50%,rgba(0,0,0,0.85)_calc(50%_+_50px),rgba(0,0,0,0.85)_100%)]">
                            <div key={i} className='flex justify-between  items-center mb-3'>

                                <div className='flex gap-1 items-center'>
                                    <h1 className='text-[32px] font-bold text-white'>{el}</h1>
                                    <h3 className='text-white text-[12px]'>/month</h3>
                                </div>
                            </div>
                            <SunButton text='yellow-600' className='w-full tracking-[2px] uppercase rounded-lg border-yellow-400 text-base text-yellow-500 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20'>Get Started</SunButton>

                        </div>
                    ))}

            </div>
            <ComparisonTable />
        </section>

    </>)
}