"use client"
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColom = testimonials.slice(0, 3);
const secondColom = testimonials.slice(3, 6);
const thirdColom = testimonials.slice(6, 9);

const TestimonialsColom = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <React.Fragment key={i}>
          {props.testimonials.map(({ text, imageSrc, name, username }, i) => (
            <div key={i} className="card">
              <div className="">{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium leading-5 tracking-tight">
                    {name}
                  </div>
                  <span className="text-[#010D3E] leading-5 tracking-tight ">
                    {username}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section id="custmoers" className="bg-white pt-0 md:pt-5 lg:pt-10">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="forus">Version 2.0 is here</div>
          </div>
          <h1 className="text-3xl text-center mt-5 md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            What our users say
          </h1>
          <p className="text-xl leading-[30px] text-center text-[#010D3E] tracking-tight mt-6">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center mt-10 gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden ">
          <TestimonialsColom testimonials={firstColom} duration={15} />
          <TestimonialsColom testimonials={secondColom} className="hidden md:block" duration={19} />
          <TestimonialsColom testimonials={thirdColom} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
