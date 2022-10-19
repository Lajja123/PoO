import React from "react";
import bigbg from "../assests/images/background.svg";
import topwave from "../assests/images/top-waves.svg";
import "../components/landingpage.css";
import nftvideo from "../assests/video.mp4";

function LandingPage() {
  return (
    <>
      <section className="p-main-container">
        <section className="p-hero-main">
          <div className="p-logo">
            <img src="" alt="" />
          </div>
          <div className="p-connect">
            <button className="d-connect-btn">Connect Wallet</button>
          </div>

          <div className="p-hero">
            <img className="p-hero-top1-waves" src={topwave} alt="waves" />
            <div className="p-hero-video">
              <video
                autoPlay
                loop
                width="100"
                controls
                className="p-middle-video"
              >
                <source src={nftvideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <img className="p-hero-top2-waves" src={topwave} alt="waves" />
          </div>
          <img className="p-hero-bg1" src={bigbg} alt="logo" />
        </section>
      </section>
    </>
  );
}

export default LandingPage;
