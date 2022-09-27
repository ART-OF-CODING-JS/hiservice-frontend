import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {useDispatch } from "react-redux";
import { updateReject } from "../../../../store/reservations";

export default function RejectReserve({id}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
const handleBlock = ()=>{
  dispatch(updateReject(id))
}

  return (
    <>
      <button className="del-reserve add-btn" onClick={handleShow}>
      Reject
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="c">
          <p> Are you sure about Reject reservation ?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="py-3" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="add-btn" variant="primary" onClick={()=>{handleBlock();handleClose()}}>
            Yes I'm Sure
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
