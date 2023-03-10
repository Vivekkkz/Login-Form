import React from "react";
import FormComponent from "./Form";

class ListMainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: [
        {
          id: 1,
          name: "Vivek",
          addr: "chennai",
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
          addr: "chennai",
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
      <div className="container">
        <FormComponent />
        <div className="row mt-5">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone No</th>
              </tr>
            </thead>
            <tbody>
              {this.state.username.map((user, index) => (
                <tr key={index}>
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
    );
  }
}

export default ListMainComponent;
