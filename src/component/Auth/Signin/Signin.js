import React, { useState, useRef } from "react";
import { MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBBtn, MDBInput, MDBCard, MDBCol, MDBRow, MDBCardImage, MDBCardBody, MDBIcon } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../../../store/auth";
import Signup from "../Signup/Signup";
import "./Signin.css";
export default function Signin() {
  // const {isSignin} = useSelector((state)=>state.authSlice)
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
      {/* {errorSingin &&(<Alert severity="error">The username or password is incorrect</Alert>)} */}
      {
        //    !isSingin?
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <MDBTabs pills justify className="mb-3 d-flex flex-row justify-content-between">
            <MDBTabsItem>
              <MDBTabsLink className="login-switch" onClick={() => handleJustifyClick("tab1")} active={justifyActive === "tab1"}>
                Login
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink className="register-switch" onClick={() => handleJustifyClick("tab2")} active={justifyActive === "tab2"}>
                Register
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={justifyActive === "tab1"}>
              <MDBContainer className="my-5">
                <MDBCard>
                  <MDBRow className="g-0">
                    <MDBCol md="6">
                      <MDBCardImage src="https://i.ibb.co/k9BGqKk/spacejoy-x0-Nw1-Gvi6m-Q-unsplash-1-1.jpg" alt="login form" className="rounded-start w-100" />
                    </MDBCol>

                    <MDBCol md="6">
                      <MDBCardBody className="d-flex flex-column">
                        <div className="d-flex flex-row mt-2">
                          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: "#ff6219" }} />
                          <span className="h1 fw-bold mb-0">HI SERVICE</span>
                        </div>

                        <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
                          Sign into your account
                        </h5>

                        <MDBInput wrapperClass="mb-4" label="Username" id="formControlLg" type="email" size="lg" inputRef={usernameRef} />
                        <MDBInput wrapperClass="mb-4" label="Password" id="formControlLg" type="password" size="lg" inputRef={passwordRef} />

                        <MDBBtn className="mb-4 px-5 com-btn" color="dark" size="lg" onClick={handleSignin}>
                          Login
                        </MDBBtn>
                        <a className="small text-muted" href="/forgetpassword">
                          Forget Password?
                        </a>

                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <a href="#!" style={{ color: "#393f81" }} onClick={() => handleJustifyClick("tab2")} active={justifyActive === "tab2"}>
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
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </MDBContainer>
            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === "tab2"}>
              <Signup />
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      }
    </>
  );
}
