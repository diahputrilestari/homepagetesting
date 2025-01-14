
import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-black text-4xl font-bold font-['Plus Jakarta Sans'] leading-[54px] text-center lg:text-left">
          Berlangganan Sekarang, Tingkatkan Potensimu!
        </div>
        <div className="text-black text-2xl font-normal font-['Plus Jakarta Sans'] leading-9 mb-4 text-center lg:text-left">
          Nikmati Akses Tanpa Batas ke Semua Materi, Hemat Lebih Banyak dengan Langganan Bulanan.
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-6 space-y-6 lg:space-y-0">
          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-[20px] flex-col justify-start items-start inline-flex overflow-hidden">
              <div className="w-full h-[219px] pt-[60px] pb-5 bg-[#90a3bf] flex-col justify-start items-center gap-3 flex">
                <div className="w-full h-[68px] flex-col justify-start items-start gap-[5px] flex">
                  <div className="w-full text-center text-white text-lg font-normal font-['Plus Jakarta Sans'] leading-[27px]">
                    Paket Video E-Learning
                  </div>
                  <div className="w-full text-center text-white text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">
                    3 Bulan
                  </div>
                </div>
                <div className="w-full text-center text-white text-[40px] font-bold font-['Plus Jakarta Sans'] leading-[60px]">
                  Rp 99.000
                </div>
              </div>
              <div className="w-full h-[347px] pb-[45px] bg-white flex-col justify-start items-start gap-[30px] flex">
                <div className="w-full h-[172px] px-[30px] py-10 flex-col justify-start items-start gap-2.5 flex">
                  <div className="flex justify-start items-center gap-[17px]">
                    <div className="w-6 h-6 relative overflow-hidden" />
                    <div className="text-center text-black text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                      Akses ke semua materi
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-center gap-[17px]">
                    <div className="w-6 h-6 relative overflow-hidden" />
                    <div className="grow shrink basis-0 text-black text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                      Tambahan 500 i-coin untuk tanya mentor
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-center gap-[17px]">
                    <div className="w-6 h-6 relative overflow-hidden" />
                    <div className="text-center text-black text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                      Gratis latihan soal dari video materi
                    </div>
                  </div>
                </div>
                <div className="w-full h-[100px] px-[30px] py-5 flex-col justify-start items-start gap-2.5 flex">
                  <div className="w-full h-[60px] px-3 py-2 rounded-xl border border-[#3d81db] justify-center items-center gap-2.5 inline-flex hover:bg-shadow-700">
                    <div className="text-center text-[#3d81db] text-base font-semibold font-['Plus Jakarta Sans']">
                      Coba Sekarang
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <div className="w-full max-w-sm h-[583px] p-2.5 bg-[#ffcc00] rounded-[10px] flex-col justify-center items-start inline-flex">
              <div className="w-full h-[563px] rounded-[20px] flex-col justify-start items-start flex overflow-hidden">
                <div className="w-full h-[220px] pb-5 bg-[#652f8e] flex-col justify-start items-center gap-3 flex">
                  <div className="w-full h-[47px] flex-col justify-start items-end gap-2.5 flex">
                    <div className="p-2.5 bg-[#ff4423] rounded-tr-[20px] justify-center items-center gap-2.5 inline-flex">
                      <div className="w-6 h-6 relative overflow-hidden" />
                      <div className="text-center text-white text-lg font-bold font-['Plus Jakarta Sans'] leading-[27px]">
                        Paling banyak dibeli
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[68px] flex-col justify-start items-start gap-[5px] flex">
                    <div className="w-full text-center text-white text-lg font-normal font-['Plus Jakarta Sans'] leading-[27px]">
                      Paket Video E-Learning
                    </div>
                    <div className="w-full text-center text-white text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">
                      6 Bulan
                    </div>
                  </div>
                  <div className="w-full text-center text-white text-[40px] font-bold font-['Plus Jakarta Sans'] leading-[60px]">
                    Rp 199.000
                  </div>
                </div>
                <div className="w-full h-[392px] bg-white flex-col justify-start items-start gap-[30px] flex">
                  <div className="w-full h-[172px] px-[30px] py-10 flex-col justify-start items-start gap-2.5 flex">
                    <div className="flex justify-start items-center gap-[17px]">
                      <div className="w-6 h-6 relative overflow-hidden" />
                      <div className="text-center text-black text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                        Akses ke semua materi
                      </div>
                    </div>
                    <div className="w-full flex justify-start items-center gap-[17px]">
                      <div className="w-6 h-6 relative overflow-hidden" />
                      <div className="grow shrink basis-0 text-black text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                        Tambahan 750 i-coin untuk tanya mentor
                      </div>
                    </div>
                    <div className="w-full flex justify-start items-center gap-[17px]">
                      <div className="w-6 h-6 relative overflow-hidden" />
                      <div className="text-center text-black text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                        Gratis latihan soal dari video materi
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[100px] px-[30px] py-5 flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full h-[60px] px-3 py-2 rounded-xl border border-[#3d81db] justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-[#3d81db] text-base font-semibold font-['Plus Jakarta Sans']">
                        Coba Sekarang
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-[20px] flex-col justify-start items-start inline-flex overflow-hidden">
              <div className="w-full h-[219px] pt-[60px] pb-5 bg-[#ffc73a] flex-col justify-start items-center gap-3 flex">
                <div className="w-full h-[68px] flex-col justify-start items-start gap-[5px] flex">
                  <div className="w-full text-center text-[#2e1541] text-lg font-normal font-['Plus Jakarta Sans'] leading-[27px]">
                    Paket Video E-Learning
                  </div>
                  <div className="w-full text-center text-[#2e1541] text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">
                    12 Bulan
                  </div>
                </div>
                <div className="w-full text-center text-[#2e1541] text-[40px] font-bold font-['Plus Jakarta Sans'] leading-[60px]">
                  Rp 299.000
                </div>
              </div>
              <div className="w-full h-[371px] pb-[45px] bg-white flex-col justify-start items-start gap-[30px] flex">
                <div className="w-full h-[196px] px-[30px] py-10 flex-col justify-start items-start gap-2.5 flex">
                  <div className="flex justify-start items-center gap-[17px]">
                    <div className="w-6 h-6 relative overflow-hidden" />
                    <div className="text-center text-black text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                      Akses ke semua materi
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-center gap-[17px]">
                    <div className="w-6 h-6 relative overflow-hidden" />
                    <div className="grow shrink basis-0 text-black text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                      Tambahan 1000 i-coin untuk tanya mentor
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-center gap-[17px]">
                    <div className="w-6 h-6 relative overflow-hidden" />
                    <div className="text-center text-black text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                      Gratis latihan soal dari video materi
                    </div>
                  </div>
                </div>
                <div className="w-full h-[100px] px-[30px] py-5 flex-col justify-start items-start gap-2.5 flex">
                  <div className="w-full h-[60px] px-3 py-2 rounded-xl border border-[#3d81db] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-[#3d81db] text-base font-semibold font-['Plus Jakarta Sans']">
                      Coba Sekarang
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
