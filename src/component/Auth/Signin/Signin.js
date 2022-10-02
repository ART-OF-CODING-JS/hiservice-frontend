import "./Signin.css";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { signin, sendEmailVerification } from "../../../store/auth";
import Logo from "../../../assets/logo.png";

export default function Signin() {
  const dispatch = useDispatch();

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignin = () => {
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(data);
    dispatch(signin(data));
  };

  const emailForgotPassRef = useRef(null);
  const handleForgotPassword = () => {
    const data = {
      email: emailForgotPassRef.current.value,
    };
    dispatch(sendEmailVerification(data));
  };

  return (
    <>
      <div className="login-wrapper">
        <form action="" id="form" className="form">
          <div className="d-flex flex-row justify-content-start">
            <a href="/">
              <i className="fa-solid fa-arrow-left" href="/"></i>
            </a>
          </div>

          <a href="/">
            <img src={Logo} width="175px" alt="" />
          </a>
          <br />
          <br />
          <h2>Login</h2>

          <div className="input-group">
            <input type="text" name="loginUser" id="loginUser" required ref={usernameRef} />
            <label>User Name</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              name="loginPassword"
              id="loginPassword"
              required
              ref={passwordRef}
            />
            <label>Password</label>
          </div>
          <input type="submit" value="Login" className="submit-btn" onClick={handleSignin} />
          <a href="#forgot-pw" className="forgot-pw">
            Forgot Password?
          </a>
          <div className="forgot-pw">
            <p href="" className="text-white-50 fw-bold">
              Don't have an account?
              <a href="/signup" className="forgot-pw">
                Register here
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

        <div id="forgot-pw">
          <div>
            <form action="" className="form">
              <div className="d-flex flex-row justify-content-start">
                <a href="#form" className="forgot-pw">
                  <i className="fa-solid fa-arrow-left" href="/"></i>
                </a>
              </div>

              <h2>Reset Password</h2>
              <div className="input-group">
                <input type="email" name="email" id="email" required ref={emailForgotPassRef} />
                <label>Email</label>
              </div>
              <input type="submit" value="Submit" className="submit-btn" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
