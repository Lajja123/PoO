import React from "react";
import "../components/singlecertificate.css";
import dnft from "../assests/images/dummynft.png";
function SingleCertificate() {
  return (
    <>
      <div className="p-signle-certi-main">
        <div className="nft-name"> NFT Name:</div>
        <div className="p-single-certficate">
          <img src={dnft} alt="" className="singlecertificate-nfts-img4" />

          <div className="single-certi-info">
            <h3>NFT Details</h3>
            <div>Frome Date: dd/mm/yyyy</div>
            <div>To Date: dd/mm/yyyy</div>
          </div>
        </div>
        <div className="cetificate-name">Certificate</div>
        <div className="p-single-certificate-ownership">
          <div className="certificate-main">
            <div className="p-certificate">CERTIFICATE</div>
            <div className="p-signle-certificate-content">
              <img src={dnft} alt="" className="singlecertificate-nfts-img4" />
              <div className="single-certi-info2">
                <h3>Owner Name</h3>
                <h3>NFT Title</h3>
                <div>Owning Date</div>
                <div>Current Date</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleCertificate;
