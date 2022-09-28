import AddService from "../Services/Add service/AddServices";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMyServices, deleteOneService } from "../../store/services";
import { useEffect } from "react";
import "./MyServices.css";

import EditServices from "./edit-my-services/edit-my-services.component";
import DeleteService from "./DeleteMyService/DeleteMyService";

export default function MyServices(props) {
  const { myServices } = useSelector((state) => state.servicesSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyServices());
  }, [dispatch]);

  return (
    <>
      <AddService />
      <section className="myservice-container container-com">
        {myServices.map((ele) => (
          <div className="t" key={ele.id}>
            <div className="myservice-card">
              <div className="image-myservice">
                <Link to={`/Services/${ele.id}`}>
                  <img className="img-myservice" alt="service" src={ele.image} />
                </Link>
              </div>
              <div className="card-info-myservice">
                <p className="title">{ele.title}</p>
                <p className="city">{ele.city}</p>
                <p className="department">{ele.department}</p>
                {ele.status === null ? <p className="inProgress stateus-myservice">inProgress</p> : ele.status === "reject" ? <p className="reject stateus-myservice">Rejected</p> : <p className="confirm stateus-myservice">Active</p>}
                <div className="btns-myService">
                  <div className="edit-myservice common-edi-del">
                    <button >
                      <EditServices id={ele.id} />
                    </button>
                  </div>
                  <div className="delete-myservice common-edi-del">
                 
                      <DeleteService serviceId={ele.id}/>
              
            
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
