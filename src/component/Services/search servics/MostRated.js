import { useSelector } from "react-redux";
import AddService from "../Add service/AddServices";
import Reports from "../../Reports/sendReports/Reports";
import { Link } from "react-router-dom";
import "./SearchService.css";
import Search from "../../searchBar/Search";
export default function MostRatedService(props) {
  const {mostRated } = useSelector((state) => state.servicesSlice);

 
  console.log(mostRated,"this we I will render the searched service");
  return (
    <>
    <Search/>
      <AddService />
      <section className="service-container container-com">
        {mostRated.map((ele) => (
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
                  <button className="add-fav btn-card">
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