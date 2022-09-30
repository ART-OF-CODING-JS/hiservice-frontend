import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import AddService from "../Add service/AddServices";
import Reports from "../../Reports/sendReports/Reports";
import { Link } from "react-router-dom";
import "./SearchService.css";
import cookie from "react-cookies";
import Pagination from "../../pagenation/Pagination"
import Search from "../../searchBar/Search";
import { addToFavorite } from "../../../store/favorite";
export default function SearchService(props) {
  const dispatch = useDispatch()
  const {searchedServices } = useSelector((state) => state.servicesSlice);
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
   ///////////pagination/////
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage,setPerPage] = useState(4);
 
   const indexOfLastRecord = currentPage * postsPerPage;
   const indexOfFirstRecord = indexOfLastRecord - postsPerPage;
   const currentRecords = searchedServices.slice(indexOfFirstRecord, indexOfLastRecord);
  return (
    <>
    <Search/>
      <AddService />
      <section className="service-container container-com">
        {currentRecords.map((ele) => (
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
      <Pagination 
      recordsPerPage={postsPerPage}
      totalPosts={searchedServices.length}
      setCurrentPage={setCurrentPage}
      />
    </>
  );
}