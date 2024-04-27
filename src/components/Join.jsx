import React from "react";
import Btc from "../images/bitcoin.png";
import Eth from "../images/ethereum.png";

const Join = () => {
  return (
    <>
      <section
        id="join"
        className="w-full h-screen bg-slate-950 text-white pt-28"
      >
        <div className="container">
          <div className="flex items-center justify-center gap-4 text-center pt-14">
            <img alt="coin_img" className=" w-20 hidden md:flex" src={Btc} />
            <div className="">
              <h2 className="text-8xl uppercase font-extrabold">
                join us via <br />{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-600 to-yellow-300">
                  discord
                </span>
              </h2>
              <p className="my-14 text-2xl ">
                Invest and manage all your crypto at one place.
              </p>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://yash-discordclone.netlify.app"
                className="text-whit text-xl bg-gradient-to-r  from-purple-800 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-full  px-10 py-5  text-center"
              >
                Join via Yash Discord
              </a>
            </div>
            <img alt="coin_img" className=" w-20 hidden md:flex" src={Eth} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Join;
