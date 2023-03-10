import React from "react";

class ListComponent extends React.Component {
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
    );
  }
}

export default ListComponent;
