import Access from "../../Access/Access";
import Reservation from "../../Reservation/SendReservation/Reservation";
import ServiceProviderInfo from "../ServiceProviderInfo/ProviderInfo";
import BlockProvider from "./Block service provider/BlockProvider";
import "./MainService.css";
import Reports from "../../Reports/sendReports/Reports";
import { Link } from "react-router-dom";
import Comments from "../Comments/Comments";
export default function MainService(props) {
  return (
    <section className="container-main-service container-com">
      {props.oneService.slice(0, 1).map((ele) => (
        <div className="main-service-item" key={ele.id}>
          <div className="tit-img">
            <p className="time">{ele.createdAt}</p>
            <img className="img-main" alt="images" src={ele.image} />
          </div>

          <div className="about-service">
            <p className="title-main-service">{ele.title}</p>

            <div className="reserve-service-pro">
              <ServiceProviderInfo ServiceProviderId={ele.userID} />
              <div className="Reservation-button">
                <Reservation serviceId={ele.id} />
              </div>
              ;
            </div>
            <div className="disc-main-service">
              <p>
                <strong>Description</strong>
              </p>
              {ele.description}
            </div>
            <div className="block-report">
              <Access role={"user"}>
                <BlockProvider providerID={ele.userID} />
                <Reports providerID={ele.id} />
                <Link
                        className="Link btn btn-outline-secondary btn-lg"
                        to={`/chat/${ele.userID}`}
                      >
                        Chat
                      </Link>
              </Access>
            </div>
          </div>
          <Comments serviceId={ele.id} />
        </div>
      ))}
    </section>
  );
}
