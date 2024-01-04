import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate =  useNavigate();
  const gotoContact = (e) => {
    navigate('/contact');
  }

   
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow-1 bg-white height">
        <div className="container">
          <a className="navbar-brand me-2" href="https://mdbgo.com/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Chainlink_Logo.png"
              height="16"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="fs-1 nav-link text-black" href="/">
                 The codeTechs 
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-5">
             <p className="fs-3 cursor">About</p>
             <p onClick={gotoContact} className="fs-3 cursor">Contact</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
