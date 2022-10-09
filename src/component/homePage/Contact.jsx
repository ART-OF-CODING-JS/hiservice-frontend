import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_i3vdjet", "template_dba6xsh", form.current, "4IRJ7S-Zy5peQfPMN").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  };
  return (
    <>
      <section className="page-section" id="contact">
        <div className="container">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <form ref={form} onSubmit={sendEmail} novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="name"
                        placeholder="Your Full Name"
                        required
                        type="text"
                        data-validation-required-message="Please enter your name."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <br />
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                        data-validation-required-message="Please enter a message."
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button className="btn btn-primary btn-xl text-uppercase" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
