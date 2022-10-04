import React from "react";
import Portfolio from "./Protfolio";
import Logo from "../../assets/logo.png";
import { Button } from "react-bootstrap";
import "./work.scss";
import Footer from "../footer/footer";
const HomePage = () => {
  const portfolioLinks = [
    {
      title: "Electrical services",
      caption: "We provide a lot of different type of electrical services ",
      image: "./image/electr.jpg",
    },
    {
      title: "Plumbing Services",
      caption: "All your house water and sewage connection will be secure",
      image: "./image/plumber.jpg",
    },
    {
      title: "Waste management",
      caption: "You can find different helpful team for clean any type of waste ",
      image: "./image/waste.jpg",
    },
    {
      title: "Pest Control",
      caption: "if you have bugs , or mosquitoes you can book from our web site ",
      image: "./image/pest.jpg",
    },
    {
      title: "Cleaning and maid services",
      caption: "We provide all type of cleaning services and we have another services ",
      image: "./image/clean.jpg",
    },
    {
      title: "Moving",
      caption: "Moving furniture and house stuff and many of things",
      image: "./image/move.jpg",
    },
    {
      title: "Painting & Staining",
      caption: "We can provide you with a variety of professional painter",
      image: "./image/paint.jpg",
    },
    {
      title: "barber",
      caption: "You can call a barber to give you a hair cut in your house",
      image: "./image/barber.jpg",
    },
    {
      title: "Engineer",
      caption: "You can find professional person to help you to design your life",
      image: "./image/eng.jpg",
    },
  ];
  return (
    <>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <img src={Logo} className="navbar-brand js-scroll-trigger" alt="" width="150px" />
          </a>

          <Button 
            className="navbar-toggler navbar-toggler-right btn btn-warning"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars"></i>
          </Button >
        
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/signin">
                  login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">
              You can Find All helpful services , also you can be part of us
            </div>
            {/* <div className="intro-lead-in">Welcome To Our Website!</div> */}
            <p className="intro-heading">YOUR WAY TO GET MORE MONEY!</p>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="/signin">
              Join us
            </a>
          </div>
        </div>
      </header>

      <div id="services" className="container-how container">
        <div className="col-lg-12 text-center">
          <h2 className="title_section">How We Work</h2>
          <h3 className="sub-title">We worked hard to deliver this passion</h3>
        </div>

        {/* <div className="section-how"> */}
        <div className="work">
          <div className="scene">
            <div className="card">
              <div className="card__face card__face--front">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              </div>
              <div className="card__face card__face--back">
                <p className="h1-how">Tell us about your project?</p>
                <p className="p-how">
                  Get started by submitting a request for the type of project you need help with,
                  plus a few more details about your needs.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card__face card__face--front">
                <img src="https://img.freepik.com/free-photo/household-repair-middle-aged-man-inspecting-pipe-touching-hand-sink-stylish-modern-kitchen_259150-58265.jpg?w=1800&t=st=1664874343~exp=1664874943~hmac=763ad50ee71052aef6dd7128e8494b5be341a04ec83d0e04489d0ee0469376fa" />
              </div>
              <div className="card__face card__face--back">
                <p className="h1-how"> We'll match you with local service provider</p>
                <p className="p-how">
                  We'll match you with a few local pros ready for the job. Read reviews, ask
                  questions, discuss availability.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card__face card__face--front">
                <img src="https://img.freepik.com/free-photo/housewife-woking-home-lady-blue-shirt-woman-clean-mirror_1157-45532.jpg?w=1800&t=st=1664873902~exp=1664874502~hmac=8a4a6f181da07251c53646262960c510274fe3746ac19aaf2f3ee203c0183052" />
              </div>
              <div className="card__face card__face--back">
                <p className="h1-how">Hire a local pro & finish the job?</p>
                <p className="p-how">
                  You hire the local pro that's right for you and your project's scope. You'll work
                  with your local pro to arrange schedules, payments, and all other details of the
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

      <div className="container-fluid bg-light overflow-hidden  px-lg-0">
        <div className="container feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 feature-text py-5 wow fadeIn"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <div className="p-lg-5 ps-lg-0">
                <div className="bg-primary mb-3" style={{ width: 60, height: 2 }} />
                <h1 className="display-5 mb-5">Why Choose Us</h1>
                <p className="mb-4 pb-2">
                  We are the only web site in Jordan that you can find all what you need to make
                  your life easy, only on click you can solve all your house issue . one more thing,
                  if you are professional you can join us
                </p>
                <div className="row g-4">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="btn-square bg-white rounded-circle"
                        style={{ width: 64, height: 64 }}
                      >
                        <img
                          className="img-fluid"
                          src="https://technext.github.io/securex/img/icon/icon-10.png"
                          alt="Icon"
                        />
                      </div>
                      <div className="ms-4">
                        <p className="text-primary mb-2">Trusted</p>
                        <h5 className="mb-0">Security</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="btn-square bg-white rounded-circle"
                        style={{ width: 64, height: 64 }}
                      >
                        <img
                          className="img-fluid"
                          src="https://technext.github.io/securex/img/icon/icon-7.png"
                          alt="Icon"
                        />
                      </div>
                      <div className="ms-4">
                        <p className="text-primary mb-2">Quality</p>
                        <h5 className="mb-0">Services</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="btn-square bg-white rounded-circle"
                        style={{ width: 64, height: 64 }}
                      >
                        <img
                          className="img-fluid"
                          src="https://technext.github.io/securex/img/icon/icon-3.png"
                          alt="Icon"
                        />
                      </div>
                      <div className="ms-4">
                        <p className="text-primary mb-2">Smart</p>
                        <h5 className="mb-0">Systems</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="btn-square bg-white rounded-circle"
                        style={{ width: 64, height: 64 }}
                      >
                        <img
                          className="img-fluid"
                          src="https://technext.github.io/securex/img/icon/icon-2.png"
                          alt="Icon"
                        />
                      </div>
                      <div className="ms-4">
                        <p className="text-primary mb-2">24/7 Hours</p>
                        <h5 className="mb-0">Support</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: 400 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="https://img.freepik.com/free-photo/business-people-modern-office_1262-1402.jpg?w=1800&t=st=1664874630~exp=1664875230~hmac=4db2d91b9606e5c2d990dbf99a1c9032a45d039f82d9dc37ddcac5045cd58a02"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="mobile-app">
        <div className="container">
          <div className="content row">
            <div className="col-md-6 col-sm-12">
              <img
                className="mobile-app__image img-responsive"
                alt=" mobile app"
                src="https://media.angi.com/s3fs-public/HP-Angi-App.png"
              />
            </div>
            <div className="mobile-app__information col-md-5 col-md-push-1 col-sm-12">
              <svg width="60" height="61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="AppBadge_svg__a" x="0" y="0" width="60" height="61"></mask>
                <g mask="url(#AppBadge_svg__a)">
                  <path d="M60 0H0v60h60V0z" fill="#D6FFEC"></path>
                </g>
              </svg>
              <h2>Hi Service best mobile app coming soon</h2>
              <p>
                Message and video chat with pros, securely pay for projects, and more — only in the
                Hi Service app.
              </p>
              <div className="mobile-app__badges">
                <a
                  id="mobile-app--app-store-badge"
                  href="https://xy59r.app.goo.gl/DXKa"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <img
                    src="https://media.angi.com/sites/all/themes/altheme/images/app-store-badge-60%402x.png"
                    alt="App Store"
                    className="mobile-app__button"
                  />
                </a>
                <a id="mobile-app--google-play-badge" href="#/" target="_blank">
                  <img
                    src="https://media.angi.com/sites/all/themes/altheme/images/google-play-badge-60@2x.png"
                    alt="Google Play"
                    className="mobile-app__button mobile-app__button--android"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="container-t testimonial-body">
      <div className="row">

<h2 className="h3">What Our Clients Say</h2>
    <div className="col-lg-4">
        <div className="card-t">
            <div className="face front-face">
                <img src="https://ca.slack-edge.com/TNGRRLUMA-UPRCC16QP-53e7e37645fd-512"
                    alt="" className="profile"/>
                <div className="pt-3 text-uppercase name">
                    Shihab Eshtaiwi
                </div>
                <div className="designation">Instructor</div>
            </div>
            <div className="face back-face">
                <span className="fas fa-quote-left"></span>
                <div className="testimonial">
                    I made bacck the purchase price in just 48 hours! Thank you for making it pain less,
                    pleasant.
                    The service was execellent. I will refer everyone I know.
                </div>
                <span className="fas fa-quote-right"></span>
            </div>
        </div>
      </div>
  <div className="col-lg-4">
    <div className="card-t">
      <div className="face front-face">
        <img
          src="https://ca.slack-edge.com/TNGRRLUMA-UTE75MPJ9-282b001b930f-512"
          alt=""
          className="profile"
        />
        <div className="pt-3 text-uppercase name">Obada Tumah</div>
        <div className="designation">Full Stack Developer</div>
      </div>
      <div className="face back-face">
        <span className="fas fa-quote-left"></span>
        <div className="testimonial">
          Really good, you have saved our business! I made bacck the purchase price in just
          48 hours! man, this thing is getting better and better as I learn more about it.
        </div>
        <span className="fas fa-quote-right"></span>
      </div>
    </div>
  </div>
  <div className="col-lg-4">
    <div className="card-t">
      <div className="face front-face">
        <img
          src="https://ca.slack-edge.com/TNGRRLUMA-U011NPNQ9FX-537d8bf49726-512"
          alt=""
          className="profile"
        />
        <div className="pt-3 text-uppercase name">Ahmad Swedani</div>
        <div className="designation">Software Developer</div>
      </div>
      <div className="face back-face">
        <span className="fas fa-quote-left"></span>
        <div className="testimonial">
          Account keeper is the most valuable business research we have EVER purchased.
          Without electrician, we would ahave gone bankrupt by now.
        </div>
        <span className="fas fa-quote-right"></span>
      </div>
    </div>
  </div>
</div>
        </div>

      <br />
      <br />
      <h3 className="h3 team-title">Our Team member</h3>
      <br />
      <section className="container_team">
        <div className="team-section">
        <div className="card-wrapper-team">
          <div className="card-team">
            <div className="card-image-team">
              <img className="card-image-team1" src="./image/murad2.jpeg" alt="profile one" />
            </div>
            <ul className="social-icons">
              <li>
                <a href="">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-dribbble" />
                </a>
              </li>
            </ul>
            <div className="details-team">
              <h2>
                Murad Alazzeh
                <br />
                <p className="job-title-team">Team leader and developer</p>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper-team">
          <div className="card-team">
            <div className="card-image-team">
              <img className="card-image-team1" src="./image/Mohammad.jpg" alt="profile one" />
            </div>
            <ul className="social-icons">
              <li>
                <a href="">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-dribbble" />
                </a>
              </li>
            </ul>
            <div className="details-team">
              <h2>
                Mohammad Alhaj
                <br />
                <p className="job-title-team"> perfect developer</p>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper-team">
          <div className="card-team">
            <div className="card-image-team">
              <img className="card-image-team1" src="./image/heba.jpeg" alt="profile one" />
            </div>
            <ul className="social-icons">
              <li>
                <a href="">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-dribbble" />
                </a>
              </li>
            </ul>
            <div className="details-team">
              <h2>
                Heba Alhamaydeh
                <br />
                <p className="job-title-team">Super mom and developer</p>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper-team">
          <div className="card-team">
            <div className="card-image-team">
              <img className="card-image-team1" src="./image/sara.jpeg" alt="profile one" />
            </div>
            <ul className="social-icons">
              <li>
                <a href="">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-dribbble" />
                </a>
              </li>
            </ul>
            <div className="details-team">
              <h2>
                Sara Altayeh
                <br />
                <p className="job-title-team">Best designer</p>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper-team">
          <div className="card-team">
            <div className="card-image-team">
              <img className="card-image-team1" src="./image/Yasin.jpg" alt="profile one" />
            </div>
            <ul className="social-icons">
              <li>
                <a href="">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-dribbble" />
                </a>
              </li>
            </ul>
            <div className="details-team">
              <h2>
                Yasien Burqan
                <br />
                <p className="job-title-team">UI Developer</p>
              </h2>
            </div>
          </div>
        </div>
        </div>
      </section>
      {/* END container */}

      {/* <div className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
              <h3 className="section-subheading text-muted">
                We worked hard to deliver this passion
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="./image/murad2.jpeg" alt="" />
                <h4>Murad Alazzeh</h4>
                <p className="text-muted">Team leader and developer </p>
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
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="./image/Mohammad.jpg" alt="" />
                <h4>Mohammad Alhaj</h4>
                <p className="text-muted">Super Engineer and perfect developer </p>
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
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="./image/heba.jpeg" alt="" />
                <h4>Heba Alhamaydeh</h4>
                <p className="text-muted">super Mom and super developer </p>
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
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="./image/sara.jpeg" alt="" />
                <h4>Sara Altayeh</h4>
                <p className="text-muted">nice color designer and coder </p>
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
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="./image/Yasin.jpg" alt="" />
                <h4>Yasin burqan </h4>
                <p className="text-muted">The one and the only barber , and fast developer </p>
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
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                This is our development team if have any question please contact us
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/creative-market.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
           
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm"  novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Your Name *"
                        required="required"
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
                        required="required"
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
                        id="message"
                        placeholder="Your Message *"
                        required="required"
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

      {/* <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; Art of coding 2022</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <a href="#" className="fa fa-facebook"></a>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="#something">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
    <Footer/>
    </>
  );
};

export default HomePage;
