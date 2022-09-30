import { useSelector } from "react-redux";
import AddService from "../Add service/AddServices";
import "./SearchService.css";
import Search from "../../searchBar/Search";
import MostRatedList from './MostRatedList'
export default function MostRatedService(props) {
  const {mostRated } = useSelector((state) => state.servicesSlice);

 
  console.log(mostRated,"this we I will the most rated");
  return (
    <>
    <Search/>
      <AddService />
      
        {mostRated.map((ele) => (

<div key={ele.id}> <MostRatedList  serviceId={ele.serviceID}/>
</div>
    ))}
  
    </>
  );
}