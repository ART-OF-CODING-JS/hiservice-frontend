import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { blockUser, unBlockUser } from "../../../../../store/users";

export default function BlockUser({ isBlocked, id }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handleBlockUser = () => {
    dispatch(blockUser(id));
    handleClose();
  };
  const handleUnBlockUser = () => {
    dispatch(unBlockUser(id));
    handleClose();
  };
  return (
    <>
      <button className="btn btn-outline-warning" onClick={handleShow}>
        {isBlocked ? "UnBlock User" : "Block User"}
      </button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Block User</Modal.Title>
        </Modal.Header>
        <Modal.Body className="c">
          {isBlocked ? (
            <p> Are you sure want to Unblock User?</p>
          ) : (
            <p> Are you sure want to Block User?</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="py-3" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            className="add-btn"
            variant="primary"
            onClick={() => {
              isBlocked ? handleUnBlockUser() : handleBlockUser();
            }}
          >
            Yes I'm Sure
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
