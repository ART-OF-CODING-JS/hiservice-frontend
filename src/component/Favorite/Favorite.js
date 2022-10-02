import React,{ useEffect} from 'react' 
import { Spinner } from 'react-bootstrap';
import { useSelector,useDispatch } from "react-redux";
import {getAllFav} from '../../store/favorite'
import "./Favorite.css";
import FavoriteList from './FavoriteList';
// import Search from "../../searchBar/Search";
export default function Favorite (props) {
  
  const {fav ,isLoading} = useSelector((state) => state.favSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFav());
  }, [dispatch]);
  
  return (
    isLoading?<div className="spinner-service">
    <Spinner animation="border" variant="dark" />
  </div>: <>
      <div className="image-all-section"><img alt="h" src="https://i.postimg.cc/B6459fVF/pexels-ann-h-1989821.jpg"/>
      <p>Favorite List </p></div>
        { fav.map((ele) => (

    <div key={ele.id}> <FavoriteList favId={ele.id} serviceId={ele.serviceID}/>
    </div>
        ))}
    </>
  );
}