import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  searchByCity,
  searchService,
  lastNewService,
  mostRatedService,
} from "../../store/services";
import "./search.css";

export default function Search(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchService({ title: e.target.inputs.value }));
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
          <option>Search By city</option>
          <option value="amman">Amman</option>
          <option value="jarash">Jerash</option>
          <option value="Irbid">Irbid</option>
          <option value="zarqa">Zarqa</option>
          <option value="Aqaba">Aqaba</option>
          <option value="Madaba">Madaba</option>
        </select>
      </div>
    </div>
  );
}
