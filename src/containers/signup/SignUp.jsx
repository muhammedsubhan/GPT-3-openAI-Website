import React, { useState } from "react";
import "../signup/signup.css";
import { RiCloseLine } from "react-icons/ri";

const SignUp = ({ setToggleSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ClickedHandler = () => {
    if (email && password) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      alert("Plaease Fill The Blanks");
    }
  };

  return (
    <>
      <div className="gpt3__form">
        <div className="gpt3__close">
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleSignUp((prev) => !prev)}
          />
        </div>
        <div className="gpt3__form-heading">
          <h1 className="gradient__text">Create your account</h1>
          <small>
            Create an account to enjoy all the services without any ads for
            free!
          </small>
        </div>
        <div className="gpt3__form-content">
          <form>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <h4 className="gradient__text" onClick={ClickedHandler}>
              Create Account
            </h4>
          </form>
          <h3 className="gpt3__signup-already">
            Already Have An Account? <span>Sign In</span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default SignUp;
