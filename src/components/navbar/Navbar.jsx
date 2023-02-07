import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import logo from "../../assets/assets/logo.svg";
import SignUp from "../../containers/signup/SignUp";
import { useState } from "react";

const Navbar = ({ set }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [signUpToggle, setSignUpToggle] = useState(false);

  const signUpHandle = () => {
    setSignUpToggle(true);
    set();
  };

  return (
    <>
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="gpt3__navbar-links_container">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#wgpt3">What is GPT?</a>
            </p>
            <p>
              <a href="#possibility">Open AI</a>
            </p>
            <p>
              <a href="#features">Case Studies</a>
            </p>
            <p>
              <a href="#blog">Libary</a>
            </p>
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button" onClick={signUpHandle}>
            Sign Up
          </button>
          <div className="gpt3__navbar-signup">
            {signUpToggle && <SignUp setToggleSignUp={setSignUpToggle} />}
          </div>
        </div>

        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <p>
                  <a href="#home">Home</a>
                </p>
                <p>
                  <a href="#wgpt3">What is GPT?</a>
                </p>
                <p>
                  <a href="#possibility">Open AI</a>
                </p>
                <p>
                  <a href="#features">Case Studies</a>
                </p>
                <p>
                  <a href="#blog">Libary</a>
                </p>
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type="button" onClick={signUpHandle}>
                    Sign up
                  </button>
                  <div className="gpt3__navbar-signup">
                    {signUpToggle && (
                      <SignUp setToggleSignUp={setSignUpToggle} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
