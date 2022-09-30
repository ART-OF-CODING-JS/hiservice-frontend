import Card from 'react-bootstrap/Card';
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllContact} from '../../../store/contact'
import "./contact.css";
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
    <section className="my-contact-container container-com">
    
      {currentRecords.map((ele ,idx) => (
            <>
        <Card className="cardClass" style={{width:"65%", height:"60%"}}>
        <Card.Body>
          <Card.Title>{ele.username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{ele.email}</Card.Subtitle>
          <Card.Text>{ele.description}</Card.Text>
        </Card.Body>
      </Card>
    <br/>
      </>
      ))}
    </section>
    <Pagination 
      recordsPerPage={postsPerPage}
      totalPosts={allContact.length}
      setCurrentPage={setCurrentPage}
      />
    </>
  );
}
