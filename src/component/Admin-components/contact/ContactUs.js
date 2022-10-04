import Card from "react-bootstrap/Card";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContact } from "../../../store/contact";
import "./contact.scss";
import "./con.css";
import Pagination from "../../pagenation/Pagination";

export default function ContactUs(props) {
  const dispatch = useDispatch();

  const { allContact } = useSelector((state) => state.contactSlice);

  useEffect(() => {
    dispatch(getAllContact());
  }, [dispatch]);

  ///////////pagination/////
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPerPage] = useState(4);
  const indexOfLastRecord = currentPage * postsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - postsPerPage;
  const currentRecords = allContact.slice(indexOfFirstRecord, indexOfLastRecord);
  return (
    <>
      {currentRecords.map((ele, idx) => (
        <div className="main-container">
          <div className="contact">
            <img
              src="https://images.pexels.com/photos/9089222/pexels-photo-9089222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Pancake"
            />
            <div className="contact__text">
              <h1>{ele.username}</h1>
              <div className="contact__text__timing">
                <div className="contact__text__timing_time">
                  <h2>{ele.email}</h2>
                </div>
              </div>
              <div className="contact__text__star">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </div>
              <p>{ele.description}</p>
            </div>
          </div>
        </div>
      ))}

      <Pagination
        recordsPerPage={postsPerPage}
        totalPosts={allContact.length}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
