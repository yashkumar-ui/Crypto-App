import { useEffect, useState } from "react";
import Btc from "../images/bitcoin.png";
import Eth from "../images/ethereum.png";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

function Hero() {
  const [data, setData] = useState([]);
  const [coinsLoad, setCoinsLoad] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false
  `;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  // console.log(data);

  return (
    <>
      <section
        id="home"
        className="w-full h-screen pt-[12rem] bg-gradient-to-b from-purple-950  to-slate-950"
      >
        <div className="container w-full h-full ">
          <div className="w-full h-screen flex flex-col items-center">
            <div className="w-full flex items-center justify-around text-center font-[900] uppercase ">
              <img
                className=" w-20 hidden md:flex"
                src={Btc}
                alt="floating-el"
              />
              <h1 className="text-6xl text-white">
                Track and Trade
                <br />
                <span className="bg-clip-text text-[4.3rem] text-transparent bg-gradient-to-r from-pink-500 via-blue-600 to-yellow-300">
                  Crypto currencies
                </span>
              </h1>
              <img
                className="w-20 hidden md:flex"
                src={Eth}
                alt="floating-el"
              />
            </div>

            {/* mobile btn */}
            <a
              className="flex items-center gap-2 mt-10 bg-gradient-to-r from-blue-800 to-pink-400 px-7 py-3 text-2xl font-semibold text-white  rounded-full sm:hidden"
              href="#market"
            >
              See Prices <FaChevronDown />
            </a>

            <div
              onLoad={() => setCoinsLoad(false)}
              className=" hidden sm:flex items-center text-center justify-around gap-10 text-xl font-bold"
            >
              {coinsLoad && <span className="loader"></span>}
              {data.map((item) => (
                <Link
                  to={`/coin/${item.id}`}
                  key={item.id}
                  className="flex flex-col gap-1 pt-14"
                >
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className="w-[7rem]"
                  />
                  <p className="text-white">
                    {item?.name}{" "}
                    <span
                      className={
                        "slider-coin " +
                        (item.price_change_percentage_24h <= 0
                          ? "text-red-600"
                          : "text-green-500")
                      }
                    >
                      {item?.price_change_percentage_24h?.toFixed(2) + "%"}
                    </span>
                  </p>
                  <p className="text-white">
                    {"$ " + numberWithCommas(item.current_price?.toFixed(2))}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
