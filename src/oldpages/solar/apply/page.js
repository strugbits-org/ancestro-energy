import ClockIcon from '@/public/icons/clock';
import MultiStepForm from '@/src/components/forms/ApplySolarForm';

export default function Apply() {
    return (<>
        <section className="relative flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            {/* Background */}
            {/* <div className="absolute inset-0">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
                            url('/images/solar-apply-hero.png')
                            `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </div> */}
            <div className="bg-slideshow-solar-apply">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/*Hero section - Main content*/}
            <div className="container-2xl mx-auto w-[80%] text-center relative z-10 pt-30 md:py-20 ">
                <div className="flex flex-col xl:flex-row items-stretch py-5 md:p-20 space-y-10 md:space-y-7">
                    {/* Left Side: Heading */}
                    <div className="flex-3 flex flex-col items-start justify-center gap-4 w-full xl:w-[45%]">
                        <div className="px-4 py-3 bg-yellow-400 flex gap-2 rounded-[17px]">
                            {/* <img src={'/icons/clock.png'} /> */}
                            <ClockIcon height={28} width={28}/>
                            <div className="font-lato text-xl font-bold tracking-[2px]">IT WILL TAKE ONLY 5 MINUTES</div>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-6 xl:mb-0 font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-6xl mx-auto">
                            FIND OUT IF YOUR PROPERTY QUALIFIES.
                        </h1>

                    </div>

                    {/* Right Side: Form*/}
                    <div className="flex-2">
                        <MultiStepForm />
                    </div>
                </div>
            </div>

        </section>

    </>)
}