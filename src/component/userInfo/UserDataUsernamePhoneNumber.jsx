import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../store/users";

export default function UserDataUsernamePhoneNumber({ ServiceProviderId }) {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.usersSlice);

  useEffect(() => {
    dispatch(getAllUser());
  }, [ServiceProviderId, dispatch]);

  return (
    <section>
      {userInfo
        .filter((ele) => ele.id === ServiceProviderId)
        .map((user, idx) => (
          <div className="container__text__timing" key={idx}>
            <div className="container__text__timing_time">
              <h2>User Info</h2>
            </div>

            <div className="container__text__timing_time">
              <h5>{user.username}</h5>
            </div>

            <div className="container__text__timing_time">
              <p>{user.phoneNumber}</p>
            </div>
          </div>
        ))}
    </section>
  );
}
