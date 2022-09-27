import React from "react";
import "./contact.css";
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import{addContact} from '../../store/contact';

const Contact = () => {
  const dispatch=useDispatch();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const msgRef = useRef(null);

  const sendMessage=(e)=>{
    e.preventDefault();
    const sendData ={
      username: nameRef.current.value,
      email: emailRef.current.value,
      description: msgRef.current.value,
          }
          console.log("dddddddddddd",sendData);
        dispatch(addContact(sendData))
        nameRef.current.value=null;
        emailRef.current.value=null;
        msgRef.current.value=null;
  }
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        </div>
        <form onSubmit={sendMessage} className="form">
          <input ref={nameRef} type='text' name='name' placeholder="Your Full Name" required/>
          <input ref={emailRef} type='email' name='email' placeholder="Your Email" required/>
          <textarea ref={msgRef} name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary" >Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;