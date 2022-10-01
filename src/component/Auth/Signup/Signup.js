import "./Signup.css";

import { MDBCard, MDBContainer } from "mdb-react-ui-kit";

import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { signup } from "../../../store/auth";
import Logo from "../../../assets/logo.png";

export default function Signup(props) {
  const dispatch = useDispatch();

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const genderRef = useRef(null);
  const cityRef = useRef(null);
  const birthdayRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const professionsRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSignup = () => {
    const data = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      gender: genderRef.current.value,
      city: cityRef.current.value,
      birthday: birthdayRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      professions: professionsRef.current.value,
    };
    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      dispatch(signup(data));
    } else {
      alert("Passwords dos not matches!");
    }
    usernameRef.current.value = null;
    emailRef.current.value = null;
    passwordRef.current.value = null;
    genderRef.current.value = null;
    cityRef.current.value = null;
    birthdayRef.current.value = null;
    phoneNumberRef.current.value = null;
    professionsRef.current.value = null;
  };
  return (
    <MDBContainer className="container py-5 h-100">
      <MDBCard style={{ borderRadius: "1rem" }}>
        <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <img src={Logo} width="175px" alt="" />

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
                Create new account
              </h5>

              <p className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
                Please fill all filed!
              </p>

              <div className="d-flex gap-5" style={{ borderRadius: "1rem", margin: "25px" }}>
                <div className="form-outline form-white mb-4">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="username"
                    ref={usernameRef}
                  />
                  <label className="form-label">Username</label>
                </div>

                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="email"
                    ref={emailRef}
                  />
                  <label className="form-label">Email</label>
                </div>
              </div>

              <div className="d-flex gap-5" style={{ borderRadius: "1rem" }}>
                <div className="form-outline form-white mb-4" style={{ width: "16rem" }}>
                  <select
                    name="gender"
                    className="form-control form-control-lg"
                    selected
                    style={{ fontSize: "1rem" }}
                    ref={genderRef}
                  >
                    <option value="none">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                  </select>

                  <label className="form-label">Gender</label>
                </div>

                <div className="form-outline form-white mb-4" style={{ width: "16rem" }}>
                  <input
                    type="text"
                    placeholder="city"
                    className="form-control form-control-lg"
                    ref={cityRef}
                  />
                  <label className="form-label">City</label>
                </div>

                <div className="form-outline form-white mb-4">
                  <input
                    type="date"
                    placeholder="dd-mm-yyyy"
                    className="form-control form-control-lg"
                    ref={birthdayRef}
                  />
                  <label className="form-label">Birthday</label>
                </div>
              </div>

              <div className="d-flex gap-5" style={{ borderRadius: "1rem", margin: "25px" }}>
                <div className="form-outline form-white mb-4">
                  <input
                    type="tel"
                    className="form-control form-control-lg"
                    placeholder="07********"
                    ref={phoneNumberRef}
                  />
                  <label className="form-label">Phone number</label>
                </div>

                <div className="form-outline form-white mb-4">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="professions"
                    ref={professionsRef}
                  />
                  <label className="form-label">Professions</label>
                </div>
              </div>

              <div className="d-flex gap-5" style={{ borderRadius: "1rem", margin: "25px" }}>
                <div className="form-outline form-white mb-4">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="password"
                    ref={passwordRef}
                  />
                  <label className="form-label">Password</label>
                </div>

                <div className="form-outline form-white mb-4">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="confirm password"
                    ref={confirmPasswordRef}
                  />
                  <label className="form-label">Confirm password</label>
                </div>
              </div>

              <div>
                <button className="btn btn-outline-light btn-lg px-5" onClick={handleSignup}>
                  Register
                </button>
              </div>

              <div className="">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </MDBCard>
    </MDBContainer>
  );
}
