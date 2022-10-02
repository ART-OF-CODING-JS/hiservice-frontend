import React from "react";
import Logout from "../Auth/Logout/Logout";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllServices,
  searchByCity,
  searchService,
  lastNewService,
  mostRatedService,
} from "../../store/services";

import Logo from "../../assets/logo.png";

import { Link } from "react-router-dom";
import Access from "../Access/Access";

export default function Header(props) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(search);
    dispatch(searchService({ title: search }));
    setSearch("");
    navigate("/search");
  }
  function handleNew(e) {
    e.preventDefault();
    dispatch(lastNewService());
    navigate("/lastNew");
  }
  function handleMostRated(e) {
    e.preventDefault();
    dispatch(mostRatedService());
    navigate("/mostRated");
  }

  function handleChange(e) {
    dispatch(searchByCity({ city: e.target.value }));
    // setSearchCity('amman')
    navigate("/searchCity");
  }
  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  const { isSignin } = useSelector((state) => state.authSlice);

  return (
    // <div className="headers container-com">
    //   <div className="head-header">
    //     <nav>
    //       <div>
    //         <p className="logo">Hi service</p>
    //       </div>
    //       <ul>
    //        <Access role={'admin'}>
    //        <Link className="Link" to={"/users"}>
    //           {" "}
    //           <li>Users</li>
    //         </Link>
    //         </Access>
    //         {/* *************************************** */}
    //         <Access role="user">
    //         <Link className="Link" to={"/Services"}>
    //           {" "}
    //           <li>Services</li>
    //         </Link>
    //         </Access>
    //         {/* ======================================== */}
    //         <Access role='admin'>
    //         <div className="dropdown">
    //           <button className="dropbtn">Service</button>
    //           <div className="dropdown-content">
    //             <Link className="Link" to={"/Services"}>
    //               {" "}
    //               <li href="#">All Services</li>{" "}
    //             </Link>
    //             <Link className="Link" to={"/services/confirmation"}>
    //               {" "}
    //               <li href="#">Services Confirmation</li>{" "}
    //             </Link>
    //           </div>
    //         </div>
    //         </Access>
    //         {/* ******************************************* */}
    //         <Access role='admin'>
    //         <Link className="Link" to={"/reports-admin"}>
    //           {" "}
    //           <li>Reports</li>
    //         </Link>
    //         </Access>
    //         {/* ********************************** */}
    //         <Access role='user'>
    //         <Link className="Link" to={"/My-Services"}>
    //           {" "}
    //           <li>My services</li>
    //         </Link>
    //         </Access>
    //         {/* *************Reservation************ */}

    //         <div className="dropdown">
    //           <button className="dropbtn">Reservation</button>
    //           <Access role="user">
    //           <div className="dropdown-content">

    //             <Link className="Link" to={"/My-Reservation"}>
    //               {" "}
    //               <li href="#">My Reservation</li>{" "}
    //             </Link>
    //             <Link className="Link" to={"/reserve/myService"}>
    //               {" "}
    //               <li href="#">Reserve my Service</li>{" "}
    //             </Link>
    //           </div>
    //           </Access>
    //         </div>

    //         <Link className="Link" to={"/Reports"}>
    //           <li>Reports</li>
    //         </Link>

    //         <Link className="Link" to={"/Contact-us"}>
    //           <li>Contact us</li>
    //         </Link>
    //         {/* **************Setting********** */}
    //         <div className="dropdown">
    //           <button className="dropbtn">Setting</button>
    //           <div className="dropdown-content">
    //             <Link className="Link" to={"/Settings"}>
    //               {" "}
    //               <li href="#">Profile Setting</li>{" "}
    //             </Link>
    //             <Link className="Link" to={"/reserve/myService"}>
    //               {" "}
    //               <li href="#">Favorite List</li>{" "}
    //             </Link>
    //             <Link className="Link" to={"/blockList-user"}>
    //               {" "}
    //               <li href="#">Block List</li>{" "}
    //             </Link>
    //             <Link className="Link" to={"/Reports"}>
    //               <li>Reports</li>
    //             </Link>
    //           </div>
    //         </div>
    //       </ul>
    //     </nav>
    //     <div>
    //       <Logout />
    //     </div>
    //   </div>

    //  <div className="search">
    //   <form onSubmit={handleSubmit}>

    //     <input type="text" placeholder="Search....." name="user" value={search} onChange={(e)=> setSearch(e.target.value)} />
    //     <button type="submit" onClick={()=>navigate('/search')}> Search</button>
    //     </form>
    //     </div>

    // </div>
    //************************************************************** */
    <>
      <header>
        {/* <!-- TOP HEADER --> */}
        <div id="top-header">
          <div className="container">
            <ul className="header-links pull-left">
              <li>
                <a href="#">
                  <i className="fa fa-phone"></i> +021-95-51-84
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-envelope-o"></i> email@email.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-map-marker"></i> 1734 Stonecoal Road
                </a>
              </li>
            </ul>
            <ul className="header-links pull-right">
              {/* <li><a href="#"><i className="fa fa-dollar"></i> USD</a></li>
						<li><a href="#"><i className="fa fa-user-o"></i> My Account</a></li> */}
              <div>
                <Logout />
              </div>
            </ul>
          </div>
        </div>
        {/* <!-- /TOP HEADER --> */}

        {/* <!-- MAIN HEADER --> */}
        <div id="header">
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- row --> */}
            <div className="search-logo--">
              {/* <!-- LOGO --> */}
              <div className="logo-header">
                <div className="header-logo">
                  <p href="#" className="logo">
                    {/* <img src="./img/logo.png" alt=""/> */}
                    <p className="">
                      <Link className="Link" to={"/"}>
                        <img src={Logo} width="175px" />
                      </Link>
                    </p>
                  </p>
                </div>
              </div>
              {/* <!-- /LOGO --> */}

              {/* <!-- SEARCH BAR --> */}
              <div className="se-he">
                <div className="header-search">
                  <form onSubmit={handleSubmit}>
                    <input
                      className="input"
                      placeholder="Search here"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit" className="search-btn">
                      Search
                    </button>
                  </form>
                </div>
                <div className="input-select">
                  <div className="dropdown">
                    <p className="filter">filter</p>
                    <div className="dropdown-content">
                      <li onClick={handleNew} href="#">
                        New Service
                      </li>
                      <li onClick={handleMostRated} href="#">
                        Most Rated
                      </li>
                    </div>
                  </div>
                </div>
                <div className="search-city ">
                  <select className="search-field1 ttt" onChange={handleChange}>
                    <option>Search By city</option>
                    <option value="Amman">amman</option>
                    <option value="Jarash">Jerash</option>
                    <option value="Irbid">Irbid</option>
                    <option value="Zarqa">Zarqa</option>
                    <option value="Aqaba">Aqaba</option>
                    <option value="Madaba">Madaba</option>
                  </select>
                </div>
              </div>
              {/* <!-- /SEARCH BAR --> */}

              {/* <!-- ACCOUNT --> */}
              <div className="clearfix">
                <div className="header-ctn">
                  {/* <!-- Wishlist --> */}
                  <div>
                    <a href="#">
                      <i className="fa fa-heart-o"></i>
                      <span>Favorite List</span>
                      <div className="qty">2</div>
                    </a>
                  </div>
                  {/* <!-- /Wishlist --> */}

                  {/* <!-- Cart --> */}
                  <div className="dropdown">
                    <div className="cart-dropdown">
                      <div className="cart-list">
                        <div className="product-widget">
                          <div className="product-img">
                            <img src="./img/product01.png" alt="" />
                          </div>
                          <div className="product-body">
                            <h3 className="product-name">
                              <a href="#">product name goes here</a>
                            </h3>
                            <h4 className="product-price">
                              <span className="qty">1x</span>$980.00
                            </h4>
                          </div>
                          <button className="delete">
                            <i className="fa fa-close"></i>
                          </button>
                        </div>

                        <div className="product-widget">
                          <div className="product-img">
                            <img src="./img/product02.png" alt="" />
                          </div>
                          <div className="product-body">
                            <h3 className="product-name">
                              <a href="#">product name goes here</a>
                            </h3>
                            <h4 className="product-price">
                              <span className="qty">3x</span>$980.00
                            </h4>
                          </div>
                          <button className="delete">
                            <i className="fa fa-close"></i>
                          </button>
                        </div>
                      </div>
                      <div className="cart-summary">
                        <small>3 Item(s) selected</small>
                        <h5>SUBTOTAL: $2940.00</h5>
                      </div>
                      <div className="cart-btns">
                        <a href="#">View Cart</a>
                        <a href="#">
                          Checkout <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /Cart --> */}

                  {/* <!-- Menu Toogle --> */}
                  <div className="menu-toggle">
                    <a href="#">
                      <i className="fa fa-bars"></i>
                      <span>Menu</span>
                    </a>
                  </div>
                  {/* <!-- /Menu Toogle --> */}
                </div>
              </div>
              {/* <!-- /ACCOUNT --> */}
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container --> */}
        </div>
        {/* <!-- /MAIN HEADER --> */}
      </header>
      {/* // ************************************************************* */}
      {/* // <!-- NAVIGATION --> */}
      <nav id="navigation">
        {/* <!-- container --> */}
        <div class="container">
          {/* <!-- responsive-nav --> */}
          <div id="responsive-nav">
            {/* <!-- NAV --> */}
            <ul class="main-nav nav justify-content-center">
              <Access role={"admin"}>
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
              <Access role="admin">
                <div className="dropdown">
                  <button className="dropbtn">Service</button>
                  <div className="dropdown-content">
                    <Link className="Link" to={"/Services"}>
                      {" "}
                      <li href="#">All Services</li>{" "}
                    </Link>
                    <Link className="Link" to={"/Services/confirmation"}>
                      {" "}
                      <li href="#">Services Confirmation</li>{" "}
                    </Link>
                  </div>
                </div>
              </Access>
              {/* ******************************************* */}
              <Access role="admin">
                <Link className="Link" to={"/reports-admin"}>
                  {" "}
                  <li>Reports</li>
                </Link>
              </Access>
              {/* ********************************** */}
              <Access role="user">
                <Link className="Link" to={"/My-Services"}>
                  {" "}
                  <li>My services</li>
                </Link>
              </Access>
              {/* *************Reservation************ */}

              <div className="dropdown">
                <button className="dropbtn">Reservation</button>
                <Access role="user">
                  <div className="dropdown-content">
                    <Link className="Link" to={"/Reservation-Admin"}>
                      <li href="#">All Reservation</li>
                    </Link>
                    <Link className="Link" to={"/My-Reservation"}>
                      <li href="#">My Reservation</li>
                    </Link>
                    <Link className="Link" to={"/reserve/myService"}>
                      <li href="#">Reserve my Service</li>
                    </Link>
                  </div>
                </Access>
              </div>
              {/************************************/}
              <Link className="Link" to={"/Reports"}>
                <li>Reports</li>
              </Link>
              {/****************AllContactAdmin********************/}
              <div class="dropdown">
                <button class="dropbtn">
                  {" "}
                  <Link className="Link" to={"/Contact-us"}>
                    {" "}
                    <li>Contact us</li>
                  </Link>
                </button>
                <div class="dropdown-content">
                  <Access role={"admin"}>
                    <Link className="Link" to={"/Contact-Admin"}>
                      <li href="#">All Contact</li>
                    </Link>
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

              {/* <div className="search">
      <form onSubmit={handleSubmit}>
      
        <input type="text" placeholder="Search....." name="user" value={search} onChange={(e)=> setSearch(e.target.value)} />
        <button type="submit" onClick={()=>navigate('/search')}> Search</button>
        </form>
        </div>  */}
            </ul>
            {/* <!-- /NAV --> */}
          </div>
          {/* <!-- /responsive-nav --> */}
        </div>
        {/* <!-- /container --> */}
      </nav>
      {/* // <!-- /NAVIGATION --> */}
    </>
  );
}
