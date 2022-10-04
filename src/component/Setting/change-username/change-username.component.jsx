import { useRef } from "react";
import { useDispatch } from "react-redux";
import cookie from "react-cookies";

import { updateUsername } from "../../../store/users";

function UpdateUsername() {
  const usernameRef = useRef(null);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    const sendData = {
      id: cookie.load("userID"),
      username: usernameRef.current.value,
    };
    dispatch(updateUsername(sendData));
  }

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="New Username"
          autoFocus
          ref={usernameRef}
        />
      </div>
      <button  type="submit" className="btn btn-dark" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
}

export default UpdateUsername;
