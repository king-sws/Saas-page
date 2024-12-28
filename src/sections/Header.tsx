"use client"
import React, { useState } from 'react'
import ArrowRight from '@/assets/arrow-right.svg'
import Logo from '@/assets/logosaas.png'
import Link from 'next/link'
import Image from 'next/image'
import Menu from '@/assets/menu.svg'
import { AnimatePresence, motion } from 'framer-motion'
import { BiMenu, BiX } from 'react-icons/bi'

const NavbarLinks = [
  { label: "#home", name: "Home" },
  { label: "#features", name: "Features" },
  { label: "#updates", name: "Updates" },
  { label: "#custmoers", name: "Custmoers" },
  { label: "#help", name: "Help" },
];

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
   <header className='fixed w-full z-[100] top-0 backdrop-blur-sm' >
      <div className="flex justify-center items-center text-white bg-neutral-950 gap-3 text-sm py-2">
        <p className="text-white/60 hidden md:flex">Streamline your workflowand boost your productivity</p>
        <div className="inline-flex fap-1 items-center">
          <h1>Get started for free</h1>
          <ArrowRight className="h-4 w-4"  />
        </div>
      </div>
      <div className="py-5">
          <div className="container">
            <div className="flex justify-between items-center">
                <Link href={"/"} className="flex justify-center items-center">
                  <Image src={Logo} alt="Logo" width={40} height={40} className="cursor-pointer" />
                </Link>
                <nav className='hidden md:flex text-black/60 justify-between items-center gap-6' >
                  {NavbarLinks.map((link) => (
                    <Link href={link.label} key={link.label} className="hidden md:inline-block hover:text-neutral-950 transition-all cursor-pointer">{link.name}</Link>
                  ))}
                  <button className="bg-neutral-950 text-white px-4 py-2 rounded-lg cursor-pointer align-items -tracking-tight hidden md:inline-block">Get For Free</button>
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center">
                  <button onClick={handleMenuToggle} className="focus:outline-none transition">
                    {!isOpen ? <BiMenu size={24} /> : <BiX size={24} />}
                  </button>
                </div>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }} // Set exit animation for smoother closing
                    className="overflow-hidden"
                  >
                    <div className="md:hidden bg-[#EAEEFE] backdrop-blur z-[99999] flex flex-col p-6 rounded-xl items-center mt-4 gap-3">
                      {NavbarLinks.map((link, index) => (
                        <Link key={index} href={link.label} className='font-medium'>
                          {link.name}
                        </Link>
                      ))}
                      
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

   </header>
  )
}

export default Header

// const NavbarLinks = [
//   { label: "#home", name: "Home" },
//   { label: "#features", name: "Features" },
//   { label: "#updates", name: "Updates" },
//   { label: "#custmoers", name: "Custmoers" },
//   { label: "#help", name: "Help" },
// ];

// const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleMenuToggle = () => {
  //   setIsOpen(!isOpen);
  // };

//   return (
//     <section className="fixed w-full z-[100] top-0 ">
//       <div className='px-6 md:px-12 lg:px-24 py-8'>
//         <div className="flex justify-between items-center border border-white/15 bg-neutral-950/75 backdrop-blur rounded-full px-6 py-2">
//           <div className="">
//             <Link href="/">
//               <Image src={Logo} alt="logo" width={40} height={40} className='outline-none border-none' />
//             </Link>
//           </div>
//           <div className="hidden lg:flex md:gap-1 gap-5">
//             {NavbarLinks.map((link, index) => (
//               <div key={index} className="px-4">
//                 <Link href={`${link.label}`} className='font-medium hover:text-lime-400 transition-all '>{link.name}</Link>
//               </div>
//             ))}
//           </div>
//           <div className="hidden md:flex gap-5">
            
//           </div>
//           {/* Mobile Menu */}
//           <div className="md:hidden flex items-center">
//             <button onClick={handleMenuToggle} className="focus:outline-none transition">
//               {!isOpen ? <BiMenu size={24} /> : <BiX size={24} />}
//             </button>
//           </div>
//         </div>
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ height: 0 }}
//               animate={{ height: "auto" }}
//               exit={{ height: 0 }} // Set exit animation for smoother closing
//               className={`overflow-hidden`}
//             >
//               <div className="md:hidden bg-neutral-950/75 backdrop-blur z-[99999] flex flex-col p-6 rounded-xl items-center mt-4 gap-3">
//                 {NavbarLinks.map((link, index) => (
//                   <Link key={index} href={link.label} className='font-medium'>
//                     {link.name}
//                   </Link>
//                 ))}
                
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default Header;