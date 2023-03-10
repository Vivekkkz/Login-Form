import LoginComponent from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./Home";
import PageNotFound from "./Pagenotfound";
import TodoListComponent from "./List";
import withNavigation from "./withNavigation";
import withParams from "./withparams";
import HeaderComponent from "./Header";
import LogoutComponent from "./Logout";
import FooterComponent from "./Footer";
import AuthenticatedRouter from "./Authenthicated";

function TodoComponent() {
  const LoginWithNavigation = withNavigation(LoginComponent);
  const HomeWithParams = withParams(HomeComponent);
  const HeaderWithNavigation = withNavigation(HeaderComponent);
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <HeaderWithNavigation />
          <Routes>
            <Route path="/" element={<LoginWithNavigation />}></Route>
            <Route path="/login" element={<LoginWithNavigation />}></Route>
            <Route
              path="/home/:id"
              element={
                <AuthenticatedRouter>
                  <HomeWithParams />
                </AuthenticatedRouter>
              }
            ></Route>
            <Route
              path="/list"
              element={
                <AuthenticatedRouter>
                  <TodoListComponent />
                </AuthenticatedRouter>
              }
            ></Route>
            <Route path="/logout" element={<LogoutComponent />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
          <FooterComponent />
        </Router>
      </div>
    </div>
  );
}

export default TodoComponent;
