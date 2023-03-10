import React from "react";
import "../LoginForm/style.css";

class UncontrollingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
  }
  submit = (event) => {
    event.preventDefault();
    console.log("Username", this.username.current.value);
    console.log("Password", this.password.current.value);
  };
  render() {
    return (
      <diV className="banner">
        <div className="container" style={{ height: "100vh" }}>
          <div className="row  justify-content-center ">
            <div className="col-md-5">
              <div className="card">
                <div className="card-body">
                  <h4 className="text-center">Login Form</h4>
                  <form>
                    <div className="mb-3 text-align-left">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Username"
                        ref={this.username}
                      ></input>
                      <div className="alert-text" id="username-alert">
                        <i className="fas fa-exclamation-triangle"></i>
                        Username must not be empty or must be minimum 5
                        characters
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder="Password"
                        ref={this.password}
                        autoComplete="new-password"
                      ></input>
                      <div className="alert-text" id="password-alert">
                        <i className="fas fa-exclamation-triangle"></i>Password
                        must be min 8 characters to max 15 characters
                      </div>
                    </div>
                    <div className="row mb-3  justify-content-center">
                      <div className="col-4">
                        <button
                          className="btn btn-success"
                          onClick={this.submit}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </diV>
    );
  }
}
export default UncontrollingComponent;
