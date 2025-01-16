import React from 'react';
import logoFooter from '../../assets/images/logoFooter.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#652f8e] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4 max-w-7xl">
        <div className="flex flex-col items-start mb-4 md:mb-0">
          <Image className="w-[204px] h-[204px]" src={logoFooter} alt="Ioda Academy Logo" />
        </div>
        <div className="flex flex-col justify-start items-start gap-4 mt-8 md:mt-0">
          <div className="text-center text-white text-base font-semibold font-['Poppins']">Iodacademy.id</div>
          <div className="flex flex-col justify-start items-start gap-2.5">
            <div className="text-center text-white text-base font-normal font-['Poppins']">Video Course</div>
            <div className="text-center text-white text-base font-normal font-['Poppins']">Bootcamp</div>
            <div className="text-center text-white text-base font-normal font-['Poppins']">For Business</div>
            <div className="text-center text-white text-base font-normal font-['Poppins']">Latihan Project</div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-4 mt-8 md:mt-0">
          <div className="text-center text-white text-base font-semibold font-['Poppins']">Lainnya</div>
          <div className="flex flex-col justify-start items-start gap-2.5">
            <div className="text-center text-white text-base font-normal font-['Poppins']">Syarat dan ketentuan</div>
            <div className="text-center text-white text-base font-normal font-['Poppins']">Ketentuan Privasi</div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;