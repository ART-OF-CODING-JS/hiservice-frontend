import React, { useState, useRef } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCard,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { signin } from "../../../store/auth";
import Signup from "../Signup/Signup";
import "./Signin.css";
import Logo from "../../../assets/logo.png";
import Footer from "../../footer/footer";

export default function Signin() {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const dispatch = useDispatch();
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignin = () => {
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(data);
    dispatch(signin(data));
    usernameRef.current.value = null;
    passwordRef.current.value = null;
  };
  return (
    <>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBTabs pills justify className="mb-3 d-flex flex-row justify-content-between">
          <MDBTabsItem>
            <MDBTabsLink
              className="login-switch"
              onClick={() => handleJustifyClick("tab1")}
              active={justifyActive === "tab1"}
            >
              LogIn
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              className="register-switch"
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}
            >
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === "tab1"}>
            <MDBContainer className="container py-5 h-100">
              <MDBCard style={{ borderRadius: "1rem" }}>
                <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <img src={Logo} width="175px" alt="" />

                      <h2 className="fw-bold mb-2 text-uppercase">LogIn</h2>

                      <p className="text-white-50 mb-5">Please enter your Username and password!</p>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          ref={usernameRef}
                        />
                        <label className="form-label">Username</label>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          ref={passwordRef}
                        />
                        <label className="form-label">Password</label>
                      </div>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                        onClick={handleSignin}
                      >
                        LogIn
                      </button>

                      <p className="small mb-5 pb-lg-2">
                        <a className="text-white-50" href="/forgetpassword">
                          Forgot password?
                        </a>
                      </p>

                      <div>
                        <p className="mb-0">
                          Don't have an account?
                          <a
                            href="#!"
                            className="text-white-50 fw-bold"
                            onClick={() => handleJustifyClick("tab2")}
                          >
                            Register here
                          </a>
                        </p>
                        <div className="d-flex flex-row justify-content-start">
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
                </div>
              </MDBCard>
            </MDBContainer>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === "tab2"}>
            <Signup />
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>

      <Footer />
    </>
  );
}
