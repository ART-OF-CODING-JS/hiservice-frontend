import "../../../myService-cards.css";

import { useState } from "react";
import cookie from "react-cookies";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Access from "../../Access/Access";
import Pagination from "../../pagenation/Pagination";
import { addToFavorite } from "../../../store/favorite";
import DeleteService from "../../My Services/DeleteMyService/DeleteMyService";
import EditServices from "../../My Services/edit-my-services/edit-my-services.component";

export default function SuggestServices(props) {
  const dispatch = useDispatch();
  const { allServices, isLoading } = useSelector((state) => state.servicesSlice);

  const handleReload = () => {
    window.scrollTo(0, 0);
  };

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
      {props.SuggestServ[1] ? (
        <>
          <p className="similar-services">Similar Services</p>
          <section className="service-container container-com">
            {props.SuggestServ[1].map((service) => (
              <>
                <figure className="image-block" key={service.id}>
                  <Link to={`/Services/${service.id}`}>
                    <img onClick={handleReload} className="img" alt="service" src={service.image} />
                  </Link>

                  <figcaption>
                    <div className="card-info">
                      <h3>{service.title}</h3>
                      <p style={{ color: "black" }}>In {service.city}</p>
                      <Access role={"user"}>
                        <div className="edit-delete-auth-button">
                          <div className="edit">
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-lg btn_services_"
                              onClick={() => handleClick(service.id)}
                            >
                              Add to Favorite <i className="fa-regular fa-heart"></i>
                            </button>
                          </div>
                          <div className="delete">
                            <Link
                              className="Link btn btn-outline-secondary btn-lg"
                              to={`/Services/${service.id}`}
                            >
                              More Details
                            </Link>
                          </div>
                        </div>
                      </Access>
                      <Access role={"admin"}>
                        <div className="edit-delete-auth-button">
                          <div className="edit">
                            <EditServices service={service} />
                          </div>
                          <div className="delete">
                            <DeleteService serviceId={service.id} />
                          </div>
                        </div>
                      </Access>
                    </div>
                  </figcaption>
                </figure>
              </>
            ))}
          </section>
        </>
      ) : null}
    </>
  );
}
