"use client"
import ArrowIcon from '@/assets/arrow-right.svg'
import starImg from '@/assets/star.png'
import springImg from '@/assets/spring.png'
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CallToAction = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
  return (
    <section id="help" ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip " >
      <div className="container">
        <div className="max-w-[600px] mx-auto relative " >
            <motion.img src={starImg.src} alt="Logo"  
              style={{
                translateY,
              }} width={360} height={360} className="hidden md:block absolute -left-[350px] -top-[137px]" />
            <motion.img 
               style={{
                translateY,
              }}
              src={springImg.src} alt='py' width={360} height={360} className='hidden md:block absolute -right-[331px] -top-[19px]' />
             <h1 className="text-5xl text-center md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text" >Sign up for free today</h1>
            <p className="text-xl text-center text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts
            </p>
            <div className="flex gap-2 justify-center mt-12">
              <button className="btn btn-primary" >Get for free</button>
              <button className='btn btn-text flex items-center justify-center gap-1'><span>Learn More</span> <ArrowIcon className='h-4 w-4' /> </button>
            </div>
          </div>
        </div>
    </section>
  );
};
