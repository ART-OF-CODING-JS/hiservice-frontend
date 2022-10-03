import { useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { updatePassword } from "../../../store/users";

function UpdatePassword() {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    if (newPasswordRef.current.value === confirmPasswordRef.current.value) {
      const sendData = {
        oldPassword: oldPasswordRef.current.value,
        newPassword: newPasswordRef.current.value,
      };
      dispatch(updatePassword(sendData));
    } else {
      toast.warn(`Passwords dos not matches`, { autoClose: true });
    }
  }

  return (
    <div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Old password" autoFocus ref={oldPasswordRef} />
      </div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="New password" autoFocus ref={newPasswordRef} />
      </div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Confirm New password" autoFocus ref={confirmPasswordRef} />
      </div>
      <button type="submit" className="btn btn-success" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
}

export default UpdatePassword;
