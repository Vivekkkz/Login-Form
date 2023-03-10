import React from "react";
import { Link } from "react-router-dom";
import Authenthication from "./Js/Authenthication";

class HeaderComponent extends React.Component {
  render() {
    let isLogged = Authenthication.isUserLoggedIn();
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              CGT
            </a>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {isLogged && (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/home/Vivekananth"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/list">
                      List
                    </Link>
                  </li>
                </ul>
              )}
              {isLogged && (
                <Link
                  className="btn btn-danger"
                  to="/logout"
                  onClick={() => Authenthication.removeUser()}
                >
                  Logout
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default HeaderComponent;