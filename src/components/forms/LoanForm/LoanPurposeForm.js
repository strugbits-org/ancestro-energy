import SunButton from "../../ui/SunButton";

const CompanyForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg p-6 md:p-10 md:space-y-1">
        {/* Step Heading */}
        <h3 className="text-[20px] font-bold font-lato text-white">STEP 03: LOAN PURPOSE</h3>


        {/* Input Fields */}
        <div className="flex flex-col justify-start mt-6">
            <div className="uppercase text-white/90 text-[14px] text-left">PROPOSED USE OF FUNDS</div>
            <div className="flex flex-wrap gap-4 items-center pt-3 pr-10">

                {
                    ['Residential portfolio', 'Commercial portfolio', '1 large commercial project', 'solar farm', 'wind farm', 'oil/gas/hydrogen'].map((label, i) => (
                        <label key={i} className="text-[12px] flex items-center gap-2 text-white uppercase tracking-[2px]">
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
        <div className="border-b border-b-white/30 w-full px-8 py-3" />
        <div className="py-3 space-y-2">
            <div className="uppercase text-white/90 text-[14px] text-left">PROJECT SUMMARY DETAIL:</div>
            <textarea placeholder="WRITE ABOUT YOUR PROJECT" className="px-2 py-3 text-white border border-white/20 h-[97px] w-full rounded-[10px] placeholder:text-white placeholder:text-[10px] placeholder:italic placeholder:pb-15  placeholder:px-2" />
        </div>
        {/* NEXT Button */}
        <SunButton
            onClick={onNext}
            type="button"
            className="w-full py-5  px-10 text-sm font-lato mt-2 text-white font-bold rounded-full overflow-hidden transition-all border border-white/30 backdrop-blur-lg"
        >
            NEXT
        </SunButton>
    </form>
);

export default CompanyForm;
