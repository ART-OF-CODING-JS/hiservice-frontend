import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { blockServiceProvider } from "../../../../store/block";
export default function BlockProvider({providerID}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
const handleBlock = ()=>{
  dispatch(blockServiceProvider(providerID))
}

  return (
    <>
      <button className="block" onClick={handleShow}>
        Block Service provider
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Block Service Provider</Modal.Title>
        </Modal.Header>
        <Modal.Body className="c">
          <p> Are you sure want to block the service provider?</p>
          <strong>Note:</strong> If you blocked a service provider, you may not
          be able to see their services !
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
