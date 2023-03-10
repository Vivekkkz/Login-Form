import { Link } from "react-router-dom";
function LogoutComponent(props) {
  //const navigate = useNavigate();
  return (
    <div className="banner4">
      <div className="Container">
        <div className="row mt-5 justify-content-center">
          <div className="col-md-4">
            <i class="power-of fa-solid fa-power-off"></i>
            <h2 className="log-out">You have logged out Successfully!</h2>
            <Link
              to="/login"
              className="btn btn-primary btn-sm justify-content-center"
            >
              Go to Login Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LogoutComponent;
