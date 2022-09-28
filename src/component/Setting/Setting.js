import ChangeInfo from "./ChangeInfo/change-username-password";
import UserInfo from "./UserInof/UserInof";

import "./Setting.css";

export default function Setting(props) {
  return (
    <div className="setting-container">
      <div>
        <UserInfo />
      </div>
      <div>
        <ChangeInfo />
      </div>
    </div>
  );
}
