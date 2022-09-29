import React,{ useEffect} from 'react' 
import { useSelector,useDispatch } from "react-redux";
import {getAllFav} from '../../store/favorite'
import "./Favorite.css";
import FavoriteList from './FavoriteList';
// import Search from "../../searchBar/Search";
export default function Favorite (props) {
  
  const {fav } = useSelector((state) => state.favSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFav());
  }, [dispatch]);
  
  console.log(fav ,"this wewhat in fave table");
  return (
    <>
      
        { fav.map((ele) => (

    <div key={ele.id}> <FavoriteList favId={ele.id} serviceId={ele.serviceID}/>
    </div>
        ))}
    </>
  );
}