// import React from "react";
import "../components/singlecertificate.css";
import dnft from "../assests/images/dummynft.png";
import date from "../assests/images/date.svg";
import React, { useRef } from "react";
import * as htmlToImage from "html-to-image";
import logo from "../assests/images/logo1.png";
function CreationCertificate() {
  // const domEl = useRef(null);

  // const downloadImage = async () => {
  //   const dataUrl = await htmlToImage.toPng(domEl.current);

  //   const link = document.createElement("a");
  //   link.download = "html-to-img.png";
  //   link.href = dataUrl;
  //   link.click();
  // };
  return (
    <>
      {/* <div className="p-signle-certi-main">
        <div className="nft-name"> NFT Name:</div>
        <div className="p-creation-certficate">
       

          <div className="p-single-certi-info">
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
              <img src={img1} className="p-single-certi-img" />
              <div className="single-certi-info2">
                <h3>Owner Name</h3>
                <h3>NFT Title</h3>
                <div>Owning Date</div>
                <div>Current Date</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="p-creation-certi-main">
        <div className="create-certi-div2">
          <div className="nft-name font-face-gm-aquire-bold"> NFT Name:</div>
          <div className="p-creation-certficate">
            {/* <img src={dnft} alt="" className="singlecertificate-nfts-img4" /> */}

            <div className="creation-certi-info">
              <h3 className="creation-nft-details font-face-gm-medium">
                NFT Details
              </h3>

              <div className="input-main">
                <div className="datepicker">FROM </div>
                <img src={date} alt="" className="certificate-date-icon" />
                <div className="div5">
                  <h3 className="date-input1 font-face-gm">DD/MM/YYYY</h3>
                </div>
              </div>

              <div className="input-main">
                <div className="datepicker">TO </div>
                <img src={date} alt="" className="certificate-date-icon" />
                <div className="div5">
                  <h3 className="date-input1 font-face-gm">DD/MM/YYYY</h3>
                  {/* <input
                    type="text"
                    className="date-input1"
                    id="lname-create-certi"
                    name="lname-create-certi"
                    placeholder="DD/MM/YYYY"
                  /> */}
                </div>
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
                  <h3 className="p-owner-title">NFT Title</h3>
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
          <button className="p-mint-nft font-face-gm-bold">MINT NFT</button>
          {/* <button onclick="{downloadImage}">Download Image</button> */}
        </div>
      </div>
    </>
  );
}
export default CreationCertificate;
