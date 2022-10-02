import AddService from "../Services/Add service/AddServices";
import Pagination from "../pagenation/Pagination";
import { useState } from "react";
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

     ///////////pagination/////
     const [currentPage, setCurrentPage] = useState(1);
     const [postsPerPage,setPerPage] = useState(4);
   
     const indexOfLastRecord = currentPage * postsPerPage;
     const indexOfFirstRecord = indexOfLastRecord - postsPerPage;
     const currentRecords = myServices.slice(indexOfFirstRecord, indexOfLastRecord);
  return (
    <>
      <AddService />
      <section className="myservice-container container-com">
        {currentRecords.map((ele) => (
          <div className="t" key={ele.id}>
            {/* <div className="myservice-card">
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
            </div> */}

               {/* ********************************************************************** */}
      <div className="my_services_body">
      <div className="container-my-services">
        <div className="card_img">
        <img
    src={ele.image} 
    alt="Pancake"
  />
  <div className="info">
    <div className="edit-myservice common-edi-del">
    <button><EditServices id={ele.id} /></button>
    <button><DeleteService serviceId={ele.id}/></button>
    </div>

  </div>
        </div>
 
  <div className="container__text">
    <h1>{ele.title}</h1>
    <div className="container__text__star">
      <span className="fa fa-star checked" />
      <span className="fa fa-star checked" />
      <span className="fa fa-star checked" />
      <span className="fa fa-star checked" />
      <span className="fa fa-star checked" />
    </div>
    <p>
     {ele.description}
    </p>
    <div className="container__text__timing">
      <div className="container__text__timing_time">
        <h2>City</h2>
        <p>{ele.city}</p>
      </div>
      <div className="container__text__timing_time">
        <h2>Phone Number</h2>
        <p>{ele.phoneNumber}</p>
      </div>
      <div className="container__text__timing_time">
        <h2>department</h2>
        <p>{ele.department}</p>
      </div>
    </div>
    <button className={ele.status===null?"btn_my_services ra":
    ele.status==='confirm'?"btn_my_services con":"btn_my_services rej"}>
    {ele.status === null ? 'inProgress'
     : ele.status === "reject" ? 'Rejected'
      :'Active'}

    </button>
  </div>
</div>
</div>

          </div>

          
        ))}
      </section>
      <Pagination 
      recordsPerPage={postsPerPage}
      totalPosts={myServices.length}
      setCurrentPage={setCurrentPage}
    
      />
   
    </>

  );
}
