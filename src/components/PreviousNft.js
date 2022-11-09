import react from "react";
import "../components/currentnft.css";
import dnft from "../assests/images/dummynft.png";
import { Link } from "react-router-dom";

function PreviousNft() {
  return (
    <>
      <div className=" current-nft-div2">
        <div className="current-grid-container">
          <div className="div-box-owned">
            <div className="current-certi-main">
              <div className="curren-certi-img">
                <img src={dnft} alt="" className="nfts-img4" />
              </div>
              <div className="current-certi-info">
                <div>
                  <h3 className="font-face-gm-aquire-bold">NFT Name</h3>
                  <p className="font-face-gm-aqiure">Secondory Text</p>
                </div>
                <div className="current-certi-mainbtn">
                  <Link to="/createcertificate">
                    <button className="current-button font-face-gm-aquire-bold">
                      Generate Certificate
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="div-box-owned">
            <div className="current-certi-main">
              <div className="curren-certi-img">
                <img src={dnft} alt="" className="nfts-img4" />
              </div>
              <div className="current-certi-info">
                <div>
                  <h3 className="font-face-gm-aquire-bold">NFT Name</h3>
                  <p className="font-face-gm-aqiure">Secondory Text</p>
                </div>
                <div className="current-certi-mainbtn">
                  <Link to="/createcertificate">
                    <button className="current-button font-face-gm-aquire-bold">
                      Generate Certificate
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="div-box-owned">
            <div className="current-certi-main">
              <div className="curren-certi-img">
                <img src={dnft} alt="" className="nfts-img4" />
              </div>
              <div className="current-certi-info">
                <div>
                  <h3 className="font-face-gm-aquire-bold">NFT Name</h3>
                  <p className="font-face-gm-aqiure">Secondory Text</p>
                </div>
                <div className="current-certi-mainbtn">
                  <Link to="/createcertificate">
                    <button className="current-button font-face-gm-aquire-bold">
                      Generate Certificate
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="div-box-owned">
            <div className="current-certi-main">
              <div className="curren-certi-img">
                <img src={dnft} alt="" className="nfts-img4" />
              </div>
              <div className="current-certi-info">
                <div>
                  <h3 className="font-face-gm-aquire-bold">NFT Name</h3>
                  <p className="font-face-gm-aqiure">Secondory Text</p>
                </div>
                <div className="current-certi-mainbtn">
                  <Link to="/createcertificate">
                    <button className="current-button font-face-gm-aquire-bold">
                      Generate Certificate
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="div-box-owned">
            <div className="current-certi-main">
              <div className="curren-certi-img">
                <img src={dnft} alt="" className="nfts-img4" />
              </div>
              <div className="current-certi-info">
                <div>
                  <h3 className="font-face-gm-aquire-bold">NFT Name</h3>
                  <p className="font-face-gm-aqiure">Secondory Text</p>
                </div>
                <div className="current-certi-mainbtn">
                  <Link to="/createcertificate">
                    <button className="current-button font-face-gm-aquire-bold">
                      Generate Certificate
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PreviousNft;
