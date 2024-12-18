import { FaCoins } from "react-icons/fa6";
import { BaseUrl } from "./BaseUrl";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Coins = () => {
  const [currency, setCurrency] = useState("usd");
  const [search, setSearch] = useState("");
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCoinData = async () => {
      try {
        const response = await fetch(
          `${BaseUrl}/coins/markets?vs_currency=${currency}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCoin(data);
        setLoading(false);
      } catch (error) {
        console.log("Error while fetching data: ", error);
        setError(error.message);
        setLoading(false);
      }
    };
    getCoinData();
  }, [currency]);

  // Filtered coin data based on search term
  const filteredCoins = coin.filter((data) => {
    if (search === "") {
      return true;
    } else if (data.name.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
    return false;
  });

  return (
    <div className="coin_container">
      <div className="coinnav">
        <h3>
          Coins <FaCoins className="coin-icon" />
        </h3>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search Your Coin"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Search</button> {/* Corrected spelling */}
        </div>
        <div className="currencybtn">
          <button onClick={() => setCurrency("inr")}>INR</button>
          <button onClick={() => setCurrency("usd")}>USD</button>
        </div>
      </div>

      {/* Loading and error handling */}
      {loading ? (
        <p>Loading coins...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="coininfo">
          <div className="coin_box">
            <div className="heading">
              <div className="data_keeper">Coins</div>
              <div className="data_keeper">Name</div>
              <div className="data_keeper">Rank</div>
              <div className="data_keeper">Current Price</div>
            </div>
            <hr />
            <div className="data_exchange">
              {filteredCoins.length > 0 ? (
                filteredCoins.map((item) => (
                  <Link
                    to={`/coins/detail/${item.id}`}
                    style={{ color: "#f4f4f4", textDecoration: "none" }}
                    key={item.id} // Moved key to Link and used item.id instead of index
                  >
                    <div className="heading">
                      <div className="data_keeper">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </div>
                      <div className="data_keeper">{item.name}</div>
                      <div className="data_keeper">#{item.market_cap_rank}</div>
                      <div className="data_keeper">
                        {currency === "inr" ? "₹" : "$"}
                        {item.current_price}
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No coins found matching &quot;{search}&quot;</p>
              )}
            </div>
          </div>
        </div>
      )}

      <hr />
      <div className="footerCont">
        <Footer />
      </div>
    </div>
  );
};

export default Coins;
