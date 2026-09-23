import SunButton from "../../ui/SunButton";

const CompanyForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg p-6 md:p-10 md:space-y-1">
        {/* Step Heading */}
        <h3 className="text-[15px] font-bold font-lato text-white">STEP 08: REVIEW & PAY SUBMISSION FEE</h3>


        {/* Input Fields */}
        <div className="space-y-5 mb-2 mt-7">
            <input
                type="text" placeholder={'non-refundable loan review fee: $500 usd'}
                className={`w-full px-1 py-4 text-sm font-lato bg-transparent border-b border-white/30 text-white placeholder-white placeholder:uppercase focus:outline-none focus:ring-0 focus:border-white `}
            />
            <textarea
                type={'text'}
                placeholder={'payment required to access document upload portal.'}
                className={` w-full px-1 py-4 text-sm font-lato bg-transparent border-b border-white/30 text-white placeholder-white placeholder:uppercase focus:outline-none focus:ring-0 focus:border-white mb-1`}
            />
        </div>

        <h3 className="text-left italic text-white/90 uppercase text-[14px] mt-7">After payment, you will receive login
            credentials, to securely upload due
            diligence materials.</h3>
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
