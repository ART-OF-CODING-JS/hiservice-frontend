import React from "react";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import Logout from "../Auth/Logout/Logout";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllServices,searchService } from "../../store/services";
// import AddService from "../Add service/AddServices";
// import Reports from "../../Reports/sendReports/Reports";
import { Link } from "react-router-dom";

export default function Header(props) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search,setSearch]= useState('')
 
  function handleSubmit(e){
    e.preventDefault();
    console.log(search);
    dispatch(searchService({title:search}))
    setSearch('')
  }
  useEffect(() => {

    dispatch(getAllServices());
    // dispatch(searchService());
  }, [dispatch]);
  // console.log(allServices);
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
            {/* *************Reservation************ */}
       
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
            {/* **************Setting********** */}
            <div className="dropdown">
              <button className="dropbtn">Setting</button>
              <div className="dropdown-content">
                <Link className="Link" to={"/Settings"}>
                  {" "}
                  <li href="#">Profile Setting</li>{" "}
                </Link>
                <Link className="Link" to={"/reserve/myService"}>
                  {" "}
                  <li href="#">Favorite List</li>{" "}
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
      <div className="search">
      <form onSubmit={handleSubmit}>
      
        <input type="text" placeholder="Search....." name="user" value={search} onChange={(e)=> setSearch(e.target.value)} />
        <button type="submit" onClick={()=>navigate('/search')}> Search</button>
        </form>
        </div>
    </div>
  );
}
