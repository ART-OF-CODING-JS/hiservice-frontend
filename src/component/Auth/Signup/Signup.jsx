import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

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

  const handleSignup = (event) => {
    event.preventDefault();

    var regex = new RegExp("^[a-zA-Z]+$");
    if (regex.test(cityRef.current.value)) {
      alert("true");
    } else {
      alert("false");
      return false;
    }

    const data = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      city: cityRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      professions: professionsRef.current.value,
    };

    dispatch(signup(data));
    usernameRef.current.value = null;
    emailRef.current.value = null;
    passwordRef.current.value = null;
    cityRef.current.value = null;
    phoneNumberRef.current.value = null;
    professionsRef.current.value = null;
    navigate("/signin");
  };
  return (
    <>
      <div className="login-wrapper">
        <form action="" className="auth-form" onSubmit={handleSignup}>
          <div className="d-flex flex-row justify-content-start">
            <Link to="/signin">
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </div>

          <a href="/">
            <img src={Logo} width="175px" alt="" />
          </a>
          <br />
          <h2>Create new account</h2>

          <div className="input-group">
            <input type="text" name="loginUser" id="loginUser" maxLength={20} ref={usernameRef} required />
            <label>Username</label>
          </div>

          <div className="input-group">
            <input type="email" name="loginUser" id="loginUser" ref={emailRef} required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input type="text" name="loginUser" id="loginUser" ref={cityRef} required />
            <label>City</label>
          </div>

          <div className="input-group">
            <input type="number" name="loginUser" id="loginUser" ref={phoneNumberRef} required />
            <label>Phone number</label>
          </div>

          <div className="input-group">
            <input type="text" name="loginUser" id="loginUser" maxLength={20} ref={professionsRef} required />
            <label>Professions</label>
          </div>

          <div className="input-group">
            <input type="password" name="loginUser" id="loginUser" ref={passwordRef} required />
            <label>Password</label>
          </div>

          <input type="submit" value="Register" className="submit-btn" />

          <div className="forgot-pw">
            <p href="" className="text-white-50 fw-bold">
              Already have an account?
              <Link to="/signin" className="forgot-pw">
                Login here
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
      </div>
    </>
  );
}
