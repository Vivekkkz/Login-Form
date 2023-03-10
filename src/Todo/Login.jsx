import React from "react";
import "../LoginForm/style.css";
import Authenthication from "./Js/Authenthication";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginsucess: false,
      loginfailed: false,
      validusername: false,
      validpassword: false,
      clicked: false,
    };
  }

  inputOnchange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submit = (event) => {
    event.preventDefault();
    console.log("username", this.state.username);
    console.log("Password", this.state.password);
    this.setState({
      clicked: true,
    });
    if (
      this.state.username == "Vivekananth" &&
      this.state.password == "12345678"
    ) {
      Authenthication.setLoggedInUser(this.state.username);
      this.props.navigate(`/home/${this.state.username}`);
      // this.setState({
      //   loginsucess: true,
      //   loginfailed: false,
      // });
    } else {
      this.setState({
        loginsucess: false,
        loginfailed: true,
      });
    }
    if (this.state.username != "" && this.state.username.length >= 5) {
      this.setState({
        validusername: true,
      });
    } else {
      this.setState({
        validusername: false,
      });
    }
    if (this.state.password != "" && this.state.password.length >= 7) {
      this.setState({
        validpassword: true,
      });
    } else {
      this.setState({
        validpassword: false,
      });
    }
  };
  render() {
    return (
      <div className="banner">
        <div className="container">
          <div className="row ">
            <div className="col-md-5 ">
              <div className="card ">
                <div className="card-body text-align-left">
                  <h4 className="text-center">Login Form</h4>
                  <form>
                    <div className="mb-3 text-left">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onInput={this.inputOnchange}
                      ></input>
                      {this.state.clicked && !this.state.validusername && (
                        <div className="alert-text" id="username-alert">
                          <i className="fas fa-exclamation-triangle"></i>
                          Username must not be empty or must be minimum 5
                          characters
                        </div>
                      )}
                    </div>

                    <div className="mb-3 text-left">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onInput={this.inputOnchange}
                        autoComplete="new-password"
                      ></input>
                      {this.state.clicked && !this.state.validpassword && (
                        <div className="alert-text" id="password-alert">
                          <i className="fas fa-exclamation-triangle"></i>
                          Password must be min 8 characters to max 15 characters
                        </div>
                      )}
                    </div>
                    <div className="row mb-3  justify-content-center">
                      <div className="col-4">
                        <div className="row justify-content-center">
                          <button
                            type="submit"
                            className="btn btn-primary col-10"
                            onClick={this.submit}
                          >
                            Login
                          </button>
                        </div>

                        <LoginStatus
                          pass={this.state.loginsucess}
                          fail={this.state.loginfailed}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function LoginStatus(props) {
  if (props.pass || props.fail) {
    return props.pass ? (
      <div className=" row mb-3">
        <div className=" green alert alert-success text-center col-20 mt-4">
          Login Success
        </div>
      </div>
    ) : (
      <div className=" red alert alert-danger text-center  mt-4">
        Login Failed
      </div>
    );
  }
}

export default LoginComponent;
