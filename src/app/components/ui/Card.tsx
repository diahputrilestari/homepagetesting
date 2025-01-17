import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  title: string;
  subtitle: string;
  image: StaticImageData | string;
  showProgress?: boolean;
}

const Card: React.FC<CardProps> = ({ title, subtitle, image, showProgress }) => {
  return (
    <div className="min-w-[278px] text-white rounded-lg shadow-md mt-2 mb-6 transition-transform duration-300 hover:scale-105">
      <Image src={image} alt="thumbnails" className='w-full h-48 rounded-tl-lg rounded-tr-lg' />
      <a href="#" target="_blank" rel="noopener noreferrer">
      <div className="w-full h-[114px] px-3 py-4 flex-col justify-start items-start gap-2 inline-flex">
        {showProgress && ( // Conditionally render the progress bar
          <div className="self-stretch justify-start items-center gap-2 inline-flex w-full">
            <div className="grow shrink basis-0 h-[13px] rounded-[100px] border border-[#c3d4e9] flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="w-[81px] h-[13px] bg-[#8002ff] rounded-tl-[100px] rounded-bl-[100px]" />
            </div>
            <div className="text-[#080c19] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">35%</div>
          </div>
        )}
        <div className="self-stretch text-[#080c19] text-xl font-semibold font-['Plus Jakarta Sans'] leading-[30px]">{title}</div>
        <div className="self-stretch text-[#080c19] text-xs font-normal font-['Plus Jakarta Sans']">{subtitle}</div>
      </div>
      </a>
    </div>
  );
};

export default Card;