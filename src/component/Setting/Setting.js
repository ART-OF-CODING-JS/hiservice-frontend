import ChangeInfo from "./ChangeInfo/change-username-password";
import UserInfo from "./UserInof/UserInof";

import "./Setting.css";

export default function Setting(props) {
  return (
    <>
          <div className="image-all-section">
        <img
          alt="h"
          src='https://i.postimg.cc/4xy3GNqm/pexels-digital-buggu-171198.jpg'
        />
        <p>Profile Settings</p>
      </div>
      <div className="setting-container">
        <div className="UserInfo">
          <UserInfo />
        </div>
        <div className="ChangeInfo">
          <ChangeInfo />
        </div>
      </div>
    </>
  );
}
