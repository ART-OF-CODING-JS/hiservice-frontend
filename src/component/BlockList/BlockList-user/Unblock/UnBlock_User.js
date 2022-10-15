import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {  useDispatch } from "react-redux";
import { unBlockServiceProvider } from "../../../../store/block";
export default function UnBlockProvider({ providerID }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handleBlock = () => {
    dispatch(unBlockServiceProvider(providerID));
  };

  return (
    <>
      <button type="button" className="btn btn-outline-warning" onClick={handleShow}>
        Unblock
      </button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>UnBlock Service Provider</Modal.Title>
        </Modal.Header>
        <Modal.Body className="c">
          <p>
            {" "}
            Are you sure want to <strong>Unblock</strong> the service provider?
          </p>
          <strong>Note:</strong> If you <strong>Unblocked</strong> a service provider, you may able
          to see their services !
        </Modal.Body>
        <Modal.Footer>
          <Button className="py-3" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            className="add-btn"
            variant="primary"
            onClick={() => {
              handleBlock();
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
