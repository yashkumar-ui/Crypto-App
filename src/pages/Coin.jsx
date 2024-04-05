import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Coin() {
  const { coinId } = useParams();
  const [coin, setCoin] = useState({});
  const [loadCoin, setLoadCoin] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const json = await response.json();
        setCoin(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // console.log(coin);

  const h24 = coin.market_data ? coin.market_data.price_change_24h : "";

  return (
    <>
      <section className="w-full h-full pt-[8rem] bg-gradient-to-b from-purple-950  to-slate-950">
        <div className="container w-full min-h-screen ">
          <div
            onLoad={() => setLoadCoin(false)}
            className="flex flex-col md:flex-row items-center justify-between gap-5"
          >
            <div className="flex flex-col items-center justify-center text-white">
              {loadCoin && <span className="loader"></span>}
              {coin.image ? (
                <img
                  src={coin.image.large}
                  alt={coin.id}
                  className="w-40 md:w-50"
                />
              ) : null}
              <h2 className="text-4xl font-bold">{coin.name}</h2>
              <p className="text-xl font-semibold">
                Rank: #{coin.coingecko_rank}
              </p>
            </div>
            <div className="flex flex-col items-center w-full gap-3  border-t-2 md:border-l-2 md:border-t-0 py-4 px-6 text-white">
              <div className=" flex w-full justify-between text-xl">
                <div className=" flex ">
                  <span>24h Change:</span>
                  <p className={h24 >= 0 ? "text-green-500" : "text-red-600"}>
                    {coin.market_data
                      ? coin.market_data.price_change_percentage_24h.toFixed(
                          2
                        ) + "%"
                      : ""}
                  </p>
                </div>
                <div className="flex">
                  <span>Price:</span>
                  <p className={"text-green-500"}>
                    {coin.market_data
                      ? "$" +
                        numberWithCommas(
                          coin.market_data.current_price.usd.toFixed(2)
                        )
                      : null}
                  </p>
                </div>
                <div className="flex">
                  <p>Symbol:</p>
                  <span>{coin.symbol}</span>
                </div>
              </div>
              {loadCoin && <span className="loader"></span>}
              <div className="flex items-center justify-center px-5 mt-6 ">
                <p className="text-xl h-[15rem] overflow-y-scroll">
                  {coin.description ? coin.description.en.slice(0, 650) : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Coin;
