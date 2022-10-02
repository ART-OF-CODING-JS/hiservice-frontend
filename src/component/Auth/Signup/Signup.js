import "./Signup.css";

import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signup } from "../../../store/auth";
import Logo from "../../../assets/logo.png";

export default function Signup(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const cityRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const professionsRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignup = () => {
    const data = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      city: cityRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      professions: professionsRef.current.value,
    };

    dispatch(signup(data));
    navigate("/signin");
  };
  return (
    <>
      <div className="login-wrapper">
        <form action="" className="form">
          <div className="d-flex flex-row justify-content-start">
            <a href="/signin">
              <i className="fa-solid fa-arrow-left"></i>
            </a>
          </div>

          <a href="/">
            <img src={Logo} width="175px" alt="" />
          </a>
          <br />
          <h3>Create new account</h3>

          <div className="input-group">
            <input type="text" name="loginUser" id="loginUser" required ref={usernameRef} />
            <label>Username</label>
          </div>

          <div className="input-group">
            <input type="text" name="loginUser" id="loginUser" required ref={emailRef} />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input type="text" name="loginUser" id="loginUser" required ref={cityRef} />
            <label>City</label>
          </div>

          <div className="input-group">
            <input type="text" name="loginUser" id="loginUser" required ref={phoneNumberRef} />
            <label>Phone number</label>
          </div>

          <div className="input-group">
            <input type="text" name="loginUser" id="loginUser" required ref={professionsRef} />
            <label>Professions</label>
          </div>

          <div className="input-group">
            <input type="text" name="loginUser" id="loginUser" required ref={passwordRef} />
            <label>Password</label>
          </div>

          <input type="submit" value="Register" className="submit-btn" onClick={handleSignup} />

          <div className="forgot-pw">
            <p href="" className="text-white-50 fw-bold">
              Already have an account?
              <a href="/signin" className="forgot-pw">
                Login here
              </a>
            </p>
          </div>
          <div className="d-flex flex-row justify-content-start">
            <a href="#!" className="small text-muted me-1">
              Terms of use.
            </a>
            <a href="#!" className="small text-muted">
              Privacy policy
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
