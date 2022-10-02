import "./forget-password.style.scss";
import React, { useRef } from "react";
import { forgetPassword } from "../../../store/auth";
import { useDispatch } from "react-redux";

const ForgetPassword = () => {
  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const newPasswordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendData = {
      email: emailRef.current.value,
      username: usernameRef.current.value,
      newPassword: newPasswordRef.current.value,
    };
    console.log(sendData);
    dispatch(forgetPassword(sendData));
  };

  return (
    <>
      <div>
        <form className="p-3 my-5 d-flex flex-column w-50" onSubmit={handleSubmit}>
          <h2>Reset Password</h2>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              autoFocus
              ref={emailRef}
            />
          </div>

          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUsername"
              placeholder="Username"
              ref={usernameRef}
            />
          </div>

          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              placeholder="Password"
              ref={newPasswordRef}
            />
            <small id="passwordHelpInline" className="text-muted">
              Must be 8-20 characters long.
            </small>
          </div>

          <div>
            <button type="submit" className="btn btn-secondary">
              Cancel
            </button>

            <button type="submit" className="btn btn-warning">
              Confirm Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
