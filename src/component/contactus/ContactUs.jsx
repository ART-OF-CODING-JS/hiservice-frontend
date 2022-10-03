import React from "react";
import "./contact.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../store/contact";

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
    <section className="page-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form
              id="contactForm"
              name="sentMessage"
              noValidate="novalidate"
              onSubmit={sendMessage}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Your Name *"
                      ref={nameRef}
                      required
                      data-validation-required-message="Please enter your name."
                    />
                    <p className="help-block text-danger"></p>
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Your Email *"
                      ref={emailRef}
                      required
                      data-validation-required-message="Please enter your email address."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Your Message *"
                      ref={msgRef}
                      required
                      data-validation-required-message="Please enter a message."
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button
                    id="sendMessageButton"
                    className="btn btn-primary btn-xl text-uppercase"
                    type="submit"
                    value="Send Message"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
