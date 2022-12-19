import react, { useState, useRef, useEffect } from "react";
import "../components/currentnft.css";
import axios from "axios";
// import dnft from "../assests/images/dummynft.png";
import { Link } from "react-router-dom";
// import nft3 from "../assests/images/nft3.jpg";

function PreviousNft() {
  const [loading, setLoading] = useState(false);
  const [previousnftData, setPreviousNftData] = useState([]);
  let perviousNftData = [];
  let previousTransferNftData = [];
  let previousnfts = [];
  const dataFetchedRef = useRef(false);
  var chain = "mumbai";

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    // fetchpreviousNft();
  }, []);

  const fetchpreviousNft = async (chain) => {
    setLoading(true);
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    var address = account[0];
    // var address = "0x7b86cEeE7eFF80693F4B2a98dA209eff29531D50";
    const options = {
      method: "GET",
      url: `https://deep-index.moralis.io/api/v2/${address}/nft/transfers`,

      params: {
        chain: chain ? `${chain}` : "mumbai",
        format: "decimal",
        direction: "from",
        limit: 20,
      },
      headers: {
        accept: "application/json",
        "X-API-Key":
          "zx1cuyNtlU6YfCw1ARlaDUSJQLXC5uXlfM9ebpJhJSTbbglLJs6sqvHEF9avPztV",
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data.result);
        perviousNftData = response.data.result;
        console.log(perviousNftData);
      })
      .catch(function (error) {
        console.error(error);
      });

    if (previousnftData.length > 0) {
      perviousNftData[0] = { ...perviousNftData[0], chain: chain };
    }

    getFinalNftData();

    async function getFinalNftData() {
      setLoading(true);
      console.log(perviousNftData);

      // for adding the meta data
      for (let i = 0; i < perviousNftData.length; i++) {
        const options = {
          method: "GET",
          url: `https://deep-index.moralis.io/api/v2/nft/${perviousNftData[i].token_address}/${perviousNftData[i].token_id}`,
          params: {
            chain: chain ? `${chain}` : "mumbai",
            format: "decimal",
          },
          headers: {
            accept: "application/json",
            "X-API-Key":
              "zx1cuyNtlU6YfCw1ARlaDUSJQLXC5uXlfM9ebpJhJSTbbglLJs6sqvHEF9avPztV",
          },
        };

        await axios
          .request(options)
          .then(function (response) {
            console.log(response.data);

            perviousNftData[i] = {
              ...perviousNftData[i],
              metadata: response.data.metadata,
              token_uri: response.data.token_uri,
            };

            console.log(perviousNftData);
          })
          .catch(function (error) {});
      }
      for (let i = 0; i < perviousNftData.length; i++) {
        // console.log(perviousNftData[i].metadata);
        perviousNftData[i].metadata = JSON.parse(perviousNftData[i].metadata);
      }

      console.log(perviousNftData);
      setPreviousNftData(perviousNftData);
      setLoading(false);
    }
  };

  function onChangeValue(e) {
    setLoading(true);
    fetchpreviousNft(e);
    console.log(e);
    setLoading(false);
  }

  return (
    <>
      <div className=" current-nft-div2">
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
            <div className="poo-current-nft-block ">
              <label
                for="language "
                className="font-face-gm-aquire-bold drop-down-lbl"
              >
                Select Chain:
              </label>
              <select
                name="language"
                id="language-dropdown "
                className="font-face-gm-aquire-bold language-dropdown "
                onChange={(e) => {
                  onChangeValue(e.target.value);
                }}
              >
                <option value="select">select</option>
                <option value="eth">eth</option>
                <option value="0x1">0x1</option>
                <option value="goerli">goerli</option>
                <option value="0x5">0x5</option>
                <option value="sepolia">sepolia</option>
                <option value="0xaa36a7">0xaa36a7</option>
                <option value="polygon">polygon</option>
                <option value="0x89">0x89</option>
                <option value="mumbai">mumbai</option>
                <option value="0x13881">0x13881</option>
                <option value="bsc">bsc</option>
                <option value="0x38">0x38</option>
                <option value="bsc testnet">bsc testnet</option>
                <option value="0x61">0x61</option>
                <option value="avalanche">avalanche</option>
                <option value="0xa86a">0xa86a</option>
                <option value="avalanche testnet">avalanche testnet</option>
                <option value="0xa869">0xa869</option>
                <option value="fantom">fantom</option>
                <option value="0xfa">0xfa</option>
                <option value="cronos">cronos</option>
                <option value="0x19">0x19</option>
                <option value="cronos">cronos testnet</option>
                <option value="0x152">0x152</option>
              </select>
            </div>

            <div className="current-grid-container">
              {previousnftData.map((item, i) => {
                if (item.chain !== undefined) {
                  chain = item.chain;
                }
                return (
                  <div key={i} className="div-box-owned">
                    {item.metadata !== null ? (
                      <div className="current-certi-main">
                        <div className="curren-certi-img">
                          <img
                            src={item.metadata.image}
                            alt=""
                            className="nfts-img4"
                          />
                        </div>
                        <div className="current-certi-info">
                          <div>
                            <h3 className="font-face-gm-aquire-bold">
                              {item.metadata.name}
                            </h3>
                          </div>
                          <div className="current-certi-mainbtn">
                            <Link
                              to={"/createcertificateprevious"}
                              state={{ data: item, chain: chain }}
                            >
                              <button className="current-button font-face-gm-aquire-bold">
                                Generate Certificate
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default PreviousNft;
