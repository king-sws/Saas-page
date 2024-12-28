'use client'
import React, { useRef } from 'react'
import ArrowIcon from '@/assets/arrow-right.svg'
import copImage from '@/assets/cog.png'
import Image from 'next/image'
import cylinderImg from '@/assets/cylinder.png'
import noodleImg from '@/assets/noodle.png'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'


const Hero = () => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start']
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={heroRef} id='home' className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px] ">
            <h1 className='forus' >Version 2.0 is here</h1>
            <h1 className='text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text  ' >Pathway to productivity</h1>
            <p className='text-xl text-[#010D3E] tracking-tight mt-6' >
              Celebrate the joy of accomplishment with an app designed to track your progress,
              motivate your efforts, and celebrate your successes
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className='btn btn-primary'>Get Started</button>
              <button className='btn btn-text flex items-center justify-center gap-1'><span>Learn More</span> <ArrowIcon className='h-4 w-4' /> </button>
            </div>
          </div>
        
          <div className="mt-20 md:mt-0 md:h-[648px] relative md:flex-1 ">
            <motion.img 
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 3,
                ease: "easeInOut"
              }}
              src={copImage.src} 
              alt="Logo" 
              className="md:absolute md:h-full md:max-w-none md:w-auto md:-left-6 lg:left-0" 
              />
            <motion.img 
                src={cylinderImg.src} 
                alt="Logo" width={220} 
                height={2220} 
                className="hidden md:block -top-8 -left-32 md:absolute" 
                animate={{
                  translateY: [20, -20],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'mirror',
                  duration: 4,
                  ease: "easeInOut"
                }}
              />
            <motion.img
              src={noodleImg.src} 
              alt="Logo" 
              width={220} 
              height={2220} 
              className="hidden md:block top-[524px] left-[448px] rotate-[30deg] absolute" 
              // animate={{
              //   translateY: [20, -20],
              // }}
              // transition={{
              //   repeat: Infinity,
              //   repeatType: 'mirror',
              //   duration: 3,
              //   ease: "easeInOut"
              // }} 
              style={{
                translateY: translateY
              }}
              />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero