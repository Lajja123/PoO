import React from "react";
import "../components/registrration.css";
import user from "../assests/images/user.svg";
import email from "../assests/images/Email.svg";
import pass from "../assests/images/password.svg";
import logo from "../assests/images/logo1.png";

function Registration() {
  return (
    <>
      <div className="HELLO">
        <div className="p-signup-main-div">
          <div className="logo">
            <img src={logo} className="logo-register" />
          </div>
          <div className="signup-title font-face-gm-aqiure">REGISTER HERE</div>
          <div className="p-main-register">
            <div className="user-info-poo">
              <div className="user-main">
                <div className="register-icons1">
                  <img src={user} alt="" className="register-icons2" />
                </div>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-register-input p-username"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="user-main">
                <div className="register-icons1">
                  <img src={email} alt="" className="register-icons2" />
                </div>
                <input
                  type="email"
                  id="first_name"
                  class="bg-gray-50 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-register-input p-username"
                  placeholder="Email"
                  required
                />
              </div>
              {/* <div className="user-main">
              <div className="register-icons1">
                <img src={pass} alt="" className="register-icons2" />
              </div>
              <input
                type="password"
                id="first_name"
                class="bg-gray-50 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-register-input p-username"
                placeholder="Password"
                required
              />
            </div> */}
              <div className="p-button">
                <button
                  type="button"
                  class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium  rounded-full border signup-btn font-face-gm-aquire-bold"
                >
                  REGISTER
                </button>
              </div>
              <div class="mb-6"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Registration;
