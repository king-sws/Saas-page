'use client'
import React, { useRef } from 'react'
import productImg from '@/assets/product-image.png'
import Image from 'next/image'
import pyramidImg from '@/assets/pyramid.png'
import tubeImg from '@/assets/tube.png'
import { motion, useScroll, useTransform } from 'framer-motion'

const ProductShowcase = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
  return (
    <section ref={sectionRef} id="features" className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto ">
          <div className="flex justify-center">
            <div className='forus' >Boost your productivity</div>
          </div>
            <h1 className='text-3xl text-center mt-5 md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text  ' >
              A more effective way to track progress
            </h1>
            <p className='text-xl leading-[30px] text-center text-[#010D3E] tracking-tight mt-6' >
              Celebrate the joy of accomplishment with an app designed to track your progress and                motivate your efforts
            </p>
          </div>
          <div className="relative">
            <Image src={productImg} alt="Logo" className="mt-10" />
            <motion.img 
              src={pyramidImg.src} 
              alt='py' width={262} 
              height={262} 
              className='hidden md:block absolute -right-36 -top-32'
              style={{
                translateY,
              }}
              />
            <motion.img 
            src={tubeImg.src} 
            alt='py' width={262} 
            height={262} 
            className='absolute hidden md:block bottom-24 -left-36'
            style={{
              translateY,
            }}
            />
          </div>
        </div>
    </section>
  )
}

export default ProductShowcase