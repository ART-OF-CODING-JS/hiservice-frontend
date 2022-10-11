import "./MainService.scss";

import Access from "../../Access/Access";
import Reservation from "../../Reservation/SendReservation/Reservation";
import ServiceProviderInfo from "../ServiceProviderInfo/ProviderInfo";
import BlockProvider from "./Block service provider/BlockProvider";
import "./MainService.css";
import Reports from "../../Reports/sendReports/Reports";
import { Link } from "react-router-dom";
import Comments from "../Comments/Comments";
import cookie from "react-cookies";

export default function MainService(props) {
  return (
    <section className="container-main-service container-com">
      {props.oneService.slice(0, 1).map((ele) => (
        <div key={ele.id}>
          <div className="main-serves-app" key={ele.id}>
            <div className="main-serves-main-div">
              <div className="main-service-img">
                <img className="" src={ele.image} alt="" />
              </div>
              <div className="info-div">
                <nav className="main-service-nav">
                  <span href="#/" className="main-service-span">
                    Created at : {ele.createdAt.substring(0, 10)}
                  </span>
                  {ele.userID === parseInt(cookie.load("userID")) ? (
                    <p style={{ color: "red" }}>Your Service</p>
                  ) : null}
                </nav>
                <h1 className="main-service-h1">
                  <span className="main-service-span">
                    <ServiceProviderInfo ServiceProviderId={ele.userID} />
                  </span>
                  {ele.title}, in {ele.city}
                </h1>
                <p className="text-break">{ele.description}</p>
                {!(ele.userID === parseInt(cookie.load("userID"))) ? (
                  <Access role={"user"}>
                    <div className="block-report">
                      <div className="block-report-btn">
                        <BlockProvider providerID={ele.userID} />
                        <Reports providerID={ele.id} />
                      </div>
                      <Reservation serviceId={ele.id} style={{ fontSize: "15px" }} />
                      <Link
                        className="btn btn-warning add-btn"
                        to={`/chat/${ele.userID}`}
                        style={{ fontSize: "15px" }}
                      >
                        Chat{" "}
                        <i
                          className="fa fa-comments-o"
                          aria-hidden="true"
                          style={{ marginTop: "10px" }}
                        ></i>
                      </Link>
                    </div>
                  </Access>
                ) : null}
              </div>
            </div>
          </div>
          <div className="main-service-comments">
            <Comments serviceId={ele.id} />
          </div>
        </div>
      ))}
    </section>
  );
}
