import react from "react";
import "../components/ownershipcertificate.css";
import dnft from "../assests/images/dummynft.png";
import ownnft2 from "../assests/images/ownnft2.png";
import ownnft3 from "../assests/images/ownnft3.png";
import { Link } from "react-router-dom";

function OwnershipCertificate() {
  return (
    <>
      <div className="ownership-grid-container">
        <div className="ownership-flex-container">
          <div className="ownrship-certi-main">
            <div className="ownership-certi-img">
              <img src={dnft} alt="" className="nfts-img4" />
            </div>

            <div className="ownership-certi-info">
              <div className="certi-info1">
                <h3>Ownership Certificate</h3>
              </div>
              <div className="certi-info2"> Date: xx/xx/xxxx To xx/xx/xxxx</div>
            </div>
          </div>
          <div className="p-btn-main">
            <button className="ownership-btn">
              Share Certificate <Link to="/singlecertificate"></Link>
            </button>
          </div>
        </div>
        {/* <div className="ownership-flex-container">
          <div className="ownrship-certi-main">
            <div className="ownership-certi-img">
              <img src={ownnft2} alt="" className="nfts-img4" />
            </div>

            <div className="ownership-certi-info">
              <div>
                <h3>Ownership Certificate</h3>
              </div>
              <div> Date: xx/xx/xxxx To xx/xx/xxxx</div>
            </div>
            <div className="p-btn-main">
              <button className="ownership-btn">
                Share Certificate<Link to="/singlecertificate"></Link>{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="ownership-flex-container">
          <div className="ownrship-certi-main">
            <div className="ownership-certi-img">
              <img src={ownnft3} alt="" className="nfts-img4" />
            </div>

            <div className="ownership-certi-info">
              <div>
                <h3>Ownership Certificate</h3>
              </div>
              <div> Date: xx/xx/xxxx To xx/xx/xxxx</div>
            </div>
            <div className="p-btn-main">
              <button className="ownership-btn">
                Share Certificate <Link to="/singlecertificate"></Link>
              </button>
            </div>
          </div>
        </div>
        <div className="ownership-flex-container">
          <div className="ownrship-certi-main">
            <div className="ownership-certi-img">
              <img src={dnft} alt="" className="nfts-img4" />
            </div>

            <div className="ownership-certi-info">
              <div>
                <h3>Ownership Certificate</h3>
              </div>
              <div> Date: xx/xx/xxxx To xx/xx/xxxx</div>
            </div>
            <div className="p-btn-main">
              <button className="ownership-btn">
                Share Certificate <Link to="/singlecertificate"></Link>
              </button>
            </div>
          </div>
        </div>
        <div className="ownership-flex-container">
          <div className="ownrship-certi-main">
            <div className="ownership-certi-img">
              <img src={ownnft2} alt="" className="nfts-img4" />
            </div>

            <div className="ownership-certi-info">
              <div>
                <h3>Ownership Certificate</h3>
              </div>
              <div> Date: xx/xx/xxxx To xx/xx/xxxx</div>
            </div>
            <div className="p-btn-main">
              {" "}
              <Link to="/singlecertificate">
                <button className="ownership-btn">Share Certificate </button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
export default OwnershipCertificate;
