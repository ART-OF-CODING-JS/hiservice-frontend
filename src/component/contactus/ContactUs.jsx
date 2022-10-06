import React from "react";
import "./contact.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../store/contact";
import img from'./contact.png'
const Contact = () => {
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const msgRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();
    const sendData = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      description: msgRef.current.value,
    };
    dispatch(addContact(sendData));
    nameRef.current.value = null;
    emailRef.current.value = null;
    msgRef.current.value = null;
  };
 
  return (
    <>
    <div className="image-all-section">
        <img alt="h" src={img} />
        <p>Contact Us </p>
      </div>
    <section id="contact-">
	<div class="sectionheader">	<h1>CONTACT</h1></div>
	<article>
	<p>Call Us, Write Us, Or Knock On Our Door
We Would Be Happy To Meet You And Make Your Life Easier.<br/>
It usually takes us up to 48 hours to get back to you. </p>
		
			<label for="checkcontact" class="contactbutton"><div class="mail"></div></label>
      <input id="checkcontact" type="checkbox"/>
	
			<form action="" method="post" class="contactform"  onSubmit={sendMessage}>
				<p class="input_wrapper"><input type="text" name="contact_nom"   placeholder="Your Name *" id ="contact_nom"  ref={nameRef} required
                      data-validation-required-message="Please enter your name."/>
        <label for="contact_nom">NAME</label></p>
				<p class="input_wrapper"><input type="text" name="contact_email"   placeholder="Your Email *" id ="contact_email"  ref={emailRef}  required
                      data-validation-required-message="Please enter your email address."/>
          <label for="contact_email">EMAIL</label></p>
				
				<p class="textarea_wrapper">
          <textarea name="contact_message" id="contact_message"  ref={msgRef}></textarea></p>
				<p class="submit_wrapper"> <input type="submit" value="Send Message"/></p>			
			</form>
	</article>
</section>
</>
  );
 
};

export default Contact;




