import "bootstrap/dist/css/bootstrap.css";
import { BsBook } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { RiFootprintFill } from "react-icons/ri";
const Navigation = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark fixed-top"
        style={{ background: "green" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./Logo.png" alt="" />
          </a>

          <label style={{ marginLeft: "30px" }}>
            {" "}
            <b>
              <big>Dashboard</big>
            </b>
            <br />
            Moving towards a clean and better journey
          </label>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <div>
                      <BsBook />
                    </div>
                    Bookings{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <div>
                      <RiFootprintFill />
                    </div>
                    Footprints
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar-nav ml-auto">
              <a href="#" className="nav-item nav-link">
                <div>
                  <BiLogIn />
                </div>
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
