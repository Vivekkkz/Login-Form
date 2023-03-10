import React from "react";
import { Navigate } from "react-router-dom";
import Authentication from "../Todo/Js/Authenthication";

class AuthenticatedRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (Authentication.isUserLoggedIn()) {
      return { ...this.props.children };
    } else {
      return <Navigate to="/login" />;
    }
  }
}

export default AuthenticatedRouter;
