import { useSelector } from "react-redux";
import AddService from "../Add service/AddServices";
import "./SearchService.css";
import Search from "../../searchBar/Search";
import MostRatedList from './MostRatedList'
import { Spinner } from "react-bootstrap";
export default function MostRatedService(props) {
  const {mostRated,isLoading } = useSelector((state) => state.servicesSlice);

 
  console.log(mostRated,"this we I will the most rated");
  return (
    isLoading?<div className="spinner-service" ><Spinner animation="border" variant="dark" /></div>: <>
    <Search/>
      <AddService />
      
        {mostRated.map((ele) => (

<div key={ele.id}> <MostRatedList  serviceId={ele.serviceID}/>
</div>
    ))}
  
    </>
  );
}