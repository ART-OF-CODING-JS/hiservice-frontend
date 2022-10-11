import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyReserve } from "../../../store/reservations";
import DeleteReservation from "./DeleteReservation/DeleteReservation";
import { Spinner } from "react-bootstrap";
import UserDataUsernamePhoneNumber from "../../userInfo/UserDataUsernamePhoneNumber";
import { Link } from "react-router-dom";

export default function MyReservation(props) {
  const { allServices } = useSelector((state) => state.servicesSlice);
  const { myReservation, isLoading } = useSelector((state) => state.reserveSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyReserve());
  }, [dispatch]);

  return isLoading ? (
    <div className="spinner-service">
      <Spinner animation="border" variant="dark" />
    </div>
  ) : (
    <div>
      <div className="image-all-section">
        <img alt="" src="https://i.postimg.cc/mrHFFMNy/pexels-cottonbro-4065889.jpg" />
        <p>My Reservation</p>
      </div>
      <section className="myservice-container container-com">
        {myReservation.map((reservation, idx) => (
          <div className="t" key={idx}>
            <div className="my_services_body">
              {allServices
                .filter((service) => service.id === reservation.serviceID)
                .map((service) => (
                  <div className="container-my-services" key={service.id}>
                    <div className="card_img">
                      <img src={service.image} alt="" />
                      <div className="info">
                        <div className="edit-myservice common-edi-del">
                          <DeleteReservation reserveId={reservation.id} />

                          <button className="btn btn-warning btn-lg">
                            <Link
                              className=""
                              to={`/Services/${service.id}`}
                              style={{ color: "black", fontSize: "14px", fontWeight: "700" }}
                            >
                              More Details
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="container__text">
                      <div className="container__text__timing">
                        <div className="container__text__timing_time">
                          <h2>Provider</h2>

                          <UserDataUsernamePhoneNumber ID={service.userID} />
                        </div>

                        <div className="container__text__timing_time">
                          <h2>Title</h2>

                          <h5>{service.title}</h5>
                        </div>
                      </div>

                      <div className="container__text__timing">
                        <div className="container__text__timing_time">
                          <h2>department</h2>

                          <h5>{service.department}</h5>
                        </div>

                        <div className="container__text__timing_time">
                          <h2>City</h2>

                          <h5>{service.city}</h5>
                        </div>

                        <div className="container__text__timing_time">
                          <h2>Time</h2>
                          <p>{reservation.time.substring(0, 5)}</p>
                        </div>
                        <div className="container__text__timing_time">
                          <h2>Date</h2>
                          <p>
                            {reservation.date.substring(8, 10)}/{reservation.date.substring(5, 7)}
                          </p>
                        </div>
                      </div>

                      <div className="container__text__timing">
                        <div className="container__text__timing_time">
                          <h2>Note</h2>
                          <p>{reservation.description}</p>
                        </div>
                      </div>

                      <button
                        className={
                          reservation.status === null
                            ? "btn_my_services ra"
                            : reservation.status === "confirm"
                            ? "btn_my_services con"
                            : "btn_my_services rej"
                        }
                      >
                        {reservation.status === null
                          ? "inProgress"
                          : reservation.status === "reject"
                          ? "Rejected"
                          : "Active"}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>{" "}
    </div>
  );
}
