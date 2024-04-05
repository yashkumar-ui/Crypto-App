import React, { useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "market",
    },
    {
      id: 3,
      link: "choose",
    },
    {
      id: 4,
      link: "join",
    },
  ];
  return (
    <>
      <nav className="relative z-50">
        <div className="navbar text-white flex fixed top-0 left-0 items-center justify-between w-full pt-[1.5rem] pb-[1.5rem] pl-[1.2rem] pr-[1.2rem] ">
          <Link to="/" smooth="true" duration={500}>
            <p className="text-3xl font-bold ">COIN</p>
          </Link>

          <ul className="hidden md:flex gap-5 font-bold text-xl  ">
            {links.map(({ link, id }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200"
              >
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center text-xl  gap-4 bg-white text-black rounded-3xl pt-[0.3rem] pb-[0.3rem]  pr-[0.8rem] pl-[0.8rem]  md:pt-[0.4rem] md:pb-[0.4rem] md:pr-[1rem] md:pl-[1rem]">
            <a href="https://github.com/yashkumar-ui">
              <LuGithub fontSize={"1.5rem"} className="hover:text-sky-800" />
            </a>

            <a href="">
              <CiLinkedin fontSize={"1.6rem"} className="hover:text-sky-800" />
            </a>
            <div
              onClick={() => setNav(!nav)}
              className="cursor-pointer pr-4 z-10 md:hidden"
            >
              {nav ? <RxCross2 size={30} /> : <RxHamburgerMenu size={30} />}
            </div>
          </div>
          {nav && (
            <ul className="flex flex-col bg-slate-200  w-full text-black font-semibold text-4xl justify-center items-center absolute top-0 left-0  h-screen  ">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  <a onClick={() => setNav(!nav)} href={`#${link}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
