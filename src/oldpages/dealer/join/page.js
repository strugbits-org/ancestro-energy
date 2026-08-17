import LatinAmericaMap from "@/src/components/map";
import SunButton from "@/src/components/ui/SunButton";

export default function Join() {

    return (<div className="min-h-screen">

        {/*Hero Section*/}
        <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            {/* Background */}
            <div className="absolute inset-0 min-h-[1200px]">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)),
                            url('/images/map-hero.png')
                            `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </div>


            {/*Hero section - Main content*/}
            <div className="container-2xl mx-auto px-[10px] md:px-[55px] text-center relative z-10 py-30 md:py-20">
                <div className="w-full mx-auto flex flex-col xl:flex-row gap-25 items-center p-2 md:p-10">
                    {/* Left Side: Heading + MAP */}
                    <div className="w-[50%] flex flex-col items-start justify-center gap-4 w-full xl:w-[45%]">
                        <h1 className="w-full text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-6xl mx-auto">
                            Join the largest solar financing platform in Latin America
                        </h1>
                        <div className="flex flex-col gap-3 md:gap-0 md:flex-row  mt-4">
                            <div className="flex justify-start  w-full xl:w-[176px]"><SunButton redirect={'/learn'} className="text-base border-white/90 text-base text-white/90 ">LEARN MORE</SunButton></div>
                            <div className="flex justify-start  w-full xl:w-[340px]"><SunButton redirect={'/solar/apply'} className="text-base border-yellow-300 text-base text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20">APPLY NOW — JOIN THE SOLAR TRIBE</SunButton></div>
                        </div>
                        <div className="w-full p-8">
                            <LatinAmericaMap/>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-[87%] md:w-[50%] min-h-[300px] md:min-h-[500px] max-h-[664px] mr-auto sm:mr-[1px]">
                        <div className="w-full h-full flex justify-center overflow-hidden relative rounded-[5%]">
                            <img
                                src="/images/map-hero-video.png"
                                alt="solar"
                                className="w-full h-full object-cover object-center scale-[1.6] md:scale-[1.35]"
                            />
                        </div>
                    </div>


                </div>
            </div>

        </section>

    </div>);
}
