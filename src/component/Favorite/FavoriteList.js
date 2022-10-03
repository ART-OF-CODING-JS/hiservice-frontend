import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import "./Favorite.css";
import { getAllServices } from "../../../src/store/services";
import { Link } from "react-router-dom";
import { removeService } from "../../store/favorite";
import MyServices from "../My Services/MyServices";
export default function FavoriteList({ favId, serviceId, userID }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const { allServices } = useSelector((state) => state.servicesSlice);
  const { fav, isLoading } = useSelector((state) => state.favSlice);

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);
  function handleRemove(id) {
    dispatch(removeService(id));
  }
  return (
    <>
      <section className="myservice-container container-com">
        {allServices
          .filter((ele) => ele.id === serviceId)
          .map((ele) => (
            <div className="my_services_body">
              <div className="container-my-services">
                <div className="card_img">
                  <img src={ele.image} alt="Pancake" />
                </div>

                <div className="container__text">
                  <h1>{ele.title}</h1>
                  <div className="container__text__star">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                  </div>
                  <p>{ele.description}</p>
                  <div className="container__text__timing">
                    <div className="container__text__timing_time">
                      <h2>City</h2>
                      <p>{ele.city}</p>
                    </div>
                    <div className="container__text__timing_time">
                      <h2>Phone Number</h2>
                      <p>{ele.phoneNumber}</p>
                    </div>
                    <div className="container__text__timing_time">
                      <h2>department</h2>
                      <p>{ele.department}</p>
                    </div>
                  </div>
                  <button onClick={handleShow} className={"btn_my_services ra fiv-list"}>
                    Remove
                  </button>
                  <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Remove from favorite</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="c">
                      <p> Are you sure want to remove this service?</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button className="py-3" variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        className="add-btn"
                        variant="primary"
                        onClick={() => {
                          handleRemove(favId);
                          handleClose();
                        }}
                      >
                        Yes I'm Sure
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          ))}
      </section>
    </>
  );
}
