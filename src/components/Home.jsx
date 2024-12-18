import { SiTicktick } from "react-icons/si";
import image1 from "../assets/buy_and_sell_global-removebg-preview.png";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { GoGraph } from "react-icons/go";
import Faq from "./Faq";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  useEffect(() => {
    gsap.to("#transformer", {
      scrollTrigger: {
        trigger: "#transformer",
        start: "top 70%",
        end: "center 80%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
      rotateX: "0deg",
    });

    gsap.to("#firstheader", {
      scrollTrigger: {
        trigger: "#firstheader",
        scrub: 1,
        invalidateOnRefresh: true,
      },
      opacity: "100%",
      duration: 1.5,
      translateY: "0px",
    });

    gsap.to("#firstinfo", {
      scrollTrigger: {
        trigger: "#firstinfo",
        start: "top 80%",
        end: "top center",
        scrub: 1,
        invalidateOnRefresh: true,
      },
      opacity: "100%",
      duration: 1.5,
      translateY: "0px",
    });
  }, []);

  return (
    <div className="hero_sec">
      <div className="cont">
        <h1>The World&apos;s Premier Crypto Analysis Platform</h1>
        <div id="firstheader">
          <h2>View Bitcoin, Ethereum and 100+ Cryptocurrencies</h2>
          <div>
            <ul>
              <li>
                <SiTicktick color="#007aff" /> View <span>100+ exchanges</span>
              </li>
              <li>
                <SiTicktick color="#007aff" /> Analyze{" "}
                <span>100+ Crypto Currencies</span>
              </li>
              <li>
                <SiTicktick color="#007aff" /> <span>100% trustable</span> platform
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="image">
        <div className="imgCont">
          <div className="transformer" id="transformer">
            <img src={image1} alt="Global crypto analysis representation" />
          </div>
        </div>
      </div>
      <div className="lowerInfo" id="firstinfo">
        <h3>CryptoVerse Prices</h3>
        <h1>View Bitcoin, Ethereum, and 100+ Cryptocurrencies</h1>
        <button aria-label="Check Crypto Prices">
          <Link to="/exchanges">
            Check Crypto Prices <GoGraph style={{ margin: "0 10px" }} />
          </Link>
        </button>
      </div>
      <div className="faq">
        <Faq />
      </div>
      <hr />
      <div className="footeraCont">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
