import SunButton from "../../ui/SunButton";

const CompanyForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg p-6 md:p-10 md:space-y-1">
        {/* Step Heading */}
        <h3 className="mb-5 text-[15px] font-bold font-lato text-white">STEP 07: WHY SHOULD WE FUND YOU?</h3>

        <div className="space-y-2">
            <div className="font-bold uppercase text-white/90 text-[14px] text-left">please explain why your company is a
                trustworthy borrower and why this
                project is finance-worthy:</div>
            <textarea placeholder="WRITE IN 1000 CHARACTERS" className="px-2 py-3 text-white border border-white/20 h-[97px] w-full rounded-[10px] placeholder:text-white placeholder:text-[10px] placeholder:italic placeholder:pb-15  placeholder:px-2" />
        </div>

        {/* Input Fields */}
        <div className="space-y-5 mb-2 mt-8">
            {['Total loan amount requested (usd):'].map((placeholder, i, arr) => (
                <input
                    key={i}
                    type={placeholder === 'EMAIL' ? 'email' : placeholder === 'PHONE NUMBER' ? 'tel' : 'text'}
                    placeholder={placeholder}
                    className={`w-full px-1 py-4 text-sm font-lato bg-transparent border-b border-white/30 text-white placeholder-white placeholder:uppercase focus:outline-none focus:ring-0 focus:border-white ${i === arr.length - 1 ? 'last:mb-1' : ''}`}
                />
            ))}
        </div>

        {/* Input Fields */}
        <div className="flex flex-col justify-start mt-6">
            <div className="uppercase text-white/90 text-[14px] text-left">Are you building the project yourself?</div>
            <div className="flex flex-wrap gap-4 items-center pt-3 pr-10">

                {
                    ['Yes', 'No', 'gold'].map((label, i) => (
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
        <div>
            <div className="italic uppercase text-white/90 text-[14px] text-left mt-4 mb-2">(If no: Who is building it?)</div>
            <textarea placeholder="WRITE ABOUT YOUR PROJECT" className="px-2 py-3 text-white border border-white/20 h-[97px] w-full rounded-[10px] placeholder:text-white placeholder:text-[10px] placeholder:italic placeholder:pb-15  placeholder:px-2" />
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

export default CompanyForm;
