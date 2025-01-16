"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../assets/images/logo.png'; 

interface HeaderProps {
  isLogin: boolean;
  handleLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLogin, handleLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isLogin, setIsLogin] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const handleLogin = () => {
  //   setIsLogin(!isLogin);
  // };

  // Menu Items
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
            <Image src={logo} alt="logo" width={162} height={36} />
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
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
                F
              </div>
            </div>
          ) : (
          <div className="hidden md:flex items-center gap-3">
            <button className="w-[95px] h-[37px] px-4 py-[9px] bg-[#652f8e] text-white text-xs font-semibold rounded-lg">
              Daftar
            </button>
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
                <button className="h-[37px] px-4 py-[9px] bg-[#652f8e] rounded-lg justify-center items-center gap-2.5 inline-flex">
                  <div className="text-center text-white text-xs font-semibold font-['Plus Jakarta Sans'] leading-tight">Masuk</div>
                </button>
                <div className="text-center text-[#596780] text-xs font-normal font-['Plus Jakarta Sans']">atau</div>
                <button className="h-[37px] px-4 py-[9px] bg-white rounded-lg border border-[#90a3bf] justify-center items-center gap-2.5 inline-flex">
                  <div className="text-center text-[#596780] text-xs font-semibold font-['Plus Jakarta Sans'] leading-tight">Daftar Sekarang</div>
                </button>
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