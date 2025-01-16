
import React from 'react';
import { BsCheck2Circle } from "react-icons/bs";

interface PricingCardProps {
  title: string;
  duration: string;
  price: string;
  features: string[];
  bgColor: string;
  textColor: string;
  highlight: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, duration, price, features, bgColor, textColor, highlight }) => (
  <div className={`w-full lg:w-1/3 flex flex-col items-center ${highlight ? 'relative' : ''}`}>
      {highlight && <div className="w-full max-w-sm h-[583px] p-2.5 bg-[#ffcc00] rounded-[10px] flex-col justify-center items-start inline-flex">
          <div className="w-full h-[563px] rounded-[20px] flex-col justify-start items-start flex overflow-hidden">
              <div className="w-full h-[220px] pb-5 bg-[#652f8e] flex-col justify-start items-center gap-3 flex">
                  <div className="w-full h-[47px] flex-col justify-start items-end gap-2.5 flex">
                      <div className="p-2.5 bg-[#ff4423] rounded-tr-[20px] justify-center items-center gap-2.5 inline-flex">
                          <div className="w-6 h-6 relative overflow-hidden" />
                          <div className="text-center text-white text-lg font-bold leading-[27px]">
                              Paling banyak dibeli
                          </div>
                      </div>
                  </div>
                  <div className="w-full h-[68px] flex-col justify-start items-start gap-[5px] flex">
                      <div className="w-full text-center text-white text-lg font-normal leading-[27px]">
                          {title}
                      </div>
                      <div className="w-full text-center text-white text-2xl font-bold leading-9">
                          {duration}
                      </div>
                  </div>
                  <div className="w-full text-center text-white text-[40px] font-bold leading-[60px]">
                      {price}
                  </div>
              </div>
              <div className="w-full h-[392px] bg-white flex-col justify-start items-start gap-[30px] flex">
                  <div className="w-full h-[172px] px-5 py-10 flex-col justify-start items-start gap-2.5 flex">
                      {features.map((feature, index) => (
                          <div key={index} className="flex justify-start items-center gap-[5px]">
                              <BsCheck2Circle size="28"/>
                              <div className="text-black text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">{feature}</div>
                          </div>
                      ))}
                  </div>
                  <div className="w-full h-[100px] px-[30px] py-5 flex-col justify-start items-start gap-2.5 flex">
                      <div className="w-full h-[60px] px-3 py-2 rounded-xl border border-[#3d81db] justify-center items-center gap-2.5 inline-flex">
                          <div className="text-center text-[#3d81db] text-base font-semibold">Coba Sekarang</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>}
      {!highlight && <div className={`w-full max-w-sm rounded-[20px] flex-col justify-start items-start inline-flex overflow-hidden`}>
          <div className={`w-full h-[219px] pt-[60px] pb-5 ${bgColor} flex-col justify-start items-center gap-3 flex`}>
              <div className="w-full h-[68px] flex-col justify-start items-start gap-[5px] flex">
                  <div className={`w-full text-center ${textColor} text-lg font-normal`}>{title}</div>
                  <div className={`w-full text-center ${textColor} text-2xl font-bold`}>{duration}</div>
              </div>
              <div className={`w-full text-center ${textColor} text-[40px] font-bold`}>{price}</div>
          </div>
          <div className="w-full h-[347px] pb-[45px] bg-white flex-col justify-start items-start gap-[30px] flex">
              <div className="h-[172px] px-5 py-10 flex-col justify-start items-start gap-2.5 inline-flex">
                  {features.map((feature, index) => (
                      <div key={index} className="self-stretch justify-start items-center gap-[5px] inline-flex">
                          <BsCheck2Circle size="28" />
                          <div className="text-center text-black text-base font-normal">{feature}</div>
                      </div>
                  ))}
              </div>
              <div className="w-full h-[100px] px-[30px] py-5 flex-col justify-start items-start gap-2.5 flex">
                  <div className="w-full h-[60px] px-3 py-2 rounded-xl border border-[#3d81db] justify-center items-center gap-2.5 inline-flex hover:bg-shadow-700">
                      <div className="text-center text-[#3d81db] text-base font-semibold">Coba Sekarang</div>
                  </div>
              </div>
          </div>
      </div>}
  </div>
);

const PricingSection: React.FC = () => {
  const plans = [
    {
        title: "Paket Video E-Learning",
        duration: "3 Bulan",
        price: "Rp 99.000",
        features: [
            "Akses ke semua materi",
            "Tambahan 500 i-coin untuk tanya mentor",
            "Gratis latihan soal dari video materi"
        ],
        bgColor: "bg-[#90a3bf]",
        textColor: "text-white",
        highlight: false
    },
    {
        title: "Paket Video E-Learning",
        duration: "6 Bulan",
        price: "Rp 199.000",
        features: [
            "Akses ke semua materi",
            "Tambahan 750 i-coin untuk tanya mentor",
            "Gratis latihan soal dari video materi"
        ],
        bgColor: "bg-[#652f8e]",
        textColor: "text-white",
        highlight: true
    },
    {
        title: "Paket Video E-Learning",
        duration: "12 Bulan",
        price: "Rp 299.000",
        features: [
            "Akses ke semua materi",
            "Tambahan 1000 i-coin untuk tanya mentor",
            "Gratis latihan soal dari video materi"
        ],
        bgColor: "bg-[#ffc73a]",
        textColor: "text-[#2e1541]",
        highlight: false
    }
];
  return (

    <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-black text-4xl font-bold leading-[54px] text-center lg:text-left">
                Berlangganan Sekarang, Tingkatkan Potensimu!
            </div>
            <div className="text-black text-2xl font-normal leading-9 mb-4 text-center lg:text-left">
                Nikmati Akses Tanpa Batas ke Semua Materi, Hemat Lebih Banyak dengan Langganan Bulanan.
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-6 space-y-6 lg:space-y-0">
                {plans.map((plan, index) => (
                    <PricingCard key={index} {...plan} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default PricingSection;
