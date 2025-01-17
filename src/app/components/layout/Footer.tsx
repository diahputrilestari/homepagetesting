import React from 'react';
import logoFooter from '../../assets/images/logoFooter.png';
import Image from 'next/image';
import tiktok from "../../assets/images/tiktok.png"
import linkedIn from "../../assets/images/linkedIn.png"
import x from "../../assets/images/x.png"
import instagram from "../../assets/images/instagram.png"

const Footer = () => {
  return (
    <footer className="bg-[#652f8e] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4 max-w-7xl">
        <div className="flex flex-col items-start mb-4 md:mb-0">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image className="w-[99px] h-[99px] md:w-[204px] md:h-[204px] transition-transform duration-300 hover:scale-110" src={logoFooter} alt="Ioda Academy Logo" />
          </a>
        </div>
        
        <div className="h-[145px] px-[15px] justify-start items-center gap-[50px] inline-flex">
            <div className="flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="text-center text-white text-base md:font-semibold font-bold md:font-['Poppins'] font-['Plus Jakarta Sans'] leading-normal">Iodacademy.id</div>
                <div className="flex-col justify-start items-start gap-[5px] flex">
                    <div className="text-center text-white text-base font-normal md:font-['Poppins'] font-['Plus Jakarta Sans'] leading-normal hover:font-bold">
                      <a href="#" target="_blank" rel="noopener noreferrer">Video Course</a>
                    </div>
                    <div className="text-center text-white text-base font-normal md:font-['Poppins'] font-['Plus Jakarta Sans'] leading-normal hover:font-bold">
                      <a href="#" target="_blank" rel="noopener noreferrer">Bootcamp</a>
                    </div>
                    <div className="text-center text-white text-base font-normal md:font-['Poppins'] font-['Plus Jakarta Sans'] leading-normal hover:font-bold">
                      <a href="#" target="_blank" rel="noopener noreferrer">For Business</a>
                    </div>
                    <div className="justify-start items-center gap-2 inline-flex">
                        <div className="text-center text-white text-base font-normal md:font-['Poppins'] font-['Plus Jakarta Sans'] leading-normal hover:font-bold">
                          <a href="#" target="_blank" rel="noopener noreferrer">Latihan Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      

        <div className="md:w-[479px] h-[138px] px-[15px] flex-col justify-start items-start gap-[22px] inline-flex">
            <div className="justify-start items-center gap-[50px] inline-flex">
                <div className="flex-col justify-center items-start gap-2.5 inline-flex">
                    <div className="text-center text-white text-base font-semibold font-['Plus Jakarta Sans'] md:font-['Poppins'] leading-normal">Lainnya</div>
                    <div className="flex-col justify-start items-start gap-[5px] flex">
                        <div className="text-center text-white text-base font-normal font-['Plus Jakarta Sans'] md:font-['Poppins'] leading-normal hover:font-bold">
                          <a href="#" target="_blank" rel="noopener noreferrer">Syarat dan ketentuan</a>
                        </div>
                        <div className="text-center text-white text-base font-normal font-['Plus Jakarta Sans'] md:font-['Poppins'] leading-normal hover:font-bold">
                          <a href="#" target="_blank" rel="noopener noreferrer">Ketentuan Privasi</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[156px] justify-between items-start inline-flex">
              <a href="https://www.tiktok.com/@ioda_academy" target="_blank" rel="noopener noreferrer">
                <Image className="w-7 h-[29px] transition-transform duration-300 hover:scale-110" src={tiktok} alt='tiktok ioda academy'/>
              </a>
              <a href="https://www.linkedin.com/company/ioda-academy" target="_blank" rel="noopener noreferrer">
              <Image className="w-[29px] h-[29px] transition-transform duration-300 hover:scale-110" src={linkedIn} alt="linkedIn ioda academy"/>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
              <Image className="w-[25px] h-[25px] transition-transform duration-300 hover:scale-110" src={x} alt="x ioda academy"/>
              </a>
              <a href="https://www.instagram.com/ioda_academy" target="_blank" rel="noopener noreferrer">
              <Image className="w-[29px] h-[29px] transition-transform duration-300 hover:scale-110" src={instagram} alt="instagram ioda academy"/>
              </a>
            </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;