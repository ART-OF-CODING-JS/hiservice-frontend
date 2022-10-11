import "../../../myService-cards.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

import RejectReserve from "./RejectReserve/RejectReserve";
import ConfirmReserve from "./ConfirmReserve/ConfirmReserve";
import { getProviderReservations } from "../../../store/reservations";
import UserDataUsernamePhoneNumber from "../../userInfo/UserDataUsernamePhoneNumber";

export default function ReserveMyService() {
  const dispatch = useDispatch();
  const { allServices } = useSelector((state) => state.servicesSlice);
  const { ProviderReservations, isLoading } = useSelector(
    (state) => state.reserveSlice
  );

  useEffect(() => {
    dispatch(getProviderReservations());
  }, [dispatch]);

  return isLoading ? (
    <div className="spinner-service">
      <Spinner animation="border" variant="dark" />
    </div>
  ) : (
    <div>
      <div className="image-all-section">
        <img
          alt="h"
          src="https://i.postimg.cc/mrHFFMNy/pexels-cottonbro-4065889.jpg"
        />
        <p>Reserve My Services</p>
      </div>
      <section className="myservice-container container-com">
        {ProviderReservations.map((reservation, idx) => (
          <div className="t" key={reservation.id}>
            <div className="my_services_body">
              <div className="container-my-services">
                <div className="card_img">
                  {allServices
                    .filter((service) => service.id === reservation.serviceID)
                    .map((service) => (
                      <img src={service.image} alt="" key={service.id} />
                    ))}
                  <div className="info">
                    <div className="edit-myservice common-edi-del">
                      <RejectReserve id={reservation.id} />
                      <ConfirmReserve id={reservation.id} />{" "}
                    </div>
                  </div>
                </div>
                {allServices
                  .filter((service) => service.id === reservation.serviceID)
                  .map((service) => (
                    <div className="container__text" key={service.id}>
                      <div className="container__text__timing">
                        <div className="container__text__timing_time">
                          <h2>User</h2>
                          <UserDataUsernamePhoneNumber
                            ID={reservation.userID}
                          />
                        </div>

                        <div className="container__text__timing_time">
                          <h2>Title</h2>

                          <h5>{service.title}</h5>
                        </div>
                      </div>

                      <div className="container__text__timing">
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
                            {reservation.date.substring(8, 10)}/
                            {reservation.date.substring(5, 7)}
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
                  ))}
              </div>
            </div>
          </div>
        ))}
      </section>{" "}
    </div>
  );
}
