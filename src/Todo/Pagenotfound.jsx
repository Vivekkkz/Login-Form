import "../LoginForm/style.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="banner3">
      <div className="container">
        <div className="row ">
          <div className="col">
            <h1 className="error-tag">
              <i class="fa-regular fa-face-frown"></i>Error 404!
            </h1>
            <h2 className="page-tag">
              <i className="fas fa-exclamation-triangle"></i>
              <b>Page Not Found </b>
            </h2>
            <h3 className="para-tag">
              We're sorry,the page you requested could not be found.Please go
              back to the Home Page or contact us Support team.@Vivek.gamil.com.
            </h3>
            <button
              className="btn btn-primary mt-3"
              onClick={() => navigate("/home")}
            >
              Go to Home Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
