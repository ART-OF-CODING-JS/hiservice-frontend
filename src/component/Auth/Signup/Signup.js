// import { Alert, CircularProgress } from "@mui/material";
import {
  MDBBtn, MDBInput, MDBCard, MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBCardBody
  , MDBIcon
} from "mdb-react-ui-kit";
import React, { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import './Signup.css'
import { signup } from "../../../store/auth";
export default function Signup(props) {
  const dispatch = useDispatch();

  // const {errorSignup,isLoading} = useSelector(state=>state.auth)
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  // const emailAddressRef = useRef(null);
  // const professionsRef = useRef(null);
  // const phoneNumberRef = useRef(null);
  // const genderRef = useRef(null);
  // const cityRef = useRef(null);
  // const birthdayRef = useRef(null);

  const handleSignup = () => {
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      // email:emailAddressRef.current.value,
      // city: cityRef.current.value,
      // gender: genderRef.current.value,
      // birthday: birthdayRef.current.value,
      // phoneNumber: phoneNumberRef.current.value,
      // professions: professionsRef.current.value,
      // role: roleRef.current.value,
    };
    console.log(data, "dataaaaaaaaaa")
    dispatch(signup(data));
    usernameRef.current.value = null;
    passwordRef.current.value = null;
    // emailAddressRef.current.value = null;
    // professionsRef.current.value = null;
    // phoneNumberRef.current.value = null;
    // genderRef.current.value = null;
    // cityRef.current.value = null;
    // birthdayRef.current.value = null;
    // roleRef.current.value = null;
  };
  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>



          <MDBCol md='10'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
              <div className="d-flex gap-5">
                <MDBInput className="" wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg" inputRef={usernameRef} />
                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />

              </div>
              <MDBInput wrapperClass='mb-4' label='Gender' id='formControlLg' type='text' size="lg" />
              <MDBInput wrapperClass='mb-4' label='city' id='formControlLg' type='text' size="lg" />
              <MDBInput wrapperClass='mb-4' label='birthday' id='formControlLg' type='data' size="lg" />
              <MDBInput wrapperClass='mb-4' label='professions' id='formControlLg' type='text' size="lg" />
              <MDBInput wrapperClass='mb-4' label='Your number' id='formControlLg' type='text' size="lg" />
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" inputRef={passwordRef} />

              <MDBBtn className="mb-4 px-5 btn-com" color='dark' size='lg' onClick={handleSignup}>Singup</MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}