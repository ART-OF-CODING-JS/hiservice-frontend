import "./edit-my-services.style.css";

import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import cookie from "react-cookies";

import { useDispatch } from "react-redux";
import { updateService } from "../../../store/services";

const EditServices = (props) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const titleRef = useRef(null);
  const cityRef = useRef(null);
  const phoneRef = useRef(null);
  const discRef = useRef(null);
  const departmentRef = useRef(null);
  const imageRef = useRef(null);

  const handleSubmit = () => {
    const sendData = {
      id: props.id,
      title: titleRef.current.value,
      department: departmentRef.current.value,
      description: discRef.current.value,
      city: cityRef.current.value,
      phoneNumber: phoneRef.current.value,
      image: imageRef.current.value,
      userID: cookie.load("userID"),
    };

    dispatch(updateService(sendData));
  };

  return (
    <>
      <button type="button" class="btn btn-outline-secondary btn-lg" onClick={handleShow}>
        Edit <i className="fa-regular fa-pen-to-square" />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" autoFocus ref={titleRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>department</Form.Label>
              <Form.Control type="text" placeholder="home, ..." ref={departmentRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="amman" ref={cityRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="07" ref={phoneRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Add Image</Form.Label>
              <Form.Control type="text" placeholder="http//" ref={imageRef} />
            </Form.Group>

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
            Save Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditServices;
