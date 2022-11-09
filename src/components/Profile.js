import React from "react";
import "../components/profile.css";
import user from "../assests/images/user.png";
import { useRef } from "react";

function Profile() {
  const fileInput = useRef(null);
  function handleClick() {
    fileInput.current.focus();
  }
  return (
    <>
      <div className="profile-main-div">
        <div className="profile-hero-section">
          <div className="profile-form-main">
            <div className="user-profile-div">
              <img src={user} alt="" className="profile-img" />

              <input
                type="file"
                name=""
                id="profile-file"
                accept="images/*"
                hidden
                ref={fileInput}
              />
            </div>

            <div className="div-profile-info">
              <div className="div-username-main">
                <h3>Emilly Jaishwant</h3>
              </div>
              <div className="div-email-main">
                <h3>emilly212@gmail.com</h3>
              </div>
              <div className="div-wallet-main">
                <h3>aq2udhd8787fbfuvfioj735deg</h3>
              </div>
              <div className="button-flex">
                <div className="edit-profile font-face-gm-aquire-bold">
                  <button
                    onClick={() => {
                      fileInput.current.click();
                    }}
                  >
                    EDIT PICTURE
                  </button>
                </div>
                <div className="div-btn-main font-face-gm-aquire-bold">
                  <button>Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
