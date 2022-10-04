import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import cookie from "react-cookies";
import { useDispatch } from "react-redux";
import { updateReservation } from "../../../store/reservations";

const EditReservation = (props) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const discRef = useRef(null);

  const handleSubmit = () => {
    const sendData = {
      id: props.id,
      date: dateRef.current.value,
      time: timeRef.current.value,
      description: discRef.current.value,
      userID: cookie.load("userID"),
    };

    dispatch(updateReservation(sendData));
  };

  return (
    <>
      <button className="button-container-yellow" onClick={handleShow}>
        Edit <i className="fa-regular fa-pen-to-square"></i>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date</Form.Label>
              <Form.Control type="text" placeholder="Date" autoFocus ref={dateRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Time</Form.Label>
              <Form.Control type="text" placeholder="Time" ref={timeRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" ref={discRef} />
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

export default EditReservation;
