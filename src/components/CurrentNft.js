import react from "react";
import "../components/currentnft.css";
import dnft from "../assests/images/dummynft.png";

function CurrentNft() {
  return (
    <>
      <div className="current-grid-container">
        <div className="current-certi-main">
          <div className="curren-certi-img">
            <img src={dnft} alt="" className="nfts-img4" />
          </div>
          <div className="current-certi-info">
            <div>
              <h3>NFT Name</h3>
              <p>Secondory Text</p>
            </div>
            <div className="current-certi-mainbtn">
              <button className="button">Generate Certificate</button>
            </div>
          </div>
        </div>
        <div className="current-certi-main">
          <div className="curren-certi-img">
            <img src={dnft} alt="" className="nfts-img4" />
          </div>
          <div className="current-certi-info">
            <div>
              <h3>NFT Name</h3>
              <p>Secondory Text</p>
            </div>
            <div className="current-certi-mainbtn">
              <button className="button">Generate Certificate</button>
            </div>
          </div>
        </div>{" "}
        <div className="current-certi-main">
          <div className="curren-certi-img">
            <img src={dnft} alt="" className="nfts-img4" />
          </div>
          <div className="current-certi-info">
            <div>
              <h3>NFT Name</h3>
              <p>Secondory Text</p>
            </div>
            <div className="current-certi-mainbtn">
              <button className="button">Generate Certificate</button>
            </div>
          </div>
        </div>
        <div className="current-certi-main">
          <div className="curren-certi-img">
            <img src={dnft} alt="" className="nfts-img4" />
          </div>
          <div className="current-certi-info">
            <div>
              <h3>NFT Name</h3>
              <p>Secondory Text</p>
            </div>
            <div className="current-certi-mainbtn">
              <button className="button">Generate Certificate</button>
            </div>
          </div>
        </div>{" "}
        <div className="current-certi-main">
          <div className="curren-certi-img">
            <img src={dnft} alt="" className="nfts-img4" />
          </div>
          <div className="current-certi-info">
            <div>
              <h3>NFT Name</h3>
              <p>Secondory Text</p>
            </div>
            <div className="current-certi-mainbtn">
              <button className="button">Generate Certificate</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CurrentNft;
