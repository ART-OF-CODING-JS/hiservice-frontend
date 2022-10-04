import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import "./Services.scss";
import { getAllServices } from "../../../store/services";
import AddService from "../Add service/AddServices";
import Reports from "../../Reports/sendReports/Reports";
import Pagination from "../../pagenation/Pagination";
import Access from "../../Access/Access";
import DeleteService from "../../My Services/DeleteMyService/DeleteMyService";
import EditServices from "../../My Services/edit-my-services/edit-my-services.component";
import Search from "../../searchBar/Search";
import cookie from "react-cookies";
import { addToFavorite } from "../../../store/favorite";

export default function Services(props) {
  const { allServices, isLoading } = useSelector((state) => state.servicesSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const indexOfLastRecord = currentPage * postsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - postsPerPage;
  const currentRecords = allServices.slice(indexOfFirstRecord, indexOfLastRecord);

  function handleClick(id) {
    const sendData = {
      addToFavorite: true,
      comments: "",
      rate: 5,
      userID: cookie.load("userID"),
      serviceID: id,
    };
    dispatch(addToFavorite(sendData));
  }

  return isLoading ? (
    <div className="spinner-service">
      <Spinner animation="border" variant="dark" />
    </div>
  ) : (
    <>
      <Search />
      <div className="image-all-section">
        <img
          alt="h"
          src='https://i.postimg.cc/VvvTD7Vt/pexels-cottonbro-4488651-1.jpg'
        />
        <p>Profile Settings</p>
      </div>
      <Access role="user">
        <AddService />
      </Access>

      <section className="service-container container-com">
        {currentRecords.map((ele,idx) => (
          <>
            <figure className="image-block" key={idx}>
              <Link to={`/Services/${ele.id}`}>
                <img className="img" alt="service" src={ele.image} />
              </Link>
              <figcaption>
                <h3>{ele.title}</h3>
                <p>In {ele.city}</p>
                <h4>{ele.department}</h4>

                <Access role={"user"}>
                  <div className="edit-delete-auth-button">
                    <div className="edit">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-lg btn_services_"
                        onClick={() => handleClick(ele.id)}
                      >
                        Add to Favorite <i className="fa-regular fa-heart"></i>
                      </button>
                    </div>
                    <div className="delete">
                      <Link
                        className="Link btn btn-outline-secondary btn-lg"
                        to={`/Services/${ele.id}`}
                      >
                        More Details
                      </Link>
                    </div>
                  </div>
                </Access>
                <Access role={"admin"}>
                  <div className="edit-delete-auth-button">
                    <div className="edit">
                      <EditServices id={ele.id} />
                    </div>
                    <div className="delete">
                      <DeleteService serviceId={ele.id} />
                    </div>
                  </div>
                </Access>
              </figcaption>
            </figure>
          </>
        ))}
      </section>
      <Pagination
        recordsPerPage={postsPerPage}
        totalPosts={allServices.length}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
