import React from "react";
import bigbg from "../assests/images/background.svg";
import topwave from "../assests/images/top-waves.svg";
import "../components/landingpage.css";
import nftvideo from "../assests/video.mp4";
import circle2 from "../assests/images/circle2.svg";
import circle1 from "../assests/images/circle1.svg";
import abort1 from "../assests/images/abortwave.svg";

function LandingPage() {
  return (
    <>
      <section className="p-main-container">
        <section className="p-hero-main">
          <div className="p-navbar-main">
            <button className="p-connect-btn">Connect Wallet</button>
            <img src={topwave} alt="waves" className="p-top1-waves" />
          </div>
          <div className="d-hero">
            <video autoPlay loop muted className="p-middle-video">
              <source src={nftvideo} type="video/mp4" />
              <source src={nftvideo} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
            <div style={{ height: "auto" }}>
              <img src={topwave} alt="waves" className="p-top2-waves" />
            </div>
          </div>

          <div className="bg-main">
            <div className="p-nft-content">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <img src={circle1} alt="" className="p-circle1" />
            <div className="temp-svg">
              <img src={circle1} alt="" className="p-circle2" />
            </div>
            <img src={abort1} alt="abort" className="p-abort-wave" />
            <img src={circle1} alt="" className="p-circle3" />
            <img src={circle1} alt="" className="p-circle4" />

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
