import React from "react";
import ChooseBox from "./ChooseBox";
import BitHand from "../images/choose-main.png";
import {
  TbPencilBolt,
  TbChecklist,
  TbDeviceMobileMessage,
  TbMoneybag,
  TbWallet,
  TbStack,
} from "react-icons/tb";

const WhyUs = () => {
  return (
    <>
      <section id="choose" className="w-full h-auto  bg-slate-950 ">
        <div className="container">
          <div className="w-full h-full flex justify-center text-center flex-col ">
            <h2 className="text-[4.3rem] mb-8 uppercase font-extrabold text-white justify-center">
              why{" "}
              <span className="bg-clip-text text-[4.3rem] text-transparent bg-gradient-to-r from-pink-500 via-blue-600 to-yellow-300">
                choose us
              </span>
            </h2>
            <div className=" flex flex-wrap lg:flex-nowrap lg:px-28 items-center justify-center gap-5 lg:gap-8">
              <div className="flex flex-col gap-8 text-start ">
                <ChooseBox
                  img={<TbWallet />}
                  title="CONNECT YOUR WALLET"
                  text="Use Trust Wallet, Metamask or to connect to the app."
                />
                <ChooseBox
                  img={<TbPencilBolt />}
                  title="SELECT YOUR QUANTITY"
                  text="Upload your crypto and set a title, description and price."
                />
                <ChooseBox
                  img={<TbChecklist />}
                  title="CONFIRM TRANSACTION"
                  text="Earn by selling your crypto on our marketplace."
                />
              </div>
              <div className="flex items-center justify-center w-60">
                <img src={BitHand} alt="hand_img" />
              </div>
              <div className="flex flex-col gap-8 text-start ">
                <ChooseBox
                  img={<TbDeviceMobileMessage />}
                  title="RECEIVE YOUR OWN NFTS"
                  text="Invest all your crypto at one place on one platform."
                />
                <ChooseBox
                  img={<TbMoneybag />}
                  title="TAKE A MARKET
                  TO SELL"
                  text="Discover, collect the right crypto collections to buy or sell."
                />
                <ChooseBox
                  img={<TbStack />}
                  title="DRIVE YOUR COLLECTION"
                  text="We make it easy to Discover, Invest and manage."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
