import { useSelector,useDispatch } from "react-redux";
import AddService from "../Add service/AddServices";
import Reports from "../../Reports/sendReports/Reports";
import { Link } from "react-router-dom";
import "./SearchService.css";
import Search from "../../searchBar/Search";
import cookie from "react-cookies";
import { addToFavorite } from "../../../store/favorite";
import { Spinner } from "react-bootstrap";
export default function SearchByCity(props) {
  const {searchedServices ,isLoading} = useSelector((state) => state.servicesSlice);
  const dispatch = useDispatch()
  function handleClick(id){
    const sendData = {
    addToFavorite:true,
    comments:"",
    rate:5,
    userID:cookie.load("userID"),
    serviceID:id
    }
    dispatch(addToFavorite(sendData))
    
  }
 
  console.log(searchedServices,"this we I will render the searched service");
  return (
 <>
    <Search/>
      <AddService />
      <section className="service-container container-com">
        {searchedServices.map((ele) => (
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
                  <button className="add-fav btn-card" onClick={()=> handleClick(ele.id)}>
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