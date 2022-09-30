import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchByCity,searchService,lastNewService,mostRatedService } from "../../store/services";
import './search.css'

export default function Search(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search,setSearch]= useState('')
    const [searchCity,setSearchCity]= useState('amman')
    function handleSubmit(e){
        e.preventDefault();
        console.log(search);
        dispatch(searchService({title:search}))
        setSearch('')
        navigate('/search')
      }
      function handleSubmit1(e){
        e.preventDefault();
        console.log(searchCity);
        dispatch(searchByCity({city:searchCity}))
        setSearchCity('amman')
        navigate('/searchCity')
      }
      function handleNew(e){
      e.preventDefault();
      dispatch(lastNewService())
      navigate('/lastNew')

      }
      function handleMostRated(e){
      e.preventDefault();
      dispatch(mostRatedService())
      navigate('/mostRated')

      }
    
return (

<div className="container-search">
{/* <div className="search">
      <form className="form1" onSubmit={handleSubmit}>
        <input type="text" className="search-field1" 
        placeholder="Search ByName  ....." 
         onChange={(e)=> setSearch(e.target.value)} />
        <button type="submit" className="btn1">
          
          🔍search</button>
        </form>
        </div> */}
        
{/* <div className="search-city">
      <form className="form2" onSubmit={handleSubmit1} >
      
      <select type="submit" value={searchCity}  className="search-field1" onChange={(e)=>setSearchCity(e.target.value)}>
        <option value="amman">Amman</option>
        <option value="jarash">Jerash</option>
        <option value="Irbid">Irbid</option>
        <option value="zarqa">Zarqa</option>
        <option value="Aqaba">Aqaba</option>
        <option value="Madaba">Madaba</option>
      </select>
        <button type="submit" >🔍search</button>
        </form>
        </div> */}
        
        {/* <div className="new">
          <button onClick={handleNew} > ✨Last New services </button> 
        </div>
        <div className="most">
          <button onClick={handleMostRated} > ✨Most rated services </button> 
        </div> */}
        
        </div>
        
)


}