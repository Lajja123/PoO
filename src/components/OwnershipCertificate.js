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
        <div className="z-index-main-div">
          <div className="div-box-owned">
            <div className="ownrship-certi-main">
              <div className="ownership-certi-img">
                <img src={dnft} alt="" className="nfts-img4" />
              </div>
              <div className="ownership-certi-info">
                <div className="font-face-gm-aquire-bold ">
                  <h3>Ownership Certificate</h3>
                </div>
                <div className="date-flex">
                  <div className="font-face-gm-aqiure">
                    {" "}
                    from Date:13/08/2005
                  </div>
                  <div className="font-face-gm-aqiure"> To date:xx/xx/xxxx</div>
                </div>
              </div>
            </div>
            <div className="p-btn-main">
              <button className="ownership-btn  font-face-gm-aquire-bold">
                Share Certificate <Link to="/singlecertificate"></Link>
              </button>
            </div>
          </div>

          <div className="div-box-owned">
            <div className="ownrship-certi-main">
              <div className="ownership-certi-img">
                <img src={dnft} alt="" className="nfts-img4" />
              </div>
              <div className="ownership-certi-info">
                <div className="font-face-gm-aquire-bold ">
                  <h3>Ownership Certificate</h3>
                </div>
                <div className="date-flex">
                  <div className="font-face-gm-aqiure">
                    {" "}
                    from Date:xx/xx/xxxx
                  </div>
                  <div className="font-face-gm-aqiure"> To date:xx/xx/xxxx</div>
                </div>
              </div>
            </div>
            <div className="p-btn-main">
              <button className="ownership-btn  font-face-gm-aquire-bold">
                Share Certificate <Link to="/singlecertificate"></Link>
              </button>
            </div>
          </div>
          <div className="div-box-owned">
            <div className="ownrship-certi-main">
              <div className="ownership-certi-img">
                <img src={dnft} alt="" className="nfts-img4" />
              </div>
              <div className="ownership-certi-info">
                <div className="font-face-gm-aquire-bold ">
                  <h3>Ownership Certificate</h3>
                </div>
                <div className="date-flex">
                  <div className="font-face-gm-aqiure">
                    {" "}
                    from Date:xx/xx/xxxx
                  </div>
                  <div className="font-face-gm-aqiure"> To date:xx/xx/xxxx</div>
                </div>
              </div>
            </div>
            <div className="p-btn-main">
              <button className="ownership-btn  font-face-gm-aquire-bold">
                Share Certificate <Link to="/singlecertificate"></Link>
              </button>
            </div>
          </div>
          <div className="div-box-owned">
            <div className="ownrship-certi-main">
              <div className="ownership-certi-img">
                <img src={dnft} alt="" className="nfts-img4" />
              </div>
              <div className="ownership-certi-info">
                <div className="font-face-gm-aquire-bold ">
                  <h3>Ownership Certificate</h3>
                </div>
                <div className="date-flex">
                  <div className="font-face-gm-aqiure">
                    {" "}
                    from Date:xx/xx/xxxx
                  </div>
                  <div className="font-face-gm-aqiure"> To date:xx/xx/xxxx</div>
                </div>
              </div>
            </div>
            <div className="p-btn-main">
              <button className="ownership-btn  font-face-gm-aquire-bold">
                Share Certificate <Link to="/singlecertificate"></Link>
              </button>
            </div>
          </div>
          <div className="div-box-owned">
            <div className="ownrship-certi-main">
              <div className="ownership-certi-img">
                <img src={dnft} alt="" className="nfts-img4" />
              </div>
              <div className="ownership-certi-info">
                <div className="font-face-gm-aquire-bold ">
                  <h3>Ownership Certificate</h3>
                </div>
                <div className="date-flex">
                  <div className="font-face-gm-aqiure">
                    {" "}
                    from Date:xx/xx/xxxx
                  </div>
                  <div className="font-face-gm-aqiure"> To date:xx/xx/xxxx</div>
                </div>
              </div>
            </div>
            <div className="p-btn-main ">
              <button className="ownership-btn  font-face-gm-aquire-bold ">
                Share Certificate <Link to="/singlecertificate"></Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OwnershipCertificate;
