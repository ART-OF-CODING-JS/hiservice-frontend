import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import EditReservation from "./EditReservation";
import Pagination from "../../pagenation/Pagination";
import { getAllReservation } from "../../../store/reservations";
import DeleteReservation from "../../Reservation/MyReservation/DeleteReservation/DeleteReservation";
import UserDataUsernamePhoneNumber from "../../userInfo/UserDataUsernamePhoneNumber";

export default function Reservation(props) {
  const dispatch = useDispatch();
  const { allReservation } = useSelector((state) => state.reserveSlice);
  const { allServices } = useSelector((state) => state.servicesSlice);

  useEffect(() => {
    dispatch(getAllReservation());
  }, [dispatch]);

  ///////////pagination/////
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPerPage] = useState(4);
  const indexOfLastRecord = currentPage * postsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - postsPerPage;
  const currentRecords = allReservation.slice(indexOfFirstRecord, indexOfLastRecord);
  return (
    <>
      <section className="myservice-container container-com">
        {currentRecords.map((reservation, indx) => (
          <div className="t" key={indx}>
            <div className="my_services_body">
              <div className="container-my-services">
                <div className="card_img">
                  {allServices
                    .filter((ele) => ele.id === reservation.serviceID)
                    .map((ele) => (
                      <img src={ele.image} alt="" />
                    ))}
                  <div className="info">
                    <div className="edit-myservice common-edi-del">
                      <DeleteReservation reserveId={reservation.id} />
                      <EditReservation reserveId={reservation.id} />
                    </div>
                  </div>
                </div>

                <div className="container__text">
                  <div className="container__text__timing">
                    <div className="container__text__timing_time">
                      <h2>User</h2>
                      {allServices
                        .filter((service) => service.id === reservation.userID)
                        .map((service) => (
                          <UserDataUsernamePhoneNumber ID={service.userID} />
                        ))}
                    </div>

                    <div className="container__text__timing_time">
                      <h2>Provider</h2>
                      {allServices
                        .filter((service) => service.id === reservation.serviceID)
                        .map((service) => (
                          <UserDataUsernamePhoneNumber ID={service.userID} />
                        ))}
                    </div>
                  </div>

                  <div className="container__text__timing">
                    <div className="container__text__timing_time">
                      <h2>Title</h2>
                      {allServices
                        .filter((service) => service.id === reservation.serviceID)
                        .map((service) => (
                          <p>{service.title}</p>
                        ))}
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
            </div>
          </div>
        ))}
      </section>
      <Pagination
        recordsPerPage={postsPerPage}
        totalPosts={allReservation.length}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
