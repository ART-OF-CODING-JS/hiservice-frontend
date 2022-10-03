import Card from 'react-bootstrap/Card';
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllContact} from '../../../store/contact'
// import "./contact.css";
import './con.css'
import Pagination from '../../pagenation/Pagination';

export default function ContactUs(props) {
  const dispatch = useDispatch();

  const { allContact } = useSelector((state) => state.contactSlice);

  useEffect(() => {
    dispatch(getAllContact());
  }, [dispatch]);
  
     ///////////pagination/////
     const [currentPage, setCurrentPage] = useState(1);
     const [postsPerPage,setPerPage] = useState(4);
     const indexOfLastRecord = currentPage * postsPerPage;
     const indexOfFirstRecord = indexOfLastRecord - postsPerPage;
     const currentRecords = allContact.slice(indexOfFirstRecord, indexOfLastRecord);
  return (
    <>
   
    {currentRecords.map((ele ,idx) => (

      <div class="main-container">
  
  <div class="cards">
    <div class="card card-1">
      <div class="card__icon"><i class="fas fa-bolt"></i></div>
      <div class="heading">
    <h1 class="heading__title">{ele.username}</h1>
    
    <p class="heading__credits">{ele.email}</p>
  </div>
      <h2 class="card__title">{ele.description}</h2>
    
    </div>
   
  </div>
</div>  

 ))}

    <Pagination 
      recordsPerPage={postsPerPage}
      totalPosts={allContact.length}
      setCurrentPage={setCurrentPage}
      />
    </>
  );
}

 