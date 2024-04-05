import React from "react";
import { TbBrandDiscord } from "react-icons/tb";
import { LuFacebook, LuTwitter, LuYoutube } from "react-icons/lu";
import footerbg from "../images/footer-bg.png";
const Footer = () => {
  return (
    <>
      <footer
        id="market"
        className="w-full h-auto pb-36 pt-10 bg-slate-950 text-white"
      >
        <div className="flex items-center justify-center flex-col gap-10  lg:mb-10">
          <div className="flex gap-10 text-4xl z-50">
            <LuTwitter className="cursor-pointer" />
            <TbBrandDiscord className="cursor-pointer" />
            <LuFacebook className="cursor-pointer" />
            <LuYoutube className="cursor-pointer" />
          </div>
          <div className="flex gap-8 mb-14 text-xl z-50">
            <p className=" bg-clip-text cursor-pointer hover:bg-clip-text hover:text-transparent bg-gradient-to-r from-pink-500 to-blue-600 ">
              Privacy
            </p>
            <p className=" bg-clip-text cursor-pointer hover:bg-clip-text hover:text-transparent bg-gradient-to-r from-pink-500 to-blue-600">
              Terms of Use
            </p>
          </div>
        </div>
          <img alt="footer_img" className="w-screen absolute bottom-0 " src={footerbg} />
      </footer>
    </>
  );
};

export default Footer;
