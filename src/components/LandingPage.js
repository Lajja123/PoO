import React from "react";
import Cookies from "universal-cookie";

//wallet assets
// import "@rainbow-me/rainbowkit/styles.css";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";

// import { configureChains, createClient, goerli, WagmiConfig } from "wagmi";
// import {
//   mainnet,
//   polygon,
//   optimism,
//   arbitrum,
//   polygonMumbai,
// } from "wagmi/chains";
// import { alchemyProvider } from "wagmi/providers/alchemy";
// import { publicProvider } from "wagmi/providers/public";
//-------------------------------------------//

// import UserProfile from './userProfile';
import bigbg from "../assests/images/background.svg";
import topwave from "../assests/images/top-waves.svg";
import "../components/landingpage.css";
import nftvideo from "../assests/video.mp4";
import circle2 from "../assests/images/circle2.svg";
import circle1 from "../assests/images/circle1.svg";
import abort1 from "../assests/images/abortwave.svg";
import img1 from "../assests/images/img1.svg";
import img2 from "../assests/images/img2.svg";
import img3 from "../assests/images/img3.svg";
import img4 from "../assests/images/img4.svg";
import img5 from "../assests/images/img5.svg";
import img6 from "../assests/images/img6.svg";
import img7 from "../assests/images/img7.svg";
import img8 from "../assests/images/img8.svg";
import coin from "../assests/images/coin.svg";
import certificate from "../assests/images/certificate.svg";
import certiImg from "../assests/images/certificate-img.svg";
import verify from "../assests/images/logo1.png";
import Poo from "../artifacts/contracts/Poo.sol/Poo.json";
import { ethers } from "ethers";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LandingPage() {
  const cookies = new Cookies();
  const [loading, setLoading] = useState(true);
  const [walletAddress, setWalletAddress] = useState("");
  const navigate = useNavigate();
  const Poo_contract_address = "0x41abd4773aC12e1C68F8b16669B0fE383944EFB4";

  const [popup, setPopup] = useState(false);
  // console.log(signer);

  useEffect(() => {
    // getCurrentWalletConnected();
    // addWalleteListener();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  //wallet connect

  // const connectwlt = async () => {
  //   const { chains, provider } = configureChains(
  //     [polygonMumbai, goerli],
  //     [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
  //   );

  //   const { connectors } = getDefaultWallets({
  //     appName: "My RainbowKit App",
  //     chains,
  //   });

  //   const wagmiClient = createClient({
  //     autoConnect: true,
  //     connectors,
  //     provider,
  //   });
  // };

  const changeNetwork = async () => {
    console.log("oulalal, switch to the correct network");
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x13881" }],
      });
      console.log("You have switched to the right network");
    } catch (switchError) {
      // The network has not been added to MetaMask
      if (switchError.code === 4902) {
        console.log("this chainId does not exist");
      }
      console.log("Cannot switch to the network");
    }
  };

  const connectWallet = async () => {
    const rider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = rider.getSigner();
    if (typeof window != "undefined" && window.ethereum != "undefined") {
      try {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        console.log(walletAddress);
        console.log(account[0]);

        const { chainId } = await rider.getNetwork();
        console.log(chainId);
        const polygon_chainId = "0x13881"; //Its in HEX of 647426021
        if (chainId == polygon_chainId) {
          setWalletAddress(account[0]);
          const userDetails = new ethers.Contract(
            Poo_contract_address,
            Poo.abi,
            signer
          );
          const fetchdata = await userDetails.getUser();
          console.log(fetchdata);
          if (fetchdata.email === "") {
            navigate("/register");
          } else {
            navigate("/currentnft");
          }
          console.log(account[0]);
          // console.log("Bravo!, you are on the correct network");
        } else {
          console.log("hello");
          setPopup(true);
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.log("Please Install Metamask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && window.ethereum != "undefined") {
      try {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (account.length > 0) {
          setWalletAddress(account[0]);
          console.log(account[0]);
        } else {
          console.log("connect to metamask using connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      alert("Please Install Metamask");
    }
  };

  const addWalleteListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountChanged", (account) => {
        setWalletAddress(account[0]);
        console.log(account[0]);
      });
    } else {
      setWalletAddress("");
      console.log("Please Install Metamask");
    }
  };
  console.log(loading);
  return (
    <>
      <section className="poo-main-section">
        {loading ? (
          <div class="center">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
          </div>
        ) : (
          <>
            <div className="poo-section1-landingpage">
              <div className="logo-landingpage-main">
                <img src={verify} className="logo-register" />
              </div>
              <div className="p-navbar-main">
                <button
                  onClick={() => {
                    connectWallet();
                  }}
                  className="p-connect-btn font-face-gm-aqiure"
                >
                  {walletAddress && walletAddress.length > 0
                    ? `Connected: ${walletAddress.substring(
                        0,
                        6
                      )}...${walletAddress.substring(38)}`
                    : " Connect Wallet"}
                </button>
              </div>
              <div className="p-wave1-main">
                <img src={topwave} alt="waves" className="p-top1-waves" />
              </div>
              <div className="d-hero">
                <video autoPlay loop muted className="p-middle-video">
                  <source src={nftvideo} type="video/mp4" />
                  <source src={nftvideo} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-wave2-main">
                <img src={topwave} alt="waves" className="p-top2-waves" />
              </div>
            </div>

            <section className="p-section2-landingpage">
              <div className="section2-main-div">
                <div className="p-nft-content font-face-gm">
                  <h3>
                    "Claim the ownership of your prized possessions - your NFTs!
                  </h3>
                </div>
                <div className="temp-svg">
                  <div className="p-circle1-svg">
                    <img src={circle1} alt="" className="p-circle1" />
                  </div>
                  <div className="p-circle2-svg">
                    <img src={circle1} alt="" className="p-circle2" />
                  </div>
                </div>

                <div className="p-abortwave-main ">
                  <img src={abort1} alt="abort" className="p-abort-wave" />
                </div>
                <div className="temp-svg2">
                  <div className="p-circle3-svg">
                    <img src={circle1} alt="" className="p-circle3" />
                  </div>
                  <div className="p-circle4-svg">
                    <img src={circle1} alt="" className="p-circle4" />
                  </div>
                </div>

                <div className="p-nfts-main">
                  <img src={img1} alt="" className="nfts p-img1" />
                  <img src={img2} alt="" className="nfts p-img2" />
                  <img src={img3} alt="" className="nfts p-img3" />
                  <img src={img4} alt="" className="nfts p-img4" />
                  <img src={img5} alt="" className="nfts p-img5" />
                  <img src={img6} alt="" className="nfts p-img6" />
                  <img src={img7} alt="" className="nfts p-img7" />
                  <img src={img8} alt="" className="nfts p-img8" />
                </div>
              </div>
            </section>

            <section className="p-section3-landingpage">
              <div className="certi-heading font-face-gm">
                <h3>
                  PoO parses the blockchain data and creates a digital
                  certificate as a proof of ownership
                </h3>
              </div>
              <div className="section3-main-div">
                <div className="coin-circle-flex">
                  <div className="p-coin-main">
                    <img src={coin} alt="" className="p-nft-coin" />
                  </div>
                  <div className="p-circle-main">
                    <img src={circle1} alt="" className="p-circle-5" />
                  </div>
                </div>

                <div className="p-nft-certi-main-poo">
                  <img src={certificate} alt="" className="p-nft-certificate" />

                  <div className="img-content-flex">
                    <img
                      src={certiImg}
                      alt=""
                      className="p-nft-certificateImage"
                    />
                    <div className="certi-title font-face-gm-extralight ">
                      Certificate Of Ownership
                    </div>

                    <div className="p-certi-content3">
                      <div className="font-face-gm ownership-periods">
                        Ownership Periods
                      </div>
                      <div className="font-face-gm-thin">
                        10th Oct 2022 - 12th Oct 2022
                      </div>
                    </div>
                    <div className="p-certi-content">
                      <div className="font-face-gm">Nft was verified on</div>
                      <div className="font-face-gm">Verified By</div>
                    </div>
                    <div className="p-certi-content2">
                      <div className="font-face-gm-thin">17/10/2022</div>
                      <img src={verify} alt="" className="p-nft-verifify" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="landigpage-footer font-face-gm">
              <h3>Copyright © 2022 PoO. All Rights Reserved</h3>
            </div>
          </>
        )}
      </section>
      {popup ? (
        <div className="add-chain-main">
          <div className="add-chain-box ">
            <span
              className="close-icon-network"
              onClick={() => setPopup(false)}
            >
              x
            </span>
            <p className="add-chain-message font-face-gm">
              please switch to Polygon mumbai network
            </p>

            <button
              className="bttc-btn font-face-gm-aqiure"
              onClick={() => changeNetwork()}
            >
              change network
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default LandingPage;
