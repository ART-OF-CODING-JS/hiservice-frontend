import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import { getAllServices } from "../../../store/services";
import AddService from "../Add service/AddServices";
import Reports from "../../Reports/sendReports/Reports";
import Access from "../../Access/Access";
import DeleteService from "../../My Services/DeleteMyService/DeleteMyService";
import EditServices from "../../My Services/edit-my-services/edit-my-services.component";
export default function Services(props) {
  const { allServices, isLoading, error } = useSelector((state) => state.servicesSlice);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);
  console.log(allServices);
  return (
    <>
     <Access role='user'> <AddService /></Access>
      <section className="service-container container-com">
        {allServices.map((ele) => (
          <div className="t" key={ele.id}>
            <div className="service-card">
              <div className="image-card">
                <Link to={`/Services/${ele.id}`}>
                  <img className="img" alt="service" src={ele.image} />
                </Link>
              </div>
              <div className="card-info">
                <p className="title">{ele.title}</p>
                <p className="city">{ele.city}</p>
                <p className="department">{ele.department}</p>
                <Access role={'user'}>
                <div className="">
                  <button className="add-fav btn-card">
                    Add to Favorite <i className="fa-regular fa-heart"></i>
                  </button>
                  <Reports id={ele.id} />
                </div>
                </Access>
                {/***********Admin********* */}
                <Access role={'admin'}>
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
                </Access>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
