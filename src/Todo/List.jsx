import React from "react";
//import FormComponent from "./Form";
import "../LoginForm/style.css";

class TodoListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: [
        {
          id: 1,
          name: "Vivek",
          addr: "Chennai",
          phnNo: 9659033162,
        },
        {
          id: 2,
          name: "Hari",
          addr: "Thanjavur",
          phnNo: 9659033162,
        },
        {
          id: 3,
          name: "Raja",
          addr: "Chennai",
          phnNo: 9047464505,
        },
        {
          id: 4,
          name: "Krishna",
          addr: "Thanjavur",
          phnNo: 9659034162,
        },
      ],
    };
  }
  render() {
    return (
      <div className="banner2">
        <div className="container">
          <div className="row mt-0 justify-content-center">
            <h2 className="table-list mt-3">
              <b>User Table</b>
            </h2>
            <table className="table table-striped ">
              <thead>
                <tr className="table table-active">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone No</th>
                </tr>
              </thead>
              <tbody>
                {this.state.username.map((user, index) => (
                  <tr className="table table-active" key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.addr}</td>
                    <td>{user.phnNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoListComponent;
