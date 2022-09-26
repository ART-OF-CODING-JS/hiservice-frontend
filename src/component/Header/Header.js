import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Logout from "../Auth/Logout/Logout";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="headers container-com">
      <div className="head-header">
        <nav>
          <div>
            <p className="logo">Hi service</p>
          </div>
          <ul>
            <Link className="Link" to={"/Services"}>
              {" "}
              <li>Services</li>
            </Link>
            <Link className="Link" to={"/My-Services"}>
              {" "}
              <li>My services</li>
            </Link>

            
            <div class="dropdown">
  <button class="dropbtn">Reservation</button>
  <div class="dropdown-content">
  <Link className="Link" to={"/My-Reservation"} > <li href="#">My Reservation</li>     </Link>
  <Link className="Link" to={"/reserve/myService"} >  <li href="#">Reserve my Service</li>     </Link>
  </div>
</div>
       

            <Link className="Link" to={"/Reports"}>
              <li>Reports</li>
            </Link>
            <Link className="Link" to={"/Contact-us"}>
              <li>Contact us</li>
            </Link>
            <Link className="Link" to={"/Setting"}>
              <li>Setting</li>
            </Link>
          </ul>
        </nav>
        <div>
          <Logout />
        </div>
      </div>
    </div>
  );
}
