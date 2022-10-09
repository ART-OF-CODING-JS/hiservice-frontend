import "./MainService.scss";

import Access from "../../Access/Access";
import Comments from "../Comments/Comments";
import Reports from "../../Reports/sendReports/Reports";
import BlockProvider from "./Block service provider/BlockProvider";
import ServiceProviderInfo from "../ServiceProviderInfo/ProviderInfo";
import Reservation from "../../Reservation/SendReservation/Reservation";

export default function MainService(props) {
  return (
    <section className="container-main-service container-com">
      {props.oneService.slice(0, 1).map((ele) => (
        <>
          <div className="main-serves-app" key={ele.id}>
            <div className="main-serves-main-div">
              <div className="main-service-img">
                <img className="" src={ele.image} alt="" />
              </div>
              <div className="info-div">
                <nav className="main-service-nav">
                  <a href="#/">Created at : {ele.createdAt.substring(0, 10)}</a>
                </nav>
                <h1 className="main-service-h1">
                  <span className="main-service-span">
                    <ServiceProviderInfo ServiceProviderId={ele.userID} />
                  </span>
                  {ele.title}, in {ele.city}
                </h1>
                <p className="text-break">{ele.description}</p>
                <div className="block-report">
                  <Access role={"user"}>
                    <div className="block-report-btn">
                      <BlockProvider providerID={ele.userID} />
                      <Reports providerID={ele.id} />
                    </div>
                    <Reservation serviceId={ele.id} />
                  </Access>
                </div>
              </div>
            </div>
          </div>
          <div className="main-service-comments">
            <Comments serviceId={ele.id} />
          </div>
        </>
      ))}
    </section>
  );
}
