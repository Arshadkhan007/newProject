import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      {/*  */}
      <div className="Login">
        <Link to="/">
          <img
            className="LoginLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="Amazon Logo"
          />
        </Link>

        {/* Login Form Start */}
        <div className="LoginContainer">
          <h2>Sign In</h2>
          <form>
            <h4>Email</h4>
            <input type="email" placeholder="Your Email" />
            <h4>Password</h4>
            <input type="password" placeholder="Your Password" />
            <button className="LoginButton">Sign In</button>
          </form>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button className="LoginRegisterButton">
            Create Your Amazon Account
          </button>
          <br />
          <p style={{ textAlign: "center" }}>Login With :</p>
          <a className="LoginSignInButtonGoogle">
            <img
              className="loginGoogleImg"
              src="https://pngimg.com/uploads/google/google_PNG102344.png"
              alt=""
            />
          </a>
        </div>

        {/* Login Form End */}
      </div>
      {/*  */}
    </>
  );
};
export default Login;
