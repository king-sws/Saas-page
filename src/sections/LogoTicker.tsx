"use client"
import React from 'react';
import acmeLogo from '@/assets/logo-acme.png';
import quantumLogo from '@/assets/logo-quantum.png';
import echoLogo from '@/assets/logo-echo.png';
import Image from 'next/image';
import pulseLogo from '@/assets/logo-pulse.png';
import apexLogo from '@/assets/logo-apex.png';
import { motion } from 'framer-motion';

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container mx-auto">
        <div className="flex overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black, transparent)' }}>
          <motion.div
            className="flex gap-24 pr-24 flex-none "
            animate={{
              translateX: '-50%'
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: 'linear',     
              repeatType: 'loop'         
            }}
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                <Image src={acmeLogo} alt="Acme Logo" className="logo-ticker-img" />
                <Image src={quantumLogo} alt="Quantum Logo" className="logo-ticker-img" />
                <Image src={echoLogo} alt="Echo Logo" className="logo-ticker-img" />
                <Image src={pulseLogo} alt="Pulse Logo" className="logo-ticker-img" />
                <Image src={apexLogo} alt="Apex Logo" className="logo-ticker-img" />
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
