import { useSelector, useDispatch } from "react-redux";
import AddService from "../Add service/AddServices";
import Reports from "../../Reports/sendReports/Reports";
import { Link } from "react-router-dom";
import cookie from "react-cookies";
import "./SearchService.css";
import Search from "../../searchBar/Search";
import { addToFavorite } from "../../../store/favorite";
import { Spinner } from "react-bootstrap";

export default function LastNewService(props) {
  const { newServices, isLoading } = useSelector((state) => state.servicesSlice);
  const dispatch = useDispatch();

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
      <Search />
      <AddService />
      <section className="service-container container-com">
        {newServices.map((ele) => (
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
                <div className="">
                  <button className="add-fav btn-card" onClick={() => handleClick(ele.id)}>
                    Add to Favorite <i className="fa-regular fa-heart"></i>
                  </button>
                  <Reports id={ele.id} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
