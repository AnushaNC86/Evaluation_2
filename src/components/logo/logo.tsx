import { Link } from "react-router-dom";
import "./logo.css";
const Logo = () => {
  return (
    <div className="logo">
      <div className="logoTextContainer">
        <div className="logoImg">
          <img
            src={require("../../assets/Images/logo.png")}
            alt=""
            className="logoWeb"
          />
          <img
            src={require("../../assets/icons/logo.png")}
            alt="logo2"
            className="logoMobile"
          />
        </div>
        <div className="logoText">
          <div>Protect & Manage every password in your business</div>
        </div>

        <div className="tabsContainer">
          <div className="signInTab">
            <Link to="/signin" className="linkToSignin">
              Sign-IN
            </Link>
          </div>
          <div className="signUpTab">
            <Link to="/signup" className="linkToSignin">
              Sign-UP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
