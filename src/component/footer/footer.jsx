import React from "react";
import Logo from "../../assets/logo.png";

import { Link } from "react-router-dom";
import "./footer.css";
export default function Footer() {
  return (
    <div className="container-fluid bg-dark mt-5 pt-5 wow fadeIn main-footer" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h1 className="text-white mb-4 text-primary me-3">
              <Link className="Link" to={"/"}>
                <img src={Logo} width="175px" />
              </Link>
            </h1>
            <p>We provide different type of services that will make your life easy</p>

            <div className="d-flex pt-2 social">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">About Us</h4>
            <p>
              <a href="#!" className="text-reset">
                About HiService
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Service status
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Door To Door Service
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Book A Service
              </a>
            </p>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">POPULAR SERVICES</h4>
            <p>
              <a href="#!" className="text-reset">
                Cleaning
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Plumbing
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Electrical
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Painting
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                See all services
              </a>
            </p>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Address</h4>
            <p>
              <i className="fa fa-map-marker-alt me-3"></i>
              Amman, Jordan
            </p>
            <p>
              <i className="fa fa-envelope me-3"></i>
              hiservice90@gmail.com
            </p>
            <p>
              <i className="fa fa-phone-alt me-3"></i> + 01 234 567 88
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-md-start mb-3 mb-md-0">Copyright © 2022 HiService</div>
          </div>
        </div>
      </div>
    </div>
  );
}
