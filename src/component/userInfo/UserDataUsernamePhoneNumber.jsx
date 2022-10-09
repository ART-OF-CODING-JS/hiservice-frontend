import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../store/users";

export default function UserDataUsernamePhoneNumber({ ID }) {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.usersSlice);

  useEffect(() => {
    dispatch(getAllUser());
  }, [ID, dispatch]);

  return (
    <section>
      {userInfo
        .filter((ele) => ele.id === ID)
        .map((user, idx) => (
          <div className="user-info-username-phone" style={{ marginTop: "-10px" }} key={idx}>
            <h5>{user.username} </h5>
            <h6>{user.phoneNumber}</h6>
          </div>
        ))}
    </section>
  );
}
