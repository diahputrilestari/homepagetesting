"use client"
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

import banner from "../../assets/images/banner.png"

interface HeroSectionProps {
  isLogin: boolean;
}

interface Slide {
  id: number;
  image: StaticImageData | string;
  title: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: banner,
    title: 'Bootcamp Intensif 1 Bulan'
  },
  {
    id: 2,
    image: banner,
    title: 'Bootcamp Intensif 1 Bulan'
  },
  {
    id: 3,
    image: banner,
    title: 'Bootcamp Intensif 1 Bulan'
  },
];

const HeroSection: React.FC<HeroSectionProps> = ({ isLogin }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 9000);

    return () => clearInterval(timer); // Hapus interval saat unmount
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section>
      <main className="container mx-auto px-4 max-w-7xl">

      {isLogin ? (
        <div className=''></div>
      ) : (
        <div className="w-full h-auto p-2.5 flex flex-col md:flex-row justify-center items-center gap-[21px]">
          <div className="text-black text-base font-normal font-['Plus Jakarta Sans'] text-center md:text-left">
            Berlangganan sekarang juga dan pilih video apapun dan pelajari kapanpun.
          </div>
          <a href="#pricing" className="h-[50px] p-[15px] bg-[#3d81db] rounded-[10px] flex justify-center items-center gap-2.5 md:mt-0">
            <button className="text-center text-white text-base font-semibold font-['Plus Jakarta Sans']">
              Bayar 99rb, akses semua course
            </button>
          </a>
        </div>
        )}
        
        <div className="relative w-full h-[300px] md:h-[490px] overflow-hidden">
          {/* Slide */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="min-w-full relative">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover h-[300px] md:h-[459px] p-2.5 rounded-[20px] justify-center items-center gap-2.5 inline-flex"
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-[#652f8e]' : 'bg-[#d9d9d9]'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;