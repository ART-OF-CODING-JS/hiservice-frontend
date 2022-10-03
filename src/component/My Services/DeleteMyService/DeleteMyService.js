import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteOneService } from "../../../store/services";

export default function DeleteService({ serviceId }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteOneService(serviceId));
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-outline-secondary btn-lg"
        onClick={handleShow}
        style={{ backgroundColor: "$color-2" }}
      >
        Delete <i className="fa-regular fa-trash-can icon-mysevice" style={{ fontSize: "20px" }} />
      </button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Service</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <p>
            Are you sure want to <strong>delete</strong> Your service?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="py-3" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            className="add-btn"
            variant="primary"
            onClick={() => {
              handleDelete();
              handleClose();
            }}
          >
            Yes I'm Sure
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
