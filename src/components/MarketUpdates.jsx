import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MarketUpdates = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [apiLoad, setApiLoad] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false
  `;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [url]);

  const paginationButtons = [];
  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className="px-[1rem] py-[0.5rem] bg-white rounded-full text-black text-xl font-bold focus:bg-gradient-to-tl from-purple-700 to-pink-400 focus:border-2 focus:border-red-200 focus:text-white outline-none"
      >
        {i}
      </button>
    );
  }

  const scrollMarket = () => {
    window.scrollTo({
      top: window.pageYOffset - 800,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section id="market" className="w-full h-auto bg-slate-950 py-8">
        <div className="container">
          <div className="flex flex-col justify-center w-full text-white gap-8 md:px-20">
            <h2 className="text-[3rem] font-extrabold">Market Update</h2>
            <div className="">
              <div className="flex w-full items-center justify-between bg-gradient-to-r from-blue-700 to-fuchsia-600 py-4 px-3 text-[1.3rem] rounded-t-lg">
                <p className=" ">Coin</p>
                <p>Price</p>
                <p>24h Change</p>
                <p>Market Cap</p>
              </div>
              <div
                onLoad={() => setApiLoad(false)}
                className="flex flex-col w-full overflow-x-scroll md:overflow-hidden py-5 "
              >
                {apiLoad && <span className="loader"></span>}
                {data.map((item) => (
                  <Link
                    to={`/coin/${item.id}`}
                    className="flex items-center  w-screen md:w-full border-b py-4 justify-between font-bold text-2xl "
                    key={item.id}
                  >
                    <span className="flex items-center gap-3 ">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 md:w-16"
                      />{" "}
                      {item.name}
                    </span>
                    <p>{"$ " + item.current_price.toFixed(2)}</p>
                    <p
                      className={
                        "" +
                        (item.price_change_percentage_24h >= 0
                          ? "text-green-500"
                          : "text-red-500")
                      }
                    >
                      {item.price_change_percentage_24h?.toFixed(2) + " %"}
                    </p>
                    <p>{"$ " + numberWithCommas(item.market_cap)}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div
              onClick={scrollMarket}
              className="flex w-full items-end justify-center gap-3"
            >
              {paginationButtons}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketUpdates;
