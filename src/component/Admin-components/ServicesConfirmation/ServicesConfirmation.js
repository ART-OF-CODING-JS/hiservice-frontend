import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Pagination from "../../pagenation/Pagination";
import { updateStatusService, getServicesConfirmation } from "../../../store/services";

export default function ServicesConfirmation(props) {
  const { allServicesAdmin } = useSelector((state) => state.servicesSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServicesConfirmation());
  }, [dispatch]);

  ///////////pagination/////
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const indexOfLastRecord = currentPage * postsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - postsPerPage;
  const currentRecords = allServicesAdmin.slice(indexOfFirstRecord, indexOfLastRecord);

  const handleConfirm = (id) => {
    const data = {
      id: id,
      status: "confirm",
    };
    dispatch(updateStatusService(data));
  };
  const handleReject = (id) => {
    const data = {
      id: id,
      status: "reject",
    };
    dispatch(updateStatusService(data));
  };

  return (
    <>
      <section className="myservice-container container-com">
        {currentRecords.map((service) => (
          <div className="t" key={service.id}>
            <div className="my_services_body">
              <div className="container-my-services">
                <div className="card_img">
                  <img src={service.image} alt="Pancake" />

                  <div className="info">
                    <div className="edit-myservice common-edi-del">
                      <div className="common-edi-del">
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => handleReject(service.id)}
                        >
                          Reject <i className="fa-solid fa-circle-xmark"></i>
                        </button>
                      </div>
                      <div className="common-edi-del">
                        <button
                          className="btn btn-outline-success"
                          onClick={() => handleConfirm(service.id)}
                        >
                          Confirm <i className="fa-solid fa-circle-check"></i>
                        </button>
                      </div>{" "}
                    </div>
                  </div>
                </div>

                <div className="container__text">
                  <h1>{service.title}</h1>
                  <div className="container__text__star">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                  </div>
                  <p>{service.description}</p>
                  <div className="container__text__timing">
                    <div className="container__text__timing_time">
                      <h2>City</h2>
                      <p>{service.city}</p>
                    </div>
                    <div className="container__text__timing_time">
                      <h2>Phone Number</h2>
                      <p>{service.phoneNumber}</p>
                    </div>
                    <div className="container__text__timing_time">
                      <h2>department</h2>
                      <p>{service.department}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Pagination
        recordsPerPage={postsPerPage}
        totalPosts={allServicesAdmin.length}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
