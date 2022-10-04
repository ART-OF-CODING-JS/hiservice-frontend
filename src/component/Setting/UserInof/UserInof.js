import cookie from "react-cookies";
import { decodeToken } from "react-jwt";
import "./UserInfo.css";
export default function UserInfo() {
  const userInfo = decodeToken(cookie.load("token"));

  let userArrInfo = [];
  userArrInfo.push(userInfo);
  return (
    <section className="userInfo-container container-com">
      {userArrInfo.map((ele) => (
        <div className="profile_info">
          <div className="infocardContainer">
            <div id="main">
              {ele.image === null ? (
                <img
                  alt="j"
                  src="https://as2.ftcdn.net/v2/jpg/00/97/00/09/1000_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg"
                />
              ) : (
                <img alt="j" src={ele.image} />
              )}
            </div>
            <div id="textbois">
              <h2 className="profile_info_h2">{ele.username}</h2>
              <p>professions: {ele.professions}</p>
              <p>Phone: {ele.phoneNumber}</p>
              <p>{ele.email}</p>
              <div className="membership">
                {ele.didPay ? (
                  <p>Premium Membership</p>
                ) : ele.role === "admin" ? (
                  <p>Admin</p>
                ) : (
                  <p>Free Membership</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      <p>Upgrade Subsection</p>
    </section>
  );
}
