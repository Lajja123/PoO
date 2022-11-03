import react, { useEffect } from "react";
import user from "../assests/images/man.png";
import "../components/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    console.log(window.location.pathname);
  }, []);
  return (
    <>
      {window.location.pathname !== "/" ? (
        <div className="main-header">
          <div className="header-container">
            <div className="main-logo">
              <div className="logo">
                <img src={user} className="logo-navbar" />
              </div>
            </div>
            <div className="left-navbar">
              <div className="navigation">
                <ul className="navigation-menu">
                  <li className="submenu home-nav">
                    <Link to="/currentnft">Currently Owned NFT's</Link>
                  </li>
                  <li className="submenu">
                    <Link to="/previousnft">Previously Owned NFT's</Link>
                  </li>
                  <li className="submenu">
                    <Link to="/ownershipcertificate">
                      Ownership Certificate
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="user-img">
                <img class="p-user" src={user} alt="Rounded avatar" />{" "}
              </div>
              <div className="download-btn">
                <button className="navbar-button">Logout</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
