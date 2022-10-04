import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import AddService from "../Add service/AddServices";
import Reports from "../../Reports/sendReports/Reports";
import { Link } from "react-router-dom";
// import "./SearchService.css";
import "../Services/Services.scss"
import Access from "../../Access/Access";
import DeleteService from "../../My Services/DeleteMyService/DeleteMyService";
import EditServices from "../../My Services/edit-my-services/edit-my-services.component";
import Search from "../../searchBar/Search";
import cookie from "react-cookies";
import Pagination from "../../pagenation/Pagination";
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
   ///////////pagination/////
  const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage,setPerPage] = useState(6);

   const indexOfLastRecord = currentPage * postsPerPage;
   const indexOfFirstRecord = indexOfLastRecord - postsPerPage;
   const currentRecords = searchedServices.slice(indexOfFirstRecord, indexOfLastRecord);
  return (
 <>
    <Search/>
      <AddService />
      <section className="service-container container-com">
        {currentRecords.map((ele) => (
           <>
           <figure className="image-block">
             <Link to={`/Services/${ele.id}`}>
               <img className="img" alt="service" src={ele.image} />
             </Link>
             <figcaption>
               <h3>{ele.title}</h3>
               <p>In {ele.city}</p>
               <h4>{ele.department}</h4>
               <Access role={"user"}>
                 <div className="edit-delete-auth-button">
                   <div className="edit">
                     <button
                       type="button"
                       className="btn btn-outline-secondary btn-lg btn_services_"
                       onClick={() => handleClick(ele.id)}
                      
                     >
                       Add to Favorite <i className="fa-regular fa-heart"></i>
                     </button>
                   </div>
                   <div className="delete">
                   <Link className="Link btn btn-outline-secondary btn-lg" to={`/Services/${ele.id}`}> More Details</Link>
                   </div>
                 </div>
               </Access>
               <Access role={"admin"}>
                 <div className="edit-delete-auth-button">
                   <div className="edit">
                     <EditServices id={ele.id} />
                   </div>
                   <div className="delete">
                     <DeleteService serviceId={ele.id} />
                   </div>
                 </div>
               </Access>
             </figcaption>
           </figure>
         </>
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