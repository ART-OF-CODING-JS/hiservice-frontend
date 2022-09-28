import cookie from "react-cookies";
import { decodeToken } from "react-jwt";
import "./UserInfo.css";
export default function UserInfo() {
  const userInof = decodeToken(cookie.load("token"));

  let userArrInfo = [];
  userArrInfo.push(userInof);
  console.log(userArrInfo);

  return (
    <section className="userInfo-container container-com">
      {userArrInfo.map((ele) => (
        <div key={ele.id} className="user-info">
          <p className="username-setting"> {ele.username}</p>
          <p className="email-setting">{ele.email}</p>
          {ele.image !== null ? (
            <img className="service-pro-image" alt="imageServiceProvider" src={ele.image} />
          ) : (
            <img
              className="service-pro-image"
              alt="imageServiceProvider"
              src="https://as2.ftcdn.net/v2/jpg/00/97/00/09/1000_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg"
            />
          )}
        </div>
      ))}
    </section>
  );
}
