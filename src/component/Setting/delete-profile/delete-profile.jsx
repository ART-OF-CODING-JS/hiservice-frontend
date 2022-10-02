import { useRef } from "react";
import { useDispatch } from "react-redux";
import cookie from "react-cookies";

import { deleteProfile } from "../../../store/users";
import { useNavigate } from "react-router-dom";

function DeleteProfile() {
  const passwordRef = useRef(null);
  const confirmPassword = useRef(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSignout = () => {
    cookie.remove("token");
    cookie.remove("actions");
    cookie.remove("userAccess");
    cookie.remove("userID");
    navigate("/");

    window.location.reload();
  };
  async function handleSubmit(event) {
    event.preventDefault();

    const sendData = {
      id: cookie.load("userID"),
      password: passwordRef.current.value,
      confirmPass: confirmPassword.current.value,
    };
    if (passwordRef.current.value === confirmPassword.current.value) {
      await dispatch(deleteProfile(sendData));
      handleSignout();
    } else {
      alert("Passwords dos not matches!");
    }
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            autoFocus
            ref={passwordRef}
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            autoFocus
            ref={confirmPassword}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Delete Account
        </button>
      </form>
    </div>
  );
}

export default DeleteProfile;
