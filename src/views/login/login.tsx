import Logo from "../../components/logo/logo";
import SignIn from "../../components/signIn/signIn";
import "./login.css";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="logoContainer">
        <Logo />
      </div>
      <div className="signIn">
        <SignIn />
      </div>
    </div>
  );
};

export default Login;
