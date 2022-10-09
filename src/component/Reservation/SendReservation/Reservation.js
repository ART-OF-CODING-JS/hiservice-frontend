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
      <button
        variant="primary"
        size="lg"
        onClick={handleShow}
        className="btn btn-warning add-btn"
        style={{ fontSize: "15px" }}
      >
        Reserve Service <i className="fa-regular fa-pen-to-square" />
      </button>

      <Modal show={show} onHide={handleClose} className="add-service-pop-form">
        <form
          action=""
          onSubmit={() => {
            handleClose();
            handleSubmit();
          }}
        >
          <div className="wrapper">
            <div className="title">Send Reservation</div>
            <div className="form">
              <div className="inputfield">
                <label>Date</label>
                <input type="date" className="input" autoFocus ref={dateRef} required />
              </div>

              <div className="inputfield">
                <label>Time</label>
                <input type="time" className="input" ref={timeRef} required />
              </div>

              <div className="inputfield">
                <label>Add Notes</label>
                <textarea
                  type="textarea"
                  className="input"
                  maxLength={150}
                  placeholder="note"
                  ref={discRef}
                  required
                />
              </div>

              <div className="footer">
                <input type="button" value="Close" className="btn-submit" onClick={handleClose} />
                <input type="submit" value="Send" className="btn-submit" />
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
