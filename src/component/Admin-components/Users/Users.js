import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../store/users";
import Action from "./Action/Action";

import "./Users.css";
export default function Users(props) {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.usersSlice);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  return (
    <section className="users-admin-container container-com">
      <div className="tit-user-ad">
        <p className="photo-co-1">Photo</p>
        <p>status</p>
        <p>Subscription</p>
        <p>Location</p>
        <p>Phone Number</p>
        <p>role</p>
        <p>Action</p>
      </div>
      {userInfo.map((ele) => (
        <div key={ele.id} className={ele.blocked ? "user-cards  back-red" : "user-cards"}>
          <div className="img-emi-na">
            <div className="photo-id">
              <p>{ele.id}</p>
              {ele.image !== null ? (
                <img className="user-image-admin" alt="imageServiceProvider" src={ele.image} />
              ) : (
                <img
                  className="user-image-admin"
                  alt="imageServiceProvider"
                  src="https://as2.ftcdn.net/v2/jpg/00/97/00/09/1000_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg"
                />
              )}
            </div>
            <div className="name-email-us">
              <p>{ele.username}</p>
              <p>{ele.email}</p>
            </div>
          </div>

          <div>
            {ele.blocked ? (
              <p className="block-user">BLocked</p>
            ) : (
              <p className="active-user">Active</p>
            )}
          </div>
          <div>{ele.didPay ? <p>Premium</p> : <p>Free</p>}</div>
          <div>
            <p>{ele.city}</p>
          </div>
          <div>
            <p>{ele.phoneNumber}</p>
          </div>
          <div>
            <p>{ele.role}</p>
          </div>
          <div>
            <Action id={ele.id} isBlocked={ele.blocked} />
          </div>
        </div>
      ))}
    </section>
  );
}
