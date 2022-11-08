import react, { useEffect } from "react";
import user from "../assests/images/profile.png";
import "../components/navbar.css";
import { Link } from "react-router-dom";
import logo from "../assests/images/logo1.png";

function Navbar() {
  useEffect(() => {
    console.log(window.location.pathname);
  }, []);
  return (
    <>
      {window.location.pathname !== "/" &&
      window.location.pathname !== "/register" ? (
        <div className="main-header">
          <div className="header-container">
            <div className="logo">
              <img src={logo} className="logo-navbar" />
            </div>
            <div className="left-navbar">
              <div className="navigation ">
                <ul className="navigation-menu font-face-gm">
                  <li className="submenu home-nav ">
                    <Link to="/currentnft">Currently Owned NFTs</Link>
                  </li>
                  <li className="submenu">
                    <Link to="/previousnft">Previously Owned NFTs</Link>
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
                <button className="navbar-button font-face-gm-bold ">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
