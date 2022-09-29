import React from "react";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import Logout from "../Auth/Logout/Logout";
import "./Header.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getAllServices } from "../../store/services";
// import AddService from "../Add service/AddServices";
// import Reports from "../../Reports/sendReports/Reports";
import { Link } from "react-router-dom";
import Access from "../Access/Access";

export default function Header(props) {
  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(getAllServices());
    
  }, [dispatch]);
 
  return (
    <div className="headers container-com">
      <div className="head-header">
        <nav>
          <div>
            <p className="logo">Hi service</p>
          </div>
          <ul>
           <Access role={'admin'}> 
           <Link className="Link" to={"/users"}>
              {" "}
              <li>Users</li>
            </Link>
            </Access>
            {/* *************************************** */}
            <Access role="user">
            <Link className="Link" to={"/Services"}>
              {" "}
              <li>Services</li>
            </Link>
            </Access>
            {/* ======================================== */}
            <Access role='admin'> 
            <div className="dropdown">
              <button className="dropbtn">Service</button>
              <div className="dropdown-content">
                <Link className="Link" to={"/Services"}>
                  {" "}
                  <li href="#">All Services</li>{" "}
                </Link>
                <Link className="Link" to={"/services/confirmation"}>
                  {" "}
                  <li href="#">Services Confirmation</li>{" "}
                </Link>
              </div>
            </div>
            </Access>
            {/* ******************************************* */}
            <Access role='admin'>
            <Link className="Link" to={"/reports-admin"}>
              {" "}
              <li>Reports</li>
            </Link>
            </Access>
            {/* ********************************** */}
            <Access role='user'>
            <Link className="Link" to={"/My-Services"}>
              {" "}
              <li>My services</li>
            </Link>
            </Access>
            {/* *************Reservation************ */}
       
            <div class="dropdown">
              <button class="dropbtn">Reservation</button>
              
              <div class="dropdown-content">
              <Link className="Link" to={"/Reservation-Admin"} > <li href="#">All Reservation</li>     </Link>
              <Access role='user'>
                <Link className="Link" to={"/My-Reservation"} > <li href="#">My Reservation</li>     </Link>

                <Link className="Link" to={"/reserve/myService"} >  <li href="#">Reserve my Service</li></Link>
                </Access>
              </div>
            </div>
            {/************************************/}
            <Link className="Link" to={"/Reports"}>
              <li>Reports</li>
            </Link>
            {/****************AllContactAdmin********************/}
            <div class="dropdown">
              <button class="dropbtn"> <Link className="Link" to={"/Contact-us"}> <li>Contact us</li></Link></button>
              <div class="dropdown-content">
              <Access role={'admin'}> 
            <Link className="Link" to={"/Contact-Admin"}><li href="#">All Contact</li></Link>
            </Access>
            </div>
            </div>
            {/* **************Setting********** */}
            <div className="dropdown">
              <button className="dropbtn">Setting</button>
              <div className="dropdown-content">
                <Link className="Link" to={"/Settings"}>
                  {" "}
                  <li href="#">Profile Setting</li>{" "}
                </Link>
                <Link className="Link" to={"/favList"}>
                  {" "}
                  <li href="#">Favorite List </li>{" "}
                </Link>
                <Link className="Link" to={"/blockList-user"}>
                  {" "}
                  <li href="#">Block List</li>{" "}
                </Link>
                <Link className="Link" to={"/Reports"}>
                  <li>Reports</li>
                </Link>
              </div>
            </div>
          </ul>
        </nav>
        <div>
          <Logout />
        </div>
      </div>

    </div>
  );
}
