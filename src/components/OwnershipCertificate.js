import react from "react";
import "../components/ownershipcertificate.css";
// import dnft from "../assests/images/dummynft.png";
// import ownnft2 from "../assests/images/ownnft2.png";
// import ownnft3 from "../assests/images/ownnft3.png";
import nft1 from "../assests/images/nft1.webp";
import nft2 from "../assests/images/nft2.jpg";
import nft3 from "../assests/images/nft3.jpg";
import nft4 from "../assests/images/nft4.jpeg";
import nft5 from "../assests/images/nft5.webp";
// import nft6 from "../assests/images/nft6.jpeg";
import { Link } from "react-router-dom";

function OwnershipCertificate() {
  return (
    <>
      <div className="ownership-grid-container">
        <div className="z-index-main-div">
          <div className="div-box-owned">
            <div className="ownrship-certi-main">
              <div className="ownership-certi-img">
                <img src={nft1} alt="" className="nfts-img4" />
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
                  <div className="font-face-gm-aqiure  owner-date2">
                    {" "}
                    To date:xx/xx/xxxx
                  </div>
                </div>
              </div>
            </div>
            <div className="p-btn-main ">
              <Link to="/singlecertificate">
                <button className="ownership-btn  font-face-gm-aquire-bold ">
                  Share Certificate
                </button>
              </Link>
            </div>
          </div>

          <div className="div-box-owned">
            <div className="ownrship-certi-main">
              <div className="ownership-certi-img">
                <img src={nft2} alt="" className="nfts-img4" />
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
                  <div className="font-face-gm-aqiure owner-date2">
                    {" "}
                    To date:xx/xx/xxxx
                  </div>
                </div>
              </div>
            </div>
            <div className="p-btn-main ">
              <Link to="/singlecertificate">
                <button className="ownership-btn  font-face-gm-aquire-bold ">
                  Share Certificate
                </button>
              </Link>
            </div>
          </div>
          <div className="div-box-owned">
            <div className="ownrship-certi-main">
              <div className="ownership-certi-img">
                <img src={nft3} alt="" className="nfts-img4" />
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
                  <div className="font-face-gm-aqiure owner-date2">
                    {" "}
                    To date:xx/xx/xxxx
                  </div>
                </div>
              </div>
            </div>
            <div className="p-btn-main ">
              <Link to="/singlecertificate">
                <button className="ownership-btn  font-face-gm-aquire-bold ">
                  Share Certificate
                </button>
              </Link>
            </div>
          </div>
          <div className="div-box-owned">
            <div className="ownrship-certi-main">
              <div className="ownership-certi-img">
                <img src={nft4} alt="" className="nfts-img4" />
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
                  <div className="font-face-gm-aqiure owner-date2">
                    {" "}
                    To date:xx/xx/xxxx
                  </div>
                </div>
              </div>
            </div>
            <div className="p-btn-main ">
              <Link to="/singlecertificate">
                <button className="ownership-btn  font-face-gm-aquire-bold ">
                  Share Certificate
                </button>
              </Link>
            </div>
          </div>
          <div className="div-box-owned">
            <div className="ownrship-certi-main">
              <div className="ownership-certi-img">
                <img src={nft5} alt="" className="nfts-img4" />
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
                  <div className="font-face-gm-aqiure owner-date2">
                    {" "}
                    To date:xx/xx/xxxx
                  </div>
                </div>
              </div>
            </div>
            <div className="p-btn-main ">
              <Link to="/singlecertificate">
                <button className="ownership-btn  font-face-gm-aquire-bold ">
                  Share Certificate
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OwnershipCertificate;
