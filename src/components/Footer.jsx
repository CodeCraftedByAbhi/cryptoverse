import { FaBitcoinSign } from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaDiscord,
  FaLinkedin,
  FaRedditAlien,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="firstline">
        <div className="title">
          <FaBitcoinSign
            style={{
              height: "30px",
              width: "30px",
              rotate: "350deg",
              color: "#f4f4f4",
            }}
          />
          <h4>CryptoVerse</h4>
        </div>
        <div className="line"></div>
        <div className="social">
          <div className="social-icon">
            <FaFacebookF />
          </div>
          <div className="social-icon">
            <FaInstagram />
          </div>
          <div className="social-icon">
            <FaTwitter />
          </div>
          <div className="social-icon">
            <FaDiscord />
          </div>
          <div className="social-icon">
            <FaLinkedin />
          </div>
          <div className="social-icon">
            <FaRedditAlien />
          </div>
        </div>
      </div>
      <hr />
      <div className="secondline">
        <p>
          The purpose of this website is solely to display information regarding
          the Cryptocurrencies available on the CryptoVerse Application. It is
          not intended to offer access to any of such products and services. You
          may obtain access to such products and services on the Crypto.com App.
          <br />
          <br />
          Please note that the availability of the information on the Crypto.com
          App is subject to jurisdictional limitations. Crypto.com may not offer
          certain products, features and/or services on the Crypto.com App in
          certain jurisdictions due to potential or actual regulatory
          restrictions.
        </p>
      </div>
      <hr />
      <div className="thirdline">
        <div>
          <p>Copyright © - 2024 CryptoVerse. All rights reserved.</p>
        </div>
        <div>
          <p>| Made By Abhishek Das |</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
