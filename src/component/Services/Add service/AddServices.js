import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
// import Access from '../Access/Access';
import cookie from "react-cookies";
// import jwt from 'jsonwebtoken';
import "./AddServices.css";
import { useDispatch } from "react-redux";
import { addService } from "../../../store/services";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

export default function AddService({ postData }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [city,setCity]=useState('city')
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const titleRef = useRef(null);
  // const cityRef = useRef(null);
  const phoneRef = useRef(null);
  const discRef = useRef(null);
  const departmentRef = useRef(null);
  const imageRef = useRef(null);

  const handleSubmit = () => {
    const sendData = {
      title: titleRef.current.value,
      department: departmentRef.current.value,
      description: discRef.current.value,
      city: city,
      phoneNumber: phoneRef.current.value,
      image: imageRef.current.value,
      userID: cookie.load("userID"),
    };
console.log(sendData,"add service updated datat")
    dispatch(addService(sendData));
  };
  let role = cookie.load("userAccess");
  //     let token = cookie.load('token')
  //     const userFromToken = jwt.decode(token);
  //  console.log(userFromToken)
  return (
    <>
      {/* <Access action="delete"> */}
      <Button variant="primary" size="lg" onClick={handleShow} className="ms-4 mt-3 add-btn">
        Add Service
      </Button>

      {/* <Button variant="primary" style={{padding:'1px'}}>
       
        </Button> */}
      {/* </Access> */}
      <p className="ms-4 access">{`${role} dashboard`}</p>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" autoFocus ref={titleRef} />
            </Form.Group>
            {/* *****************  */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>department</Form.Label>
              <Form.Control type="text" placeholder="home, ..." ref={departmentRef} />
            </Form.Group>
            {/* *****************  */}
           
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="amman" ref={cityRef} />
            </Form.Group> */}

<select   className="search-field1 ttt"  id='city' value={city} onChange={(e)=> setCity(e.target.value)}>
        
        <option value="Aamman">Amman</option>
        <option value="Jarash">Jerash</option>
        <option value="Irbid">Irbid</option>
        <option value="Zarqa">Zarqa</option>
        <option value="Aqaba">Aqaba</option>
        <option value="Madaba">Madaba</option>
      </select>
            {/* *****************  */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="07" ref={phoneRef} />
            </Form.Group>
            {/* *****************  */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Add Image</Form.Label>
              <Form.Control type="text" placeholder="http//" ref={imageRef} />
            </Form.Group>
            {/* *****************  */}

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Disruption</Form.Label>
              <Form.Control as="textarea" rows={3} ref={discRef} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="px-3 py-3" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              handleSubmit();
            }}
            className="add-btn"
          >
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>

      
    </>
  );
}
