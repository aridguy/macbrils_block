import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container mt-5 pb-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <i className="fs-5">&copy; The CodeTECHS 2023</i>
                </div>
                <div className="col-md-4">
                  <a href="https://www.linkedin.com/in/ariyo-idowu-5247a1238/">
                    <i className="fab fa-linkedin text-primary fs-1"></i>
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="https://github.com/aridguy">
                    <i className="text-black fs-1 fab fa-github"></i>
                  </a>
                </div>
                <div className="col-md-4">
                  { //
                    }
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
