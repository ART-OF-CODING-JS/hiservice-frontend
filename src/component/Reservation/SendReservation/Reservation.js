import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import cookie from "react-cookies";
import { sendReserve } from "../../../store/reservations";

export default function Reservation({ serviceId }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const discRef = useRef(null);
  const timeRef = useRef(null);
  const dateRef = useRef(null);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const sendData = {
      description: discRef.current.value,
      time: timeRef.current.value,
      date: dateRef.current.value,
      serviceID: serviceId,
      userID: cookie.load("userID"),
    };
    dispatch(sendReserve(sendData));
  };

  return (
    <>
      <button className="btn btn-warning del-reserve add-btn" onClick={handleShow}>
        Reserve Service
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" autoFocus ref={dateRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" ref={timeRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Add Notes</Form.Label>
              <Form.Control as="textarea" rows={3} ref={discRef} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary py-3" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary add-btn"
            onClick={() => {
              handleClose();
              handleSubmit();
            }}
          >
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
