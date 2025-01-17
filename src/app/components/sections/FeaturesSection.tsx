import React from 'react';
// import Image from 'next/image';
import Card from '../ui/Card';
import Thumbnails from '../../assets/images/Thumbnails.png';
import Thumbnails2 from '../../assets/images/Thumbnails2.png';
import Thumbnails3 from '../../assets/images/Thumbnails3.png';
import Thumbnails4 from '../../assets/images/Thumbnails4.png';
import Thumbnails5 from '../../assets/images/Thumbnails5.png';
import Thumbnails6 from '../../assets/images/Thumbnails6.png';
import Thumbnails7 from '../../assets/images/Thumbnails7.png';
import Thumbnails8 from '../../assets/images/Thumbnails8.png';

interface FeatureSectionProps {
  isLogin: boolean;
}
const FeaturesSection: React.FC<FeatureSectionProps> = ({isLogin}) => {
  const cardDataVideo = [
    { title: "Sales Fundamental", subtitle: "12 Video + Soal Latihan", image: Thumbnails },
    { title: "Service Excellent", subtitle: "17 Video + Soal Latihan", image: Thumbnails2 },
    { title: "Introduction Sales B2B", subtitle: "10 Video + Soal Latihan", image: Thumbnails3 },
    { title: "Account Profiling", subtitle: "8 Video + Soal Latihan", image: Thumbnails4 },
    { title: "Sales Fundamental", subtitle: "12 Video + Soal Latihan", image: Thumbnails },
    { title: "Service Excellent", subtitle: "17 Video + Soal Latihan", image: Thumbnails2 },
    { title: "Introduction Sales B2B", subtitle: "10 Video + Soal Latihan", image: Thumbnails3 },
    { title: "Account Profiling", subtitle: "8 Video + Soal Latihan", image: Thumbnails4 },
  ];

  const cardDataKelas = [
    { title: "Sales Fundamental", subtitle: "12 Video + Soal Latihan", image: Thumbnails5 },
    { title: "Service Excellent", subtitle: "17 Video + Soal Latihan", image: Thumbnails6 },
    { title: "Introduction Sales B2B", subtitle: "10 Video + Soal Latihan", image: Thumbnails7 },
    { title: "Account Profiling", subtitle: "8 Video + Soal Latihan", image: Thumbnails8 },
    { title: "Sales Fundamental", subtitle: "12 Video + Soal Latihan", image: Thumbnails },
    { title: "Service Excellent", subtitle: "17 Video + Soal Latihan", image: Thumbnails2 },
    { title: "Introduction Sales B2B", subtitle: "10 Video + Soal Latihan", image: Thumbnails3 },
    { title: "Account Profiling", subtitle: "8 Video + Soal Latihan", image: Thumbnails4 },
  ];

  
    const buttons = [
      
        { text: "Business Development", bgColor: "bg-[#652f8e]", textColor: "text-white", hoverBgColor: "hover:bg-[#4a1f6e]", hoverTextColor: "group-hover:text-white" },
        { text: "Digital Marketing", bgColor: "bg-white", textColor: "text-[#652f8e]", borderColor: "border-[#652f8e]", hoverBgColor: "hover:bg-[#652f8e]", hoverTextColor: "group-hover:text-white" },
        { text: "Human Resource", bgColor: "bg-white", textColor: "text-[#652f8e]", borderColor: "border-[#652f8e]", hoverBgColor: "hover:bg-[#652f8e]", hoverTextColor: "group-hover:text-white" },
        { text: "Product Management", bgColor: "bg-white", textColor: "text-[#652f8e]", borderColor: "border-[#652f8e]", hoverBgColor: "hover:bg-[#652f8e]", hoverTextColor: "group-hover:text-white" },
        { text: "Tax & Accounting", bgColor: "bg-white", textColor: "text-[#652f8e]", borderColor: "border-[#652f8e]", hoverBgColor: "hover:bg-[#652f8e]", hoverTextColor: "group-hover:text-white" }
    ];
  return (
    <section className="py-8 container mx-auto px-4 max-w-7xl">
      <div className="container mx-auto">

      {isLogin ? (
        <>
        <div className="text-black text-lg md:text-4xl font-bold font-['Plus Jakarta Sans'] md:leading-[54px] md:mb-6 ">
        Video yang Pernah Kamu Pelajari
      </div>

        <div className="overflow-x-auto scrollbar-hide py-8 md:mb-8">
          <div className="flex gap-4">
            {cardDataVideo.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                image={card.image}
                showProgress={true}
              />
            ))}
          </div>
        </div>
        </>
      ) : (
       <>
        <div className="text-black text-xl md:text-4xl font-bold font-['Plus Jakarta Sans'] md:leading-[54px] leading-[30px]">
          Akses Video Gratis, Mulai Belajar Hari Ini
        </div>

        <div className="overflow-x-auto scrollbar-hide py-8 md:mb-8">
          <div className="flex gap-4">
            {cardDataVideo.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                image={card.image}
              />
            ))}
          </div>
        </div>
       </>
      )}

        <div className="text-black text-lg md:text-4xl font-bold font-['Plus Jakarta Sans'] md:leading-[54px] mb-4 md:mb-8">
          Kelas yang paling banyak diminati
        </div>

        <div className="flex overflow-x-auto scrollbar-hide gap-4 mb-8">
        {buttons.map((button, index) => (
                        <div key={index} className={`group flex-shrink-0 h-[51px] px-5 py-[15px] ${button.bgColor} ${button.borderColor ? `border-2 ${button.borderColor}` : ''} rounded-[100px] flex justify-center items-center gap-2.5 ${button.hoverBgColor}`}>
                            <div className={`text-sm font-${button.textColor === 'text-white' ? 'bold' : 'normal'} ${button.textColor} ${button.hoverTextColor}`}>{button.text}</div>
                        </div>
                    ))}
        </div>

        <div className="overflow-x-auto scrollbar-hide md:mb-16">
          <div className="flex gap-4">
            {cardDataKelas.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;