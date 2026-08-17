import Image from 'next/image';
// import logo from "@/src/assets/logo.png";

export default function Footer() {
  const gradientStyle = {
    background: 'linear-gradient(129.65deg, #C4952D -68.94%, #AE7F2A -37.03%, #F5DC7B 0.2%, #AE7F2A 189.02%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  return (
    <footer className="bg-black text-white border-t border-[#C4952D]">
      {/* Main Footer Content */}
      <div className="container-2xl mx-auto px-[55px] py-12">
        {/* Footer Top Section */}
        <div className="text-center mb-12">
          {/* Ancestro Logo */}
          <div className="inline-block mb-8">
            <Image src={'/assets/Logo2.png'} alt="Logo" width={314} height={111} />
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="mx-auto xl:ml-20 px-10 sm:px-20 md:px-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 2xl:gap-12 mb-1 xl:mb-12">
          {/* Solutions Column */}
          <div>
            <h3
              className="font-bold text-sm mb-6 tracking-wider uppercase"
              style={gradientStyle}
            >
              Customers
            </h3>
            <ul className="list-disc  space-y-3 mx-auto">
              <li><a href="#" className="2xl:whitespace-nowrap text-[10px] sm:text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">$0 Down Solar Subscriptions</a></li>
              <li><a href="#" className="2xl:whitespace-nowrap text-[10px] sm:text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">Customer Support & Help Center</a></li>
              <li><a href="#" className="2xl:whitespace-nowrap text-[10px] sm:text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">Customer Portal Access</a></li>
              <li><a href="#" className=" text-[10px] sm:text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">EV Charging & Storage Applications</a></li>
            </ul>
          </div>

          {/* Dealers Column */}
          <div>
            <h3
              className="font-bold text-sm mb-6 tracking-wider uppercase"
              style={gradientStyle}
            >
              Dealers
            </h3>
            <ul className="list-disc  space-y-3 mx-auto">
              <li><a href="#" className="2xl:whitespace-nowrap text-[10px] sm:text-sm  hover:text-yellow-300 transition-colors tracking-wider uppercase">Join Dealer Network</a></li>
              <li><a href="#" className="2xl:whitespace-nowrap text-[10px] sm:text-sm  hover:text-yellow-300 transition-colors tracking-wider uppercase">Dealer Portal Login</a></li>
              <li><a href="#" className="2xl:whitespace-nowrap text-[10px] sm:text-sm  hover:text-yellow-300 transition-colors tracking-wider uppercase">Construction Loan</a></li>
              <li><a href="#" className="2xl:whitespace-nowrap text-[10px] sm:text-sm  hover:text-yellow-300 transition-colors tracking-wider uppercase">Dealer Case Studies</a></li>
            </ul>
          </div>

          {/* Investors Column */}
          <div>
            <h3
              className="font-bold text-sm mb-6 tracking-wider uppercase"
              style={gradientStyle}
            >
              Investors
            </h3>
            <ul className="list-disc  space-y-3 mx-auto">
              <li><a href="#" className="2xl:whitespace-nowrap text-[10px] sm:text-sm  hover:text-yellow-300 transition-colors tracking-wider uppercase">Why Invest With Ancestro Capital</a></li>
              <li><a href="#" className="2xl:whitespace-nowrap text-[10px] sm:text-sm  hover:text-yellow-300 transition-colors tracking-wider uppercase">Investor Portal Login</a></li>
              <li><a href="#" className="2xl:whitespace-nowrap text-[10px] sm:text-sm  hover:text-yellow-300 transition-colors tracking-wider uppercase">Market Reports & Projections</a></li>
              <li><a href="#" className="2xl:whitespace-nowrap text-[10px] sm:text-sm  hover:text-yellow-300 transition-colors tracking-wider uppercase">ESG / Carbon Credits</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3
              className="font-bold text-sm mb-6 tracking-wider uppercase"
              style={gradientStyle}
            >
              Company
            </h3>
            <ul className="list-disc  space-y-3 mx-auto">
              <li><a href="#" className="2xl:whitespace-nowrap text-[10px] sm:text-sm  hover:text-yellow-300 transition-colors tracking-wider uppercase">About Ancestro</a></li>
              <li><a href="#" className="2xl:whitespace-nowrap text-[10px] sm:text-sm  hover:text-yellow-300 transition-colors tracking-wider uppercase">Press & Media</a></li>
              <li><a href="#" className="2xl:whitespace-nowrap text-[10px] sm:text-sm  hover:text-yellow-300 transition-colors tracking-wider uppercase">Careers</a></li>
              <li><a href="#" className="2xl:whitespace-nowrap text-[10px] sm:text-sm  hover:text-yellow-300 transition-colors tracking-wider uppercase">Donate</a></li>
            </ul>
          </div>
        </div>

        {/* Powered by Section */}
        <div className="text-center mb-8">
          <p className="text-sm font-bold mt-10 mb-7 md:my-6 tracking-wider uppercase text-white">
            Powered by Ancestro Ecosystem
          </p>

          {/* Partner Logos */}
          <div className="w-fit mx-auto flex flex-wrap justify-between items-center gap-2 md:gap-4 px-15 py-6 bg-gradient-to-r from-white/36 to-gray-500/0 border border-white/30 backdrop-blur-sm rounded-lg mb-6">
            <img
                src={`/images/Ancestro-Capital.png`}
                alt={`flag`}
                className="w-[324px] h-[40px] rounded-sm  shadow"
              />
              <img
                src={`/images/Ancestro-Charge.png`}
                alt={`flag`}
                className="w-[244px] h-[40px] rounded-sm  shadow"
              />
              <img
                src={`/images/AncestroProject.png`}
                alt={`flag`}
                className="w-[235px] h-[40px] rounded-sm  shadow"
              />
              <img
                src={`/images/Ancestro-Sustainability.png`}
                alt={` flag`}
                className="w-[215px] h-[40px] rounded-sm  shadow"
              />
              <img
                src={`/images/Ancestro-Foundation.png`}
                alt={`flag`}
                className="w-[164px] h-[40px] rounded-sm shadow"
              />
          </div>

          {/* Country Flags */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
            {[
              "argentina",
              "belize",
              "bolivia",
              "brazil",
              "chile",
              "colombia",
              "costa rica",
              "dominican republic",
              "ecuador",
              "guatemala",
              "honduras",
              "mexico",
              "nicaragua",
              "panama",
              "paraguay",
              "peru",
              "el salvador",
              "uruguay",
            ].map((country, i) => (
              <img
                key={i}
                src={`/images/${country}.png`}
                alt={`${country} flag`}
                className="w-17 h-10 rounded-sm object-cover shadow"
              />
            ))}
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="py-4"
        style={{
          background: 'linear-gradient(129.65deg, #C4952D -68.94%, #AE7F2A -37.03%, #F5DC7B 0.2%, #AE7F2A 189.02%)'
        }}
      >
        <div className="container-2xl mx-auto px-20 sm:px-30 md:px-40">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-sm font-bold tracking-wider uppercase text-black">
              <span>Legal:</span>
              <a href="#" className="hover:underline">Privacy</a>
              <span className="text-black">|</span>
              <a href="#" className="hover:underline">Terms</a>
              <span className="text-black">|</span>
              <a href="#" className="hover:underline">Cookies</a>
              <span className="text-black">|</span>
              <a href="#" className="hover:underline">Compliance</a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col lg:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm font-bold tracking-wider uppercase text-black">
              <a href="mailto:info@ancestroenergy.com" className="flex items-center gap-2 hover:underline">
                <span className='w-fit h-fit'><img src={'/icons/mail.png'} className='h-full w-full'/></span> 
                <div className='underline'>info@ancestroenergy.com</div>
              </a>
              <div className="flex items-center space-x-4">
                <span className='w-fit h-fit'><img src={'/icons/phone.png'} className='h-full w-full'/></span>
                <div className='flex flex-col md:flex-row gap-2'>
                <div>+1 (555) 123-45675</div>
                <span>+44 20 7946 0958</span>
                </div>
              </div>
              {/* Social Icons */}
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded hover:opacity-70 transition-opacity">
                  <img className='h-full w-full' src={'/icons/linkedin.png'} />
                </a>
                <a href="#" className="w-10 h-10 rounded hover:opacity-70 transition-opacity">
                  <img className='h-full w-full' src={'/icons/youtube.png'} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
