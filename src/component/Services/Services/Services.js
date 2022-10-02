import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import { getAllServices } from "../../../store/services";
import AddService from "../Add service/AddServices";
import Reports from "../../Reports/sendReports/Reports";
import Pagination from "../../pagenation/Pagination";
import Access from "../../Access/Access";
import DeleteService from "../../My Services/DeleteMyService/DeleteMyService";
import EditServices from "../../My Services/edit-my-services/edit-my-services.component";
import Search from "../../searchBar/Search";
import cookie from "react-cookies";
import { addToFavorite } from "../../../store/favorite";
import { Spinner } from "react-bootstrap";
export default function Services(props) {
  const { allServices, isLoading, error } = useSelector(
    (state) => state.servicesSlice
  );
  // const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);
  console.log(allServices);
  // console.log(searchedServices,"this we I will render the searched service");

  ///////////pagination/////
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPerPage] = useState(9);

  const indexOfLastRecord = currentPage * postsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - postsPerPage;
  const currentRecords = allServices.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  //////////////
  function handleClick(id) {
    const sendData = {
      addToFavorite: true,
      comments: "",
      rate: 5,
      userID: cookie.load("userID"),
      serviceID: id,
    };
    dispatch(addToFavorite(sendData));
  }

  return isLoading ? (
    <div className="spinner-service">
      <Spinner animation="border" variant="dark" />
    </div>
  ) : (
    <>
      <div className="image-all-section">
        <img
          alt="h"
          src="https://i.postimg.cc/VvvTD7Vt/pexels-cottonbro-4488651-1.jpg"
        />
        <p>Services </p>
      </div>
      <Access role="user">
        {" "}
        <AddService />
      </Access>
      <Search />
      <div className="background-all-services"></div>

      {error ? (
        <div class="alert alert-danger" role="alert">
         {error}
        </div>
      ) : (
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
                  <Access role={"user"}>
                    <div className="">
                      <button
                        className="add-fav btn-card"
                        onClick={() => handleClick(ele.id)}
                      >
                        Add to Favorite <i className="fa-regular fa-heart"></i>
                      </button>
                      <Reports id={ele.id} />
                    </div>
                  </Access>
                  {/***********Admin********* */}
                  <Access role={"admin"}>
                    <div className="btns-myService">
                      <div className="edit-myservice common-edi-del">
                        <button>
                          <EditServices id={ele.id} />
                        </button>
                      </div>
                      <div className="delete-myservice common-edi-del">
                        <DeleteService serviceId={ele.id} />
                      </div>
                    </div>
                  </Access>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
      <Pagination
        recordsPerPage={postsPerPage}
        totalPosts={allServices.length}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}