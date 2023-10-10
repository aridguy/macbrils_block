import { Link } from "react-router-dom";



const Navbar = () => {
   
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary height">
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
                <a className="nav-link text-white" href="/">
                  Brils Blog
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <button
                type="button"
                className="btn btn-link px-3 me-2 text-white"
              >
                Login
              </button>
              <Link className="btn btn-primary me-3 text-white" type="button" to="/create">Create a Blog</Link>
             
              <a
                className="btn btn-dark px-3"
                href="https://github.com/mdbootstrap/mdb-ui-kit"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
