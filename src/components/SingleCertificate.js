import React from "react";
import "../components/singlecertificate.css";
import dnft from "../assests/images/dummynft.png";
import date from "../assests/images/date.svg";
import { Link } from "react-router-dom";
import logo from "../assests/images/logo1.png";

function SingleCertificate() {
  return (
    <>
      <div className="p-creation-certi-main">
        <div className="create-certi-div2">
          <div className="nft-name font-face-gm-aquire-bold"> NFT Name:</div>
          <div className="p-creation-certficate">
            <img src={dnft} alt="" className="singlecertificate-nfts-img4" />

            <div className="creation-certi-info">
              <h3 className="creation-nft-details font-face-gm-medium">
                NFT Details
              </h3>
              <div className="input-main">
                <div className="datepicker">FROM </div>
                <img src={date} alt="" className="certificate-date-icon" />
                <h3 className="date-input1 font-face-gm">DD/MM/YYYY</h3>
              </div>
              <div className="input-main">
                <div className="datepicker">TO </div>
                <img src={date} alt="" className="certificate-date-icon" />
                <h3 className="date-input1 font-face-gm">DD/MM/YYYY</h3>
              </div>
            </div>
          </div>
          <div className="cetificate-name font-face-gm-aquire-bold">
            Certificate Preview:
          </div>
          <div className="p-single-certificate-ownership">
            <div className="certificate-main">
              <div className="p-certificate font-face-gm-semibold">
                CERTIFICATE
              </div>
              <div className="p-signle-certificate-content">
                <img
                  src={dnft}
                  alt=""
                  className="singlecertificate-nfts-img4"
                />
                <div className="single-certi-info2">
                  <h3 className="p-owner-name font-face-gm-semibold">
                    Owner Name
                  </h3>
                  <h3 className="p-owner-title font-face-gm-bold">NFT Title</h3>
                  <div className="p-certi-content10">
                    <div className="font-face-gm-extralight  owner-period1 ">
                      Ownership Period
                    </div>
                    <div className="font-face-gm-extralight owner-period2">
                      10th Oct 2022 To 12th Oct 2022
                    </div>
                  </div>
                  <div className="p-certi-content11">
                    <div className="font-face-gm-extralight">
                      Nft was verified on
                    </div>
                    <div className="font-face-gm-extralight ">Verified By</div>
                  </div>
                  <div className="p-certi-content12">
                    <div className="font-face-gm-extralight  owner-period3">
                      17/10/2022
                    </div>
                    <img
                      src={logo}
                      alt=""
                      className="p-nft-verifify own-verify "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="p-mint-nft font-face-gm-bold">SHARE</button>
        </div>
      </div>
    </>
  );
}
export default SingleCertificate;
