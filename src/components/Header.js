'use client';

import { useState } from 'react';
import Image from 'next/image';
import logo from "@/public/assets/logo.png";
import SunButton from './ui/SunButton';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(false);
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/*Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0.8;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutToRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0.8;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-slide-in {
          animation: slideInFromRight 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-slide-out {
          animation: slideOutToRight 0.3s cubic-bezier(0.55, 0.06, 0.68, 0.19) forwards;
        }
      `}</style>

      <header className="absolute top-0 left-0 right-0 z-50 py-10">
        {/* Navigation Bar */}
        <nav className="container-2xl mx-auto px-[25px] md:px-[55px] py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image src={logo} alt="Logo" />
          </div>

          {/* Right Side Controls */}
          {!isMenuOpen && <div className="flex items-center gap-6 [@media(min-width:360px)]:gap-3">
            {/* Sign In Button */}
            <SunButton
              className="[@media(min-width:360px)]:text-[10px] [@media(min-width:360px)]:whitespace-nowrap sm:text-base md:text-lg lg:text-[40px]"
              textClassName='sm:text-base md:text-lg lg:text-[17px]'
            >
              SIGN IN
            </SunButton>

            {/* Hamburger Menu Button */}
            <button
              type='button'
              onClick={handleToggleMenu}
              className="group relative p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white focus:outline-none transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:scale-110 hover:shadow-xl hover:shadow-white/10"
            >
              <svg className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            </button>
          </div>}
        </nav>

        {/* Sidebar Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[9999]">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-pointer animate-fade-in"
              onClick={handleCloseMenu}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100vw',
                height: '100vh'
              }}
            />

            {/* Sidebar with slide-in animation */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 w-80 bg-white/10 backdrop-blur-xl border-l border-white/20 shadow-2xl rounded-tl-[20px] rounded-bl-[20px] animate-slide-in"
              style={{
                top: '2.5rem',
                bottom: '2.5rem',
                maxHeight: 'calc(100vh - 5rem)',
                
                zIndex: 10000
              }}
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-end p-6">
                <button
                  type='button'
                  onClick={handleCloseMenu}
                  className="group p-2 rounded-full text-white  "
                >
                  <svg className="w-10 h-10 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 mt-2 flex flex-col justify-around h-[75%] md:justify-center gap-4 md:gap-8  overflow-y-auto  max-h-[95%]">
                {[
                  { title: 'HOME', link: '/' },
                  { title: 'LEARN', link: '/learn' },
                  { title: 'CASE STUDIES', link: '/dealer/casestudies' },
                  { title: 'APPLY', link: '/dealer/apply' },
                  { title: 'DONATE', link: '/donate' },
                  { title: 'EARN', link: '/solar/earn' }
                ].map((path, i) => (
                  <Link key={i} onClick={() => setIsMenuOpen(false)} href={path.link} className='block w-full text-left px-2 py-1 md:px-4 md:py-3 text-white font-medium  tracking-wider uppercase rounded-lg  relative overflow-hidden hover:cursor-pointer'>
                    <span className="relative z-10 text-lg md:text-2xl transition-transform duration-300 group-hover:scale-105">{path.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}