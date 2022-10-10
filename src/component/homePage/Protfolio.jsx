import React from "react";
import "./po.css";
const PortfolioLinks = ({ portfolioLinks }) => {
  return (
    <>
      <section className="bg-light page-section" id="portfolio">
        <div className="container-c">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div style={{marginBottom:"-5rem"}}>
                <h2 className="section-heading text-uppercase">Our Services</h2>
                <h3 className="section-subheading text-muted">
                  We provide different type of services that will make your life easy{" "}
                </h3>
              </div>
            </div>
            {portfolioLinks &&
              portfolioLinks.map(({ title, caption, image }, index) => (
                <div className="col-md-4 col-sm-6 portfolio-item">
                  <div class="container-c">
                    <div class="card-w">
                      <div class="image">
                        <img href="#" src={image} />
                        <h3>{title}</h3>
                      </div>
                      <div class="content">
                        {/* <h3>{title}</h3> */}
                        <p>{caption}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioLinks;
