import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { UpdateRejectReport } from "../../../../store/reports";

export default function RejectReport({id}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
  const handleConfirm = ()=>{
 dispatch(UpdateRejectReport(id))
  }
    return(
        <>
        <button className="button-container-red" onClick={handleShow}>
       Reject Report
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Reject Report</Modal.Title>
        </Modal.Header>
        <Modal.Body className="c">
          <p> Are you sure want <strong>Reject</strong> Report?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="py-3" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="add-btn" variant="primary" onClick={()=>{handleConfirm();handleClose()}}>
            Yes I'm Sure
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}