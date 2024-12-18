import { useState, useEffect } from "react";
import { BaseUrl } from "./BaseUrl";
import Footer from "./Footer";
import OurModel from "./OurModel";
import { Link } from "react-router-dom";

const Exchanges = () => {
  const [exchange, setExchange] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getExchangeData = async () => {
      try {
        const response = await fetch(`${BaseUrl}/exchanges`);
        if (!response.ok) {
          throw new Error("Failed to fetch exchanges data");
        }
        const data = await response.json();
        console.log(data);
        setExchange(data);
        setLoading(false);
      } catch (error) {
        console.log("Error while fetching data: ", error);
        setError(error.message);
        setLoading(false);
      }
    };
    getExchangeData();
  }, []);

  return (
    <div className="exchangeContainer">
      <div className="first_section">
        <div className="head">
          <h1>Exchanges</h1>
        </div>
      </div>

      <div className="second_section">
        <div className="exchange_box">
          <div className="heading">
            <div className="data_keeper">Exchanges</div>
            <div className="data_keeper">Name</div>
            <div className="data_keeper">Rank</div>
            <div className="data_keeper">Current Volume (BTC)</div>
          </div>
          <hr />

          {/* Conditional Rendering for Loading, Error, and Data */}
          {loading ? (
            <p>Loading exchanges...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="data_exchange">
              {exchange.length > 0 ? (
                exchange.map((item) => (
                  <div className="heading1" key={item.id}> {/* Use item.id as a unique key */}
                    <div className="data_keeper" id="icon">
                      <img
                        src={item.image}
                        alt={`${item.name} logo`} 
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                    <div className="data_keeper" id="name">{item.name}</div>
                    <div className="data_keeper" id="rank">#{item.trust_score_rank}</div>
                    <div className="data_keeper" id="volume">
                      {item.trade_volume_24h_btc ? item.trade_volume_24h_btc.toFixed(2) : "N/A"}
                    </div>
                  </div>
                ))
              ) : (
                <p>No exchange data available.</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="third_section">
        <div className="model">
          <OurModel />
        </div>
        <div className="coin_link">
          <h3>View 100+ coins and analyze through recent trends.</h3>
          <Link to="/coins">
            <button>View Coins</button>
          </Link>
        </div>
      </div>
      <hr />
      <div className="footeraCont">
        <Footer />
      </div>
    </div>
  );
};

export default Exchanges;
