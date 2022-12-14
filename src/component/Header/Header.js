import React from "react";
import Logout from "../Auth/Logout/Logout";
import "./Header.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  getAllServices,

} from "../../store/services";
import cookie from "react-cookies";
import Logo from "../../assets/logo.png";

import { Link } from "react-router-dom";
import Access from "../Access/Access";

export default function Header(props) {
  const dispatch = useDispatch();
  const userId= cookie.load("userID");
 

  
  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  // const { isSignin } = useSelector((state) => state.authSlice);

  return (
    <>
      <nav className="navbar  navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center">
          <h1 className="m-0">
            <i className="text-primary me-3"></i>
            <Link className="Link" to={"/"}>
              <img src={Logo} alt="logoImage" width="150px" />
            </Link>
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav nav justify-content-center ms-auto py-3 py-lg-0">
            <Access role={"admin"}>
              <Link className="nav-item nav-link" to={"/users"}>
                <li nav-link>Users</li>
              </Link>
            </Access>

            <Access role="user">
              <Link className="nav-item nav-link" to={"/Services"}>
                <li nav-link>Services</li>
              </Link>
            </Access>

            <Access role="admin">
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle nav-link" data-bs-toggle="dropdown">
                  Service
                </a>
                <div className="dropdown-menu bg-light m-0">
                  <Link className="dropdown-item" to={"/Services"}>
                    <li href="#">All Services</li>
                  </Link>
                  <Link className="dropdown-item" to={"/Services/confirmation"}>
                    <li href="#">Services Confirmation</li>
                  </Link>
                </div>
              </div>
            </Access>

            {/* ******************************************* */}
            <Access role="admin">
              <Link className="nav-item nav-link" to={"/reports-admin"}>
                <li nav-link>Reports</li>
              </Link>
            </Access>
            {/* ********************************** */}
            <Access role="user">
              <Link className="nav-item nav-link" to={"/My-Services"}>
                <li nav-link>My services</li>
              </Link>
            </Access>
            {/* *************Reservation************ */}

            <div className="nav-item dropdown">
              {/* <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Reservation</button> */}
              <a className="nav-link dropdown-toggle nav-link" data-bs-toggle="dropdown">
                Reservation
              </a>

              <div className="dropdown-menu bg-light m-0">
                <Access role={"admin"}>
                  <Link className="dropdown-item" to={"/Reservation-Admin"}>
                    <li href="#">All Reservation</li>
                  </Link>
                </Access>
                <Access role={"user"}>
                  <Link className="dropdown-item" to={"/My-Reservation"}>
                    <li href="#">My Reservation</li>
                  </Link>
                  <Link className="dropdown-item" to={"/reserve/myService"}>
                    <li href="#">Reserve my Service</li>
                  </Link>
                </Access>
              </div>
            </div>
            {/****************AllContactAdmin********************/}
            <div>
              <div className="nav-item dropdown">
                <Access role="user">
                  <Link className="nav-item nav-link" to={"/Contact-us"}>
                    <li nav-link>Contact us</li>
                  </Link>
                </Access>
                <div className="nav-item dropdown">
                  <Access role={"admin"}>
                    <a className="nav-link dropdown-toggle nav-link" data-bs-toggle="dropdown">
                      Contact us
                    </a>
                    <div className="dropdown-menu bg-light m-0">
                      <Link className="dropdown-item" to={"/Contact-Admin"}>
                        <li href="#">All Contact</li>
                      </Link>
                    </div>
                  </Access>
                </div>
              </div>
            </div>
            {/* **************Setting********** */}
            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle nav-link" data-bs-toggle="dropdown">
                Setting
              </a>
              <div className="dropdown-menu bg-light m-0">
              <Link className="dropdown-item" to={"/Settings"}>
                  <li href="#">Profile Setting</li>
                </Link>
                <Access role="user">
                  <Link className="dropdown-item" to={"/favList"}>
                    <li href="#">Favorite List </li>
                  </Link>
                  <Link className="dropdown-item" to={"/blockList-user"}>
                    <li href="#">Block List</li>
                  </Link>
                  <Link className="dropdown-item" to={`/chat/${userId}`}>
                  <li href="#">Chat</li>
                </Link>
                </Access>
              </div>
            </div>
          </div>
        </div>
        <div className="logout">
          <Logout />
        </div>
      </nav>

      {/* <!-- responsive-nav --> */}
      <div id="responsive-nav">
        {/* <!-- SEARCH BAR --> */}

        {/* *********************** */}
      </div>
    </>
  );
}
