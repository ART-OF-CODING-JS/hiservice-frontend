import React, { useRef, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import cookie from 'react-cookies';
import {sendReport} from '../../../store/reports'
export default function Reports(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const discRef = useRef(null)

 
  const dispatch = useDispatch()
  const {reportUser,isLoading,error} = useSelector(state=>state.reportsSlice)

  const handleSubmit = ()=>{
      const sendData ={
          description:discRef.current.value,
          serviceID:props.id,
          userID:cookie.load('userID')
              }
          dispatch(sendReport(sendData))
  }

  return (
  <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <button onClick={handleShow} className="report btn-card" >Reports</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              /> */}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Disruption issue</Form.Label>
              <Form.Control as="textarea" rows={3} ref={discRef}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();handleSubmit()}}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

