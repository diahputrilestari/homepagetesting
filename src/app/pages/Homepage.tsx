"use client";
import React, {useState} from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import PricingSection from '../components/sections/PricingSection';
import BenefitsSection from '../components/sections/BenefitsSection';

import Footer from '../components/layout/Footer';


const Homepage = () => {
    const [isLogin, setIsLogin] = useState(false);

    const handleLogin = () => {
        setIsLogin(!isLogin);
    };
    return (
    <div className='w-full item-center justify-between'>
        
        <Header isLogin={isLogin} handleLogin={handleLogin} />
        <HeroSection isLogin={isLogin}/>
        <FeaturesSection isLogin={isLogin}/>
        <BenefitsSection/>
        <PricingSection/>
        <Footer/>
    </div>
  );
};

export default Homepage;
