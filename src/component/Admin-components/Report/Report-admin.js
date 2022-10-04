import "./Report-admin.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import RejectReport from "./RejectReport/RejectReport";
import { getReportsAdmin } from "../../../store/reports";
import ConfirmReport from "./ConfirmReport/ConfirmReport";

export default function ReportAdmin() {
  const dispatch = useDispatch();

  const { reportsAdmin } = useSelector((state) => state.reportsSlice);
  const { allServices } = useSelector((state) => state.servicesSlice);

  useEffect(() => {
    dispatch(getReportsAdmin());
  }, [dispatch]);

  return (
    <section className="myservice-container container-com">
      {reportsAdmin.map((report) => (
        <div className="t" key={report.id}>
          <div className="my_services_body">
            <div className="container-my-services">
              <div className="card_img">
                {allServices
                  .filter((ele) => ele.id === report.serviceID)
                  .map((ele) => (
                    <img src={ele.image} alt="" />
                  ))}
                <div className="info">
                  <div className="edit-myservice common-edi-del">
                    <ConfirmReport id={report.id} />
                    <RejectReport id={report.id} />
                  </div>
                </div>
              </div>

              <div className="container__text">
                {allServices
                  .filter((service) => service.id === report.serviceID)
                  .map((service) => (
                    <h1>{service.title}</h1>
                  ))}

                <div className="container__text__star">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                </div>

                {allServices
                  .filter((service) => service.id === report.serviceID)
                  .map((service) => (
                    <p>{service.description}</p>
                  ))}

                <div className="container__text__timing">
                  <div className="container__text__timing_time">
                    <h2>City</h2>
                    {allServices
                      .filter((service) => service.id === report.serviceID)
                      .map((service) => (
                        <p>{service.city}</p>
                      ))}
                  </div>

                  <div className="container__text__timing_time">
                    <h2>Phone Number</h2>
                    {allServices
                      .filter((service) => service.id === report.serviceID)
                      .map((service) => (
                        <p>{service.phoneNumber}</p>
                      ))}
                  </div>
                  <div className="container__text__timing_time">
                    <h2>department</h2>
                    {allServices
                      .filter((service) => service.id === report.serviceID)
                      .map((service) => (
                        <p>{service.department}</p>
                      ))}
                  </div>
                </div>
                <button
                  className={
                    report.status === null
                      ? "btn_my_services ra"
                      : report.status === "confirm"
                      ? "btn_my_services con"
                      : "btn_my_services rej"
                  }
                >
                  {report.status === null
                    ? "inProgress"
                    : report.status === "reject"
                    ? "Rejected"
                    : "Active"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
