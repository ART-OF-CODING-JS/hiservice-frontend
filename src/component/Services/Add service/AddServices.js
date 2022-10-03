import "./AddServices.css";

import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import cookie from "react-cookies";
import { useDispatch } from "react-redux";

import { addService } from "../../../store/services";

export default function AddService({ postData }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [city, setCity] = useState("city");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const titleRef = useRef(null);
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

    dispatch(addService(sendData));
  };

  return (
    <>
      <button variant="primary" size="lg" onClick={handleShow} className="ms-4 mt-3 add-btn">
        Add Service
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
            <div className="title">Add New Service</div>
            <div className="form">
              <div className="inputfield">
                <label>Title</label>
                <input
                  type="text"
                  className="input"
                  placeholder="title"
                  maxLength={30}
                  ref={titleRef}
                  required
                />
              </div>

              <div className="inputfield">
                <label>department</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Mech"
                  maxLength={30}
                  ref={departmentRef}
                  required
                />
              </div>

              <div className="inputfield">
                <label>city</label>
                <div className="custom_select">
                  <select value={city} onChange={(e) => setCity(e.target.value)}>
                    <option value="Aamman">Amman</option>
                    <option value="Jarash">Jerash</option>
                    <option value="Irbid">Irbid</option>
                    <option value="Zarqa">Zarqa</option>
                    <option value="Aqaba">Aqaba</option>
                    <option value="Madaba">Madaba</option>
                  </select>
                </div>
              </div>

              <div className="inputfield">
                <label>Phone Number</label>
                <input
                  type="tel"
                  className="input"
                  placeholder="07"
                  maxLength={200}
                  ref={phoneRef}
                  required
                />
              </div>

              <div className="inputfield">
                <label>Add Image</label>
                <input type="text" className="input" placeholder="http//" ref={imageRef} required />
              </div>

              <div className="inputfield">
                <label>Disruption</label>
                <textarea
                  className="textarea"
                  placeholder="Disruption"
                  maxLength={200}
                  ref={discRef}
                  required
                />
              </div>

              <br />

              <div className="footer">
                <button type="" value="Close" className="btn-submit" onClick={handleClose}>
                  Close
                </button>
                <input type="submit" value="Add Service" className="btn-submit" />
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
