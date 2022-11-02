import React from "react";
import "../components/registrration.css";
import user from "../assests/images/user.png";
import email from "../assests/images/email.png";
import pass from "../assests/images/padlock.png";

function Registration() {
  return (
    <>
      {/* <div className="p-signup-main-div">
        <div className="p-main-register">
          <div className="signup-title">Sign Up</div>
          <div className="user-main">
            <img src={user} alt="" className="register-icon" />
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-register-input p-username"
              placeholder="Username"
              required
            />
          </div>
          <div className="user-main">
            <img src={email} alt="" className="register-icon" />
            <input
              type="url"
              id="website"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-register-input p-username"
              placeholder="Email"
              required
            />
          </div>
          <div className="user-main">
            <img src={pass} alt="" className="register-icon" />
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-register-input p-username"
              placeholder="Password"
              required
            />
          </div>
          <div className="p-button">
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 signup-btn"
            >
              SIGN UP
            </button>
          </div>
          <div class="mb-6"></div>
        </div>
      </div> */}
      <div class="signup-main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="signup">
          <form>
            <label for="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="txt"
              placeholder="User name"
              required=""
              className="signup-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
              className="signup-input"
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              className="signup-input"
            />
            <button className="signup-button">Sign up</button>
          </form>
        </div>

        <div class="login">
          <form>
            <label for="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
              className="signup-input"
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              className="signup-input"
            />
            <button className="signup-button">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Registration;
