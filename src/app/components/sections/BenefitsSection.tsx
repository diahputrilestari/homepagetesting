import React from 'react';
import Image from 'next/image';
import imgbc from '../../assets/images/img-bootcamp.png';
import imgbc2 from '../../assets/images/img-bootcamp2.png';
import imgbc3 from '../../assets/images/img-bootcamp3.png';

const BenefitsSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 max-w-7xl py-8">
      <div className="w-full flex flex-col justify-start items-start md:gap-12">
        <div className="w-full flex flex-col justify-start items-start gap-8">
          <div className="w-full text-black text-lg md:text-4xl font-bold font-['Plus Jakarta Sans'] md:leading-[54px] text-center lg:text-left">
            Keunggulan Iodacademy yang Tak Boleh Dilewatkan
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-12">
          <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-8">
            <Image className="w-full lg:w-[400px] h-auto rounded-[10px]" src={imgbc} alt="image bootcamp" />
            <div className="flex flex-col justify-start items-start gap-2.5 px-4 lg:px-[100px] py-5">
              <div className="text-black text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">
                Program Bootcamp Langsung Kerja
              </div>
              <div className="text-black text-2xl font-normal font-['Plus Jakarta Sans'] leading-9">
                Ioda Academy menghadirkan bootcamp berbasis Learning by Doing dengan peserta langsung terlibat dalam proyek nyata, serta penyaluran kerja ke mitra perekrutan.
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-8">
            <div className="flex flex-col justify-start items-start gap-2.5 px-4 lg:px-[100px] py-5 order-2 lg:order-1">
              <div className="text-black text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">
                Pembelajaran Praktis dengan Mentor Pribadi
              </div>
              <div className="text-black text-2xl font-normal font-['Plus Jakarta Sans'] leading-9">
                Ioda Academy menawarkan pembelajaran langsung di tempat kerja yang didampingi oleh mentor pribadi. Peserta akan mendapatkan pemahaman mendalam melalui praktik nyata, memastikan keterampilan yang relevan dan aplikatif.
              </div>
            </div>
            <Image className="w-full lg:w-[400px] h-auto rounded-[10px] order-1 lg:order-2" src={imgbc2} alt="image bootcamp" />
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-8">
            <Image className="w-full lg:w-[400px] h-auto rounded-[10px]" src={imgbc3} alt="image bootcamp" />
            <div className="flex flex-col justify-start items-start gap-2.5 px-4 lg:px-[100px] py-5">
              <div className="text-black text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">
                Pilihan Kelas yang Beragam
              </div>
              <div className="text-black text-2xl font-normal font-['Plus Jakarta Sans'] leading-9">
                Ioda Academy menyediakan berbagai kelas dan bootcamp yang sesuai dengan minat dan kebutuhan karir, seperti Digital Marketing, Finance & Tax, Human Resource (HR), Legal, Instructional Design, Business Development & Sales, Graphic Design, hingga Product Management.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;