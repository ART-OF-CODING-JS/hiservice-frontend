import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ServicesConfirmation.css";
import { updateStatusService, getServicesConfirmation } from "../../../store/services";
import Pagination from "../../pagenation/Pagination";
export default function ServicesConfirmation(props) {
  const { allServicesAdmin } = useSelector((state) => state.servicesSlice);
  // const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServicesConfirmation());
  }, [dispatch]);

  ///////////pagination/////
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPerPage] = useState(9);

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
      <section className="service-container container-com">
        {currentRecords.map((ele) => (
          <div className="ser" key={ele.id}>
            <div className="service-card card">
              <div className="image-card card-images">
                <Link to={`/Services/${ele.id}`}>
                  <img className="img" alt="service" src={ele.image} />
                </Link>
              </div>
              <div className="card-info">
                <p className="title">{ele.title}</p>
                <p className="city">{ele.city}</p>
                <p className="department details">
                  {ele.department}
                  <h2>Hello</h2>
                </p>
                {/***********Admin********* */}

                <div className="btns-myService">
                  <div className="common-edi-del">
                    <button className="btn btn-outline-danger" onClick={() => handleReject(ele.id)}>
                      Reject <i className="fa-solid fa-circle-xmark"></i>
                    </button>
                  </div>
                  <div className="common-edi-del">
                    <button className="btn btn-outline-success" onClick={() => handleConfirm(ele.id)}>
                      Confirm <i className="fa-solid fa-circle-check"></i>
                    </button>
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
