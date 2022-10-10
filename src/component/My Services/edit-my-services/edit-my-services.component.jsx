import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { updateService } from "../../../store/services";

const EditServices = ({ service }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const titleRef = useRef(null);
  const discRef = useRef(null);
  const phoneRef = useRef(null);
  const imageRef = useRef(null);
  const departmentRef = useRef(null);
  const cityRef = useRef(null);

  const handleSubmit = () => {
    const sendData = {
      id: service.id,
      title: titleRef.current.value,
      department: departmentRef.current.value,
      description: discRef.current.value,
      city: cityRef.current.value,
      phoneNumber: phoneRef.current.value,
      image: !imageRef.current.value
        ? "https://cdn.pixabay.com/photo/2015/11/03/08/56/service-1019822_960_720.jpg"
        : imageRef.current.value,
      userID: service.userID,
    };
    dispatch(updateService(sendData));
  };

  return (
    <>
      <button
        variant="primary"
        size="lg"
        onClick={handleShow}
        className="btn btn-outline-warning btn-lg btn_services_"
      >
        Edit <i className="fa-regular fa-pen-to-square" />
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
            <div className="title">Edit Service</div>
            <div className="form">
              <div className="inputfield">
                <label>Title</label>
                <input
                  type="text"
                  className="input"
                  placeholder="title"
                  maxLength={25}
                  ref={titleRef}
                  defaultValue={service.title}
                  required
                />
              </div>

              <div className="inputfield">
                <label>department</label>
                <div className="custom_select">
                  <select ref={departmentRef} defaultValue={service.department}>
                    <option value="Electrical">Electrical</option>
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
                  <select ref={cityRef} defaultValue={service.city}>
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
                  max={15}
                  ref={phoneRef}
                  required
                  defaultValue={service.phoneNumber}
                />
              </div>

              <div className="inputfield">
                <label>Add Image</label>
                <input
                  type="text"
                  className="input"
                  placeholder="http//"
                  ref={imageRef}
                  defaultValue={service.image}
                />
              </div>

              <div className="inputfield">
                <label>Disruption</label>
                <textarea
                  className="textarea"
                  placeholder="Disruption"
                  maxLength={150}
                  ref={discRef}
                  required
                  defaultValue={service.description}
                />
              </div>
              <br />
              <div className="footer">
                <input type="button" value="Close" className="btn-submit" onClick={handleClose} />
                <input type="submit" value="Edit" className="btn-submit" />
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EditServices;
