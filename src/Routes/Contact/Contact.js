import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="mt-5 pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d126834.05801193304!2d3.3521664!3d6.5765376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sarid%20multimedia!5e0!3m2!1sen!2sng!4v1702149883593!5m2!1sen!2sng"
                  width="100%"
                  height="450"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <p className="black fw-bolder intouch">Get in touch</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p className="fs-4 black">LOCATION</p>
                  <span>Lagos, Nigeria</span>
                  <p className="black fw-bolder">AGEGE</p>
                </div>
                <div className="col-md-6">
                  <p className="fs-4 black">CONTACT</p>
                  <span>Phone</span>
                  <p className="black fw-bolder">234 9075320025</p>
                  <span>Email</span>
                  <p className="black fw-bolder">codetechs247@gmail.com</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p className="fs-4 black">OUR HOURS</p>
                  <span>247 Services got oyu covered</span>
                </div>
                <div className="col-md-6">
                  <p className="fs-4 black">FOLLOW US</p>
                  <div className="col-md-4">
                    <a href="https://www.linkedin.com/in/ariyo-idowu-5247a1238/">
                      <i className="fab fa-linkedin fs-1"></i>
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a href="https://github.com/aridguy">
                      <i className="text-black fs-1 fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
