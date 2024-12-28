import Logo from "../assets/logosaas.png";
import Image from "next/image";
import X from "../assets/social-x.svg"
import Instagram from "../assets/social-insta.svg"
import LinkedIn from "../assets/social-linkedin.svg"
import Youtube from "../assets/social-youtube.svg"
import Printer from "../assets/social-pin.svg"



export const Footer = () => {
  return (
    <section className="bg-neutral-950 text-sm text-center py-10 ">
      <div className="container">
        <div className="inline-flex relative justify-center before:content-[''] before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] before:absolute  ">
          <Image src={Logo} alt="Logo" width={40} height={40} className="cursor-pointer relative" />
        </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 text-white/50  text-center mt-5">
            <p>About</p>
            <p>Features</p>
            <p>Customers</p>
            <p>Pricing</p>
            <p>Help</p>
            <p>Careers</p>
          </div>
          <div className="">
            <div className="flex text-white items-center justify-center gap-6 lg:gap-8 mt-6">
              <X className="cursor-pointer" />
              <Instagram className="cursor-pointer" />
              <LinkedIn className="cursor-pointer" />
              <Youtube className="cursor-pointer" />
              <Printer className="cursor-pointer" />
            </div>
            <div className="flex text-white/50 items-center gap-2 justify-center mt-10">2024 KiNG. All rights reserved</div>
          </div>
        
      </div>
    </section>
  );
};
