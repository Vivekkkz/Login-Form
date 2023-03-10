class Authentication {
  setLoggedInUser(username) {
    sessionStorage.setItem("authenticatedUser", username);
  }

  getLoggedInUser() {
    let loggedInUser = sessionStorage.getItem("authenticatedUser");
    return loggedInUser;
  }

  isUserLoggedIn() {
    let user = this.getLoggedInUser();
    if (user) {
      return true;
    } else {
      return false;
    }
  }
  removeUser() {
    sessionStorage.removeItem("authenticatedUser");
  }
}

export default new Authentication();
