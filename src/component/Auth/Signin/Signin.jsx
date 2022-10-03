import "./Signin.css";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { signin, sendEmailVerification } from "../../../store/auth";
import Logo from "../../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const dispatch = useDispatch();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();
  const handleSignin = async (event) => {
    event.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    await dispatch(signin(data));
    navigate("/services");
    usernameRef.current.value = null;
    passwordRef.current.value = null;
  };

  const emailForgotPassRef = useRef(null);
  const handleSendEmailVerification = () => {
    const data = {
      email: emailForgotPassRef.current.value,
    };
    dispatch(sendEmailVerification(data));
  };

  return (
    <>
      <div className="login-wrapper">
        <form action="" id="form" className="auth-form" onSubmit={handleSignin}>
          <div className="d-flex flex-row justify-content-start">
            <Link to="/">
              <i className="fa-solid fa-arrow-left" href="/"></i>
            </Link>
          </div>

          <a href="/">
            <img src={Logo} width="175px" alt="" />
          </a>
          <br />
          <br />
          <h2>Login</h2>

          <div className="input-group">
            <input required type="text" id="loginUser" ref={usernameRef} />
            <label>User Name</label>
          </div>

          <div className="input-group">
            <input type="password" id="loginPassword" ref={passwordRef} required />
            <label>Password</label>
          </div>

          <input type="submit" value="Login" className="submit-btn" />
          <br />
          <a href="#forgot-pw" className="forgot-pw">
            Forgot Password?
          </a>
          <div className="forgot-pw footerForm">
            <p href="" className="text-white-50 fw-bold">
              Don't have an account?
              <Link to="/signup" className="forgot-pw">
                Register here
              </Link>
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
            <form action="" className="auth-form">
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
