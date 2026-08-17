'use client'
import { useState, useRef, useEffect } from 'react';

const CarouselComponent = ({ variant = "default" }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const carouselRef = useRef(null);

    const slides = [
        {
            title:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            name: 'Michael  Grants',
            img: '/images/carousel-avatar.png',
            desc: 'CEO of Apples and Oranges',
            stars: 5,
        },
    ];

    const allSlides = slides.flatMap(item => Array(12).fill(item));

    useEffect(() => {
        const updatePages = () => {
            if (carouselRef.current) {
                const carousel = carouselRef.current;
                const totalWidth = carousel.scrollWidth;
                const viewportWidth = carousel.offsetWidth;
                setPageCount(Math.ceil(totalWidth / viewportWidth));
            }
        };

        updatePages();
        window.addEventListener('resize', updatePages);
        return () => window.removeEventListener('resize', updatePages);
    }, [allSlides.length]);

    const scrollToSlide = (index) => {
        setActiveSlide(index);
        const carousel = carouselRef.current;
        if (carousel) {
            const viewportWidth = carousel.offsetWidth;
            carousel.scrollTo({
                left: index * viewportWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="w-full overflow-hidden relative pb-15 mt-5 border-none">
            {/* Left fade - Large Screens */}
            <div className="hidden md:block pointer-events-none absolute top-0 left-0 h-full w-[250px] bg-gradient-to-r from-black to-transparent z-10" />
            {/* Right fade - Large Screens */}
            <div className="hidden md:block pointer-events-none absolute top-0 right-0 h-full w-[250px] bg-gradient-to-l from-black to-transparent z-10" />

            {/* Left fade - Large Screens */}
            <div className="block md:hidden pointer-events-none absolute top-0 left-0 h-full w-[50px] bg-gradient-to-r from-black to-transparent z-10" />
            {/* Right fade - Large Screens */}
            <div className="block md:hidden pointer-events-none absolute top-0 right-0 h-full w-[50px] bg-gradient-to-l from-black to-transparent z-10" />

            <ul
                ref={carouselRef}
                className="mb-7 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide w-screen -ml-8 px-8"
            >
                {allSlides.map((slide, index) => (
                    <li
                        key={index}
                        className="flex flex-col px-5 py-4 justify-between border border-gray-200/20 min-h-[256px] min-w-[90%] bg-black/80 sm:min-w-[50%] md:min-w-[40%] lg:min-w-[30%] xl:min-w-[27%] snap-start relative overflow-hidden rounded-2xl space-y-4 md:space-y-7"
                    >
                        <div className="w-full text-white/80 transition-transform duration-500">
                            {slide.title}
                            {
                                variant !== 'default' && <>
                                    <ul className='list-disc ml-4'>
                                        <li>Revenue ↑ 55%</li>
                                        <li>Close rate ↑ 37%</li>
                                    </ul>
                                </>
                            }
                        </div>
                        <div className="flex justify-between items-center gap-2 flex-wrap">
                            <div className="flex gap-3">
                                <img src={slide.img} />
                                <div className="flex-col">
                                    <h4 className="text-white/80">{slide.name}</h4>
                                    <span className="text-white/80">{slide.desc}</span>
                                </div>
                            </div>
                            <div className="flex flex-row h-[28px] px-1 w-fit bg-white/30 rounded-full gap-[2px] sm:gap-1 items-center justify-center">
                                {Array(slide.stars)
                                    .fill(1)
                                    .map((star, i) => (
                                        <img key={i} src={'/icons/star-rating.png'} className='w-2 h-2 sm:w-2 sm:h-3 md:w-3 md:h-3 lg:w-auto lg:h-auto' />
                                    ))}
                            </div>
                        </div>

                        <div className="text-white mt-2 underline">Read More</div>
                    </li>
                ))}
            </ul>

            {/* Dots Navigation */}
            {/* <div className="flex justify-center gap-2 mt-4">
                {Array(pageCount)
                    .fill(null)
                    .map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${activeSlide === index ? 'bg-yellow-500' : 'bg-gray-600'
                                }`}
                        />
                    ))}
            </div> */}
        </div>
    );
};

export default CarouselComponent;
