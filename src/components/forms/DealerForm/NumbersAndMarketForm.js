import SunButton from "../../ui/SunButton";

const ContactInfoForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg p-6 md:p-10 md:space-y-1">
        {/* Step Heading */}
        <h3 className="text-[20px] font-bold font-lato text-white">STEP 03: NUMBERS & MARKET</h3>


        {/* Input Fields */}
        <div className="space-y-3 mb-2 mt-3">
            {[
                'estimated annual revenue',
                'how many solar projects do you  currently sell or install per quater?',
                'which countries/regions do you currently serve?',
            ].map((label, i, arr) => (
                <div key={i} className="flex flex-col justify-start gap-[1px]">
                    <label className="text-white/90 text-left text-[14px] uppercase">{label} </label>
                    <input
                        key={i}
                        className={`w-full px-1 py-2 text-sm font-lato bg-transparent border-b border-white/30 text-white placeholder-white placeholder:uppercase focus:outline-none focus:ring-0 focus:border-white ${i === arr.length - 1 ? 'last:mb-1' : ''}`}
                    />
                </div>
            ))}
        </div>
        <>
            <div className="uppercase font-lato text-white/90 text-[12px] text-left tracking-[2px] mt-5">do you have sales opportunities outside of your region you’d like to service through the ancestro dealer network?</div>

            <div className="flex flex-wrap gap-2 items-center py-3 mt-2">
                {['YES', 'No'].map((label, i) => (
                    <label key={i} className="flex items-center gap-2 text-[12px] text-white  uppercase tracking-[2px]">
                        <input
                            type="radio"
                            name="option"
                            className="appearance-none h-5 w-5 border border-white rounded-sm bg-transparent checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none"
                        />
                        {label}
                    </label>
                ))}
            </div>
        </>

        <div>
            <textarea placeholder="SHORT DESCRIPTION" className="px-2 py-3 text-white border border-white/20 h-[97px] w-full rounded-[10px] placeholder:text-white placeholder:text-[10px] placeholder:italic placeholder:pb-15  placeholder:px-2"/>
        </div>
        {/* NEXT Button */}
        <SunButton
            onClick={onNext}
            type="submit"
            className="w-full py-5  px-10 text-sm font-lato mt-6 text-white font-bold rounded-full overflow-hidden transition-all border border-white/30 backdrop-blur-lg"
        >
            NEXT
        </SunButton>
    </form>
);

export default ContactInfoForm;
