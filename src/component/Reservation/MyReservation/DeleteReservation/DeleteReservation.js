import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { deleteReservation } from "../../../../store/reservations";
import './DeleteReservation.css'
export default function DeleteReservation({reserveId}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
const handleDelete = ()=>{
  dispatch(deleteReservation(reserveId))
}

  return (
    <>
      <button className="del-reserve add-btn" onClick={handleShow}>
       Delete Reservation
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="c">
          <p> Are you sure want to delete Your service?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="py-3" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="add-btn" variant="primary" onClick={()=>{handleDelete();handleClose()}}>
            Yes I'm Sure
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
