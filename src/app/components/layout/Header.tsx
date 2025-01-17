"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../assets/images/logo.png'; 
import user from '../../assets/images/user.png';
import { IoIosArrowDown } from "react-icons/io";

interface HeaderProps {
  isLogin: boolean;
  handleLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLogin, handleLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuItems = [
    { name: 'Homepage', href: '#', active: true },
    { name: 'Video Course', href: '#' },
    { name: 'Bootcamp', href: '#' },
    { name: 'For Business', href: '#' },
    { name: 'Latihan Project', href: '#' },
  ];

  return (
    <header className="w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="w-full h-20 bg-white flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Image src={logo} alt="logo" className="w-[134.72px] grow shrink basis-0 md:w-[162px] md:h-9"/>
          </div>

          {/* Desktop & Mobile Menu */}
          <nav className="hidden md:flex items-center gap-5">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`px-6 py-[13px] rounded-[10px] ${
                  item.active
                    ? 'bg-[#c9a7e2]/20 text-[#652f8e]'
                    : 'text-[#596780]'
                } text-base font-semibold hover:bg-[#c9a7e2]/10`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          {isLogin ? (
            <div className="w-10 h-[38px] relative flex-col justify-start items-start hidden md:flex">
                <Image src={user} alt='user' className="w-[33.20px] h-[32.72px] relative"/>
            </div>
          ) : (
          <div className="hidden md:flex items-center gap-3">
            <a href=''>
              <button className="w-[95px] h-[37px] px-4 py-[9px] bg-[#652f8e] text-white text-xs font-semibold rounded-lg">
                Daftar
              </button>
            </a>
            <button className="w-[95px] h-[37px] px-4 py-[9px] border border-[#90a3bf] text-[#596780] text-xs font-semibold rounded-lg"
             onClick={handleLogin}
            >
              Masuk
            </button>
          </div>
          )}
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Garis Bawah */}
      <div className="w-full border border-[#c3d4e9]"></div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 p-4">
          <div className="absolute right-0 top-0 h-full w-[269px] bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out">
            {/* Close Button */}
            <button onClick={toggleMenu} className="text-gray-500 focus:outline-none mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Mobile Menu Items */}
            <nav className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2 mt-4">
              {isLogin ? (
                <>
            <div className="h-12 pl-1 pr-4 py-1 rounded-lg border border-[#c3d4e9] justify-between items-center inline-flex">
                
                <div className='relative'>
                <div className="flex items-center space-x-2 " onClick={toggleDropdown}>
                  <Image src={user} alt="User avatar" className="w-10 h-10 rounded-full" />
                  <span>Faris Ferdian A.</span>
                  <div className="w-10 h-10 justify-right items-center flex">
                    <div className="w-5 h-5 relative">
                      <IoIosArrowDown/>
                    </div>
                  </div>
                </div>
                {isDropdownOpen && (
                  <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-lg p-4 z-10">
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                      <i className="fas fa-user text-purple-700 mr-2"></i>
                      Profil Saya
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                      <i className="fas fa-history text-purple-700 mr-2"></i>
                      History Pembelian
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 text-red-500">
                      <i className="fas fa-sign-out-alt mr-2"></i>
                      Keluar
                    </a>
                  </div>
                )}
                </div>
                </div>
                </>
              ):(
                <>
                <button className="h-[37px] px-4 py-[9px] bg-[#652f8e] rounded-lg justify-center items-center gap-2.5 inline-flex" onClick={handleLogin}
                // onClick={toggleDropdown}
                >
                  <div className="text-center text-white text-xs font-semibold font-['Plus Jakarta Sans'] leading-tight">Masuk</div>
                </button>
                <div className="text-center text-[#596780] text-xs font-normal font-['Plus Jakarta Sans']">atau</div>
                <button className="h-[37px] px-4 py-[9px] bg-white rounded-lg border border-[#90a3bf] justify-center items-center gap-2.5 inline-flex">
                  <div className="text-center text-[#596780] text-xs font-semibold font-['Plus Jakarta Sans'] leading-tight">Daftar Sekarang</div>
                </button>
                </>
              )}
              </div>
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={toggleMenu}
                  className={`py-2 text-left text-xs font-semibold font-['Plus Jakarta Sans'] leading-tight ${
                    item.active ? 'text-[#652f8e]' : 'text-[#596780]'
                  } hover:text-[#652f8e]`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;