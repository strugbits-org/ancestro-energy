import SunButton from "../../ui/SunButton";

const ProjectMaturityForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg p-6 md:p-10 md:space-y-1">
        {/* Step Heading */}
        <h3 className="text-[20px] font-bold font-lato text-white">STEP 04: MATURITY & READINESS</h3>


        {/* Input Fields */}
        <div className="flex flex-col justify-start mt-6">
            <div className="uppercase text-white/90 text-[13px] text-left font-bold">DO YOU ALREADY HAVE ANY OF THE FOLLOWING</div>
            <div className="flex flex-wrap gap-4 items-center pt-3 pr-10">

                {
                    ['SIGNED PPA', 'SIGNED LOI', 'SIGNED PURCHASE ORDER (po)', 'none yet'].map((label, i) => (
                        <label key={i} className="font-bold text-[12px] flex items-center gap-2 text-white uppercase tracking-[2px]">
                            <input
                                type="radio"
                                name="option"
                                className="appearance-none h-4 w-4 border border-white rounded-sm bg-transparent checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none"
                            />
                            {label}
                        </label>
                    ))
                }

            </div>
        </div>

        <div className="uppercase text-white/90 font-bold text-[14px] text-left mt-5">(IF SOLAR FARM)</div>
        <div className="flex flex-col justify-start mt-2 ml-5">
            <div className="uppercase font-bold text-white/90 text-[14px] text-left">DO YOU HAVE A SIGNED LAND LEASE?</div>
            <div className="flex flex-wrap gap-4 items-center pt-3 pr-10">

                {
                    ['Yes', 'No',].map((label, i) => (
                        <label key={i} className="font-bold text-[12px] flex items-center gap-2 text-white uppercase tracking-[2px]">
                            <input
                                type="radio"
                                name="option"
                                className="appearance-none h-4 w-4 border border-white rounded-sm bg-transparent checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none"
                            />
                            {label}
                        </label>
                    ))
                }

            </div>
        </div>
        <div className="flex flex-col justify-start mt-6 ml-5">
            <div className="uppercase text-white/90 text-[14px] text-left">Do you have grid connection approval?</div>
            <div className="flex flex-wrap gap-4 items-center pt-3 pr-10">

                {
                    ['Yes', 'No',].map((label, i) => (
                        <label key={i} className="text-[12px] flex items-center gap-2 text-white uppercase tracking-[2px]">
                            <input
                                type="radio"
                                name="option"
                                className="appearance-none h-4 w-4 border border-white rounded-sm bg-transparent checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none"
    //                             className="
    //   appearance-none h-4 w-4 border border-white rounded-sm 
    //   bg-transparent focus:outline-none 
    //   checked:bg-yellow-500 checked:border-yellow-500
    //   relative
    //   before:content-['✔'] before:absolute before:text-[10px] before:text-white before:inset-0 before:flex before:items-center before:justify-center
    //   before:opacity-0 checked:before:opacity-100
    // "
                            />
                            {label}
                        </label>
                    ))
                }

            </div>
        </div>

        {/* NEXT Button */}
        <SunButton
            onClick={onNext}
            type="button"
            className="w-full py-5  px-10 text-sm font-lato mt-6 text-white font-bold rounded-full overflow-hidden transition-all border border-white/30 backdrop-blur-lg"
        >
            NEXT
        </SunButton>
    </form>
);

export default ProjectMaturityForm;
