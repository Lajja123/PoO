import React from "react";
import bigbg from "../assests/images/background.svg";
import topwave from "../assests/images/top-waves.svg";
import "../components/landingpage.css";
import nftvideo from "../assests/video.mp4";
import circle1 from "../assests/images/circle1.svg";
import abort1 from "../assests/images/abortwave.svg";

function LandingPage() {
  return (
    <>
      <section className="p-main-container">
        <div className="p-connect-btn-main">
          <button className="p-connect-btn">Connect Wallet</button>
          <img src={topwave} alt="waves" className="p-top1-waves" />
        </div>
        <section className="p-hero-main">
          <div className="d-hero">
            <video autoPlay loop muted className="p-middle-video">
              <source src={nftvideo} type="video/mp4" />
              <source src={nftvideo} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
            <img src={topwave} alt="waves" className="p-top2-waves" />
          </div>
          <div className="bg-main">
            <img src={circle1} alt="" className="p-circle1" />
            <img src={circle1} alt="" className="p-circle2" />
            <img src={abort1} alt="abort" className="p-abort-wave" />
            <img src={circle1} alt="" className="p-circle3" />
            <img src={circle1} alt="" className="p-circle4" />
            <span className="p-nft-content">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
            <div className="">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>

              <div class="cabin"></div>
              <div class="cabin"></div>
              <div class="cabin"></div>
              <div class="cabin"></div>
              <div class="cabin"></div>
              <div class="cabin"></div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default LandingPage;
