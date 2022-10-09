import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import cookie from "react-cookies";
import { sendReport } from "../../../store/reports";
export default function Reports(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const discRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const sendData = {
      description: discRef.current.value,
      serviceID: props.providerID,
      userID: cookie.load("userID"),
    };
    console.log(sendData);
    dispatch(sendReport(sendData));
  };

  return (
    <>
      <button type="button" className="btn btn-secondary" onClick={handleShow}>
        Reports <i className="fa-light fa-file-chart-column"></i>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"></Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Disruption issue</Form.Label>
              <Form.Control as="textarea" rows={3} ref={discRef} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-outline-warning" onClick={handleClose}>
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
