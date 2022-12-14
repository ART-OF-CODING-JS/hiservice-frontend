import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  searchByCity,
  searchService,
  lastNewService,
  mostRatedService,
} from "../../store/services";
import "./search.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Button,
} from "reactstrap";

export default function Search(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchService({ title: e.target.inputs.value }));
    navigate("/search");
  }
  useEffect(()=>{
    
  })
  function handleNew(e) {
    e.preventDefault();

    dispatch(lastNewService());
    navigate("/lastNew");
  }
  // function handleMostRated(e) {
  //   e.preventDefault();
  //   dispatch(mostRatedService());
  //   navigate("/mostRated");
  // }

  function handleChange(e) {
    dispatch(searchByCity({ city: e.target.value }));
    navigate("/searchCity");
  }

  return (
    <div className="search_container">
      <div className="search_section">
        <div className="co_sera">
          <div className="search">
            <i className="fa fa-search" />
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Search" name="inputs" />
              <button className="btn btn-primary">Search</button>
            </form>
          </div>
        </div>
      </div>

      <div className="">
        <div className="nav-item dropdown">
          <p className="filter_">filter</p>
          <div className="dropdown-content">
            <li onClick={handleNew} href="#">
              New Service
            </li>
          </div>
        </div>
      </div>
      <div className="search-city ">
        <select className="search-field1 ttt" onChange={handleChange}>
          <option className="list-choice-objects">Search By city</option>
          <option value="Amman">Amman</option>
          <option value="Jarash">Jerash</option>
          <option value="Irbid">Irbid</option>
          <option value="Zarqa">Zarqa</option>
          <option value="Aqaba">Aqaba</option>
          <option value="Madaba">Madaba</option>
        </select>

        {/* 
<UncontrolledDropdown group>
  <Button color="primary">
    Primary
  </Button>
  <DropdownToggle
    caret
    color="primary"
  />
  <DropdownMenu dark="true">
    <DropdownItem header>
      Header
    </DropdownItem>
    <DropdownItem>
      Some Action
    </DropdownItem>
    <DropdownItem text>
      Dropdown Item Text
    </DropdownItem>
    <DropdownItem disabled>
      Action (disabled)
    </DropdownItem>
    <DropdownItem divider />
    <DropdownItem>
      Foo Action
    </DropdownItem>
    <DropdownItem>
      Bar Action
    </DropdownItem>
    <DropdownItem>
      Quo Action
    </DropdownItem>
  </DropdownMenu>
</UncontrolledDropdown> */}
      </div>
    </div>
  );
}
