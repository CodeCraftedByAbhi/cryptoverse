import { useEffect } from "react";
import Footer from "./Footer";
import { FaBitcoinSign } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  
  useEffect(() => {
    gsap.to("#bitcoinIcon, #cryptoTitle", {
      scrollTrigger: {
        trigger: "#bitcoinIcon",
        scrub: 1,
        invalidateOnRefresh: true,
      },
      opacity: 1,
      duration: 1.5,
      translateY: '0px',
    });
  }, []); // Empty dependency array ensures it only runs once when the component mounts

  return (
    <div>
      <div className="aboutcont">
        <FaBitcoinSign
          id="bitcoinIcon"
          style={{
            height: "100px",
            width: "100px",
            rotate: "350deg",
            color: "#f4f4f4",
            opacity: 0, // Initial opacity for GSAP animation
            transform: 'translateY(20px)' // Initial position for the animation
          }}
        />
        <h1 id="cryptoTitle" style={{ opacity: 0, transform: 'translateY(20px)' }}>CryptoVerse</h1>
        <br />
        <p>
          Welcome to CryptoVerse, your ultimate gateway to the world of
          cryptocurrencies and digital assets. Built with cutting-edge
          technology using React.js, CryptoVerse provides real-time data on over
          100+ cryptocurrency exchanges and 100+ digital currencies, offering
          you a comprehensive view of the current market trends, prices, and
          value fluctuations.
        </p>
        <br />
        <p>
          Our mission is to simplify the complex and rapidly evolving world of
          cryptocurrency by delivering clear, up-to-date information at your
          fingertips. Whether you&apos;re a seasoned trader, an investor, or
          simply curious about crypto, CryptoVerse empowers you with the tools
          and data to make informed decisions.
        </p>
        <br />
        <p>Key Features:</p>
        <ul>
          <li>Live tracking of top cryptocurrency prices and trends.</li>
          <li>In-depth information about over 100 crypto exchanges.</li>
          <li>
            A sleek, user-friendly interface designed for both novice and expert users.
          </li>
          <li>Real-time data updates to keep you in sync with the market.</li>
        </ul>
        <br />
        <p>
          At CryptoVerse, we believe in the future of decentralized finance, and
          we’re here to guide you through this exciting new digital economy.
        </p>
        <br />
        <p>Join us on this journey as we explore the CryptoVerse together!</p>
      <hr />
      <div className="footerCont">
        <Footer />
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
