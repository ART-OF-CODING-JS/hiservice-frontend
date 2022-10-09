import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { UpdateConfirmReport } from "../../../../store/reports";

export default function ConfirmReport({ id }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handleConfirm = () => {
    dispatch(UpdateConfirmReport(id));
  };
  return (
    <>
      <button className="btn btn-outline-success" onClick={handleShow}>
        Confirm Report
      </button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Report</Modal.Title>
        </Modal.Header>
        <Modal.Body className="c">
          <p>
            Are you sure want <strong>Confirm</strong> Report?
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
              handleConfirm();
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
