import Logo from "../../components/logo/logo";
import SignUp from "../../components/signUp/signUp";
import Toast from "../../components/toast/toast";
import "../login/loginPage.css";
import { useState, useEffect } from "react";

const Register = () => {
  const [toast, displayToast] = useState(true);
  useEffect(() => {
    displayToast(Boolean(sessionStorage.getItem("signUpSuccess")));
    sessionStorage.removeItem("signUpSuccess");
  }, []);

  setInterval(() => {
    displayToast(false);
  }, 2000);
  return (
    <div className="login">
      {toast ? <Toast /> : ""}
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
