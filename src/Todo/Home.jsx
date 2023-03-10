import { Link } from "react-router-dom";
import "../LoginForm/style.css";
//import { useNavigate } from "react-router-dom";

function HomeComponent(props) {
  //const navigate = useNavigate();
  return (
    <div className="banner1">
      <div className="Container">
        <div className="row mt-5 justify-content-center">
          <div className="col-md-4">
            <h2 className="home-tag">Welcome {props.params.id}</h2>
            <p className="home-tag">
              We hope you enjoy your experience on our website.
            </p>
            <Link
              to="/list"
              className="btn btn-success btn-sm justify-content-center"
            >
              Go to List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
