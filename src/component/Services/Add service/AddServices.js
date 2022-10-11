import "./AddServices.css";

import React, { useState, useRef, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import cookie from "react-cookies";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { addService } from "../../../store/services";
import axios from "axios";

export default function AddService({ postData }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [file, setFile] = useState("");
  const [myImage, setMyImage] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const titleRef = useRef(null);
  const phoneRef = useRef(null);
  // const imageRef = useRef(null);
  const discRef = useRef(null);

  const departmentRef = useRef(null);
  const cityRef = useRef(null);

  const handleSubmit = () => {
    const sendData = {
      title: titleRef.current.value,
      department: departmentRef.current.value,
      description: discRef.current.value,
      city: cityRef.current.value,
      phoneNumber: phoneRef.current.value,
      image: !myImage
        ? "https://cdn.pixabay.com/photo/2015/11/03/08/56/service-1019822_960_720.jpg"
        : myImage,
      userID: cookie.load("userID"),
    };

    dispatch(addService(sendData));
  };
  useEffect(() => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "kpc5yviv");
      axios
        .post("https://api.cloudinary.com/v1_1/dminynjzy/image/upload", formData)
        .then((response) => {
          setMyImage(response.data.secure_url);
        });
      setFile("");
      setMyImage("");
    }
  }, [file]);
  // function handleImage() {

  // }

  return (
    <>
      <Button variant="primary" size="lg" onClick={handleShow} className="ms-4 mt-3 add-btn">
        Add Service
      </Button>

      <Modal show={show} onHide={handleClose} className="add-service-pop-form">
        <form
          action=""
          onSubmit={() => {
            handleSubmit();
            handleClose();
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
                  maxLength={25}
                  ref={titleRef}
                  required
                />
              </div>

              <div className="inputfield">
                <label>department</label>
                <div className="custom_select">
                  <select defaultValue={"Electrical"} ref={departmentRef}>
                    <option value="Electrical">Electrical</option>
                    <option value="repairing">repairing</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Maid Service">Maid Service</option>
                    <option value="Painting">Painting</option>
                    <option value="Moving">Moving</option>
                    <option value="Teaching">Teaching</option>
                    <option value="ًWelding">Welding</option>
                    <option value="ًCarpentry and Furniture">Carpentry and Furniture</option>
                    <option value="ًHealth care">Health care</option>
                    <option value="ًOthers">Others</option>
                  </select>
                </div>
              </div>

              <div className="inputfield">
                <label>city</label>
                <div className="custom_select">
                  <select defaultValue={"Amman"} ref={cityRef}>
                    <option value="Amman">Amman</option>
                    <option value="Jarash">Jarash</option>
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
                  type="number"
                  className="input"
                  placeholder="07"
                  min={10}
                  ref={phoneRef}
                  required
                />
              </div>

              <div className="inputfield">
                <label> Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    setFile(event.target.files[0]);
                  }}
                />
                {/* <button type="" onClick={handleImage}>
                  Upload
                </button> */}
              </div>

              <div className="inputfield">
                <label>Disruption</label>
                <textarea
                  className="textarea"
                  placeholder="Disruption"
                  maxLength={150}
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
