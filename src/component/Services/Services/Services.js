import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./Services.css";
import { getAllServices } from "../../../store/services";
import AddService from "../Add service/AddServices";
import Reports from "../../Reports/sendReports/Reports";
import Pagination from "../../pagenation/Pagination"
export default function Services(props) {
  const { allServices } = useSelector((state) => state.servicesSlice);
  // const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [search,setSearch]= useState('')
 
  // function handleSubmit(e){
  //   e.preventDefault();
  //   console.log(search);
  //   dispatch(searchService({title:search}))
  //   setSearch('')
  // }
  useEffect(() => {

    dispatch(getAllServices());
    // dispatch(searchService());
  }, [dispatch]);
  console.log(allServices);
  // console.log(searchedServices,"this we I will render the searched service");
  
  ///////////pagination/////
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setPerPage] = useState(4);

  const indexOfLastRecord = currentPage * postsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - postsPerPage;
  const currentRecords = allServices.slice(indexOfFirstRecord, indexOfLastRecord);

//////////////
  return (
    <>
     
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
      <Pagination 
      recordsPerPage={postsPerPage}
      totalPosts={allServices.length}
      setCurrentPage={setCurrentPage}
      />
    </>
  );
}
