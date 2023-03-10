import React from "react";
//import "../LoginForm/style.css";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      phone: "",
    };
  }

  inputOnchange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submit = (event) => {
    event.preventDefault();
    var newUser = {
      id: 1,
      name: this.state.name,
      addr: this.state.address,
      phnNo: this.state.phone,
    };
  };

  render() {
    return (
      <div className="1banner">
        <div className="container">
          <div className="row mt-5 ">
            <div className="col-md-5 ">
              <div className="card ">
                <div className="card-body">
                  <h4 className="text-center">User Form</h4>
                  <form>
                    <div className="mb-3 text-align-left">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onInput={this.inputOnchange}
                      ></input>
                    </div>

                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder="Address"
                        name="address"
                        value={this.state.address}
                        onInput={this.inputOnchange}
                        autoComplete="new-password"
                      ></input>
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder="Phone"
                        name="phone"
                        value={this.state.phone}
                        onInput={this.inputOnchange}
                        autoComplete="new-password"
                      ></input>
                    </div>
                    <div className="row mb-3  justify-content-center">
                      <div className="col-4">
                        <div className="row justify-content-center">
                          <button
                            type="submit"
                            className="btn btn-primary col-10"
                            onClick={this.submit}
                          >
                            Add User
                          </button>
                        </div>
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

export default FormComponent;
