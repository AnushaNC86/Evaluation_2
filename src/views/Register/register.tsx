import Logo from "../../components/logo/logo";
import SignUp from "../../components/signUp/signUp";
import Toast from "../../components/toast/toast";
import "../login/loginPage.css";

const Register = () => {
  return (
    <div className="login">
      {/* <Toast /> */}
      <div className="loginContainer">
        <Logo />
        <div className="signIn">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Register;
