import React from "react";
import bigbg from "../assests/images/background.svg";
import topwave from "../assests/images/top-waves.svg";
import "../components/landingpage.css";
import nftvideo from "../assests/video.mp4";
import circle2 from "../assests/images/circle2.svg";
import circle1 from "../assests/images/circle1.svg";
import abort1 from "../assests/images/abortwave.svg";
import img1 from "../assests/images/img1.svg";
import img2 from "../assests/images/img2.svg";
import img3 from "../assests/images/img3.svg";
import img4 from "../assests/images/img4.svg";
import img5 from "../assests/images/img5.svg";
import img6 from "../assests/images/img6.svg";
import img7 from "../assests/images/img7.svg";
import img8 from "../assests/images/img8.svg";
import coin from "../assests/images/coin.svg";
import certificate from "../assests/images/certificate.svg";
import certiImg from "../assests/images/certificate-img.svg";
import verify from "../assests/images/verify.svg";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  const [walletAddress, setWalletAddress] = useState("");
  useEffect(() => {
    getCurrentWalletConnected();
    addWalleteListener();
  });
  const connectWallet = async () => {
    if (typeof window != "undefined" && window.ethereum != "undefined") {
      try {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(account[0]);
        console.log(account[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.log("Please Install Metamast");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && window.ethereum != "undefined") {
      try {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (account.length > 0) {
          setWalletAddress(account[0]);
          console.log(account[0]);
        } else {
          console.log("connect to metamask using connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.log("Please Install Metamast");
    }
  };

  const addWalleteListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountChanged", (account) => {
        setWalletAddress(account[0]);
        console.log(account[0]);
      });
    } else {
      setWalletAddress("");
      console.log("Please Install Metamast");
    }
  };
  return (
    <>
      <section className="p-main-container">
        <div className="p-navbar-main">
          <button onClick={connectWallet} className="p-connect-btn">
            <Link to="/register">
              {walletAddress && walletAddress.length > 0
                ? `Connected: ${walletAddress.substring(
                    0,
                    6
                  )}...${walletAddress.substring(38)}`
                : " Connect Wallet"}
            </Link>
          </button>
          <img src={topwave} alt="waves" className="p-top1-waves" />
        </div>
        <div className="d-hero">
          <video autoPlay loop muted className="p-middle-video">
            <source src={nftvideo} type="video/mp4" />
            <source src={nftvideo} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>

        <section className="p-hero-main">
          <section className="p-landingpage-section2">
            <img src={topwave} alt="waves" className="p-top2-waves" />

            <div className="p-nft-content font-face-gm">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <img src={circle1} alt="" className="p-circle1" />
            <div className="temp-svg">
              <img src={circle1} alt="" className="p-circle2" />
            </div>
            <img src={abort1} alt="abort" className="p-abort-wave" />
            <img src={circle1} alt="" className="p-circle3" />
            <img src={circle1} alt="" className="p-circle4" />

            <div className="p-nfts-main">
              <img src={img1} alt="" className="nfts p-img1" />
              <img src={img2} alt="" className="nfts p-img2" />
              <img src={img3} alt="" className="nfts p-img3" />
              <img src={img4} alt="" className="nfts p-img4" />
              <img src={img5} alt="" className="nfts p-img5" />
              <img src={img6} alt="" className="nfts p-img6" />
              <img src={img7} alt="" className="nfts p-img7" />
              <img src={img8} alt="" className="nfts p-img8" />
            </div>
          </section>
          <section className="p-landingpage-section3"></section>
          <img src={coin} alt="" className="p-nft-coin" />

          <div className="p-circle-main">
            <img src={circle1} alt="" className="p-circle-5" />
          </div>
          <div className="p-nft-certi-main-poo">
            <img src={certificate} alt="" className="p-nft-certificate" />
            <img src={certiImg} alt="" className="p-nft-certificateImage" />
            <div className="certi-title font-face-gm-extralight ">
              Certificate Of Ownership
            </div>
            <div className="p-certi-content">
              <div className="font-face-gm">Nft was verified on</div>
              <div className="font-face-gm">Verified By</div>
            </div>
            <div className="p-certi-content2">
              <div className="font-face-gm-thin">17/10/2022</div>
              <img src={verify} alt="" className="p-nft-verifify" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default LandingPage;
