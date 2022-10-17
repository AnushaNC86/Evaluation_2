import "./signIn.css";
const SignIn = () => {
  return (
    <div>
      <form className="formContianer">
        <div className="signInHead">SIGN IN TO YOUR ACCOUNT</div>
        <div className="inputField">
          <input
            type="text"
            name="mobile"
            id="mobile"
            className="inputFields"
            placeholder="Mobile number"
          />{" "}
        </div>
        <div className="inputField">
          <input
            type="text"
            name="mpin"
            id="mpin"
            className="inputFields"
            placeholder="Mpin"
          />
        </div>
        <div className="forgotPassword">Forgot your password?</div>
        <div className="btnSubmit">
          <input type="submit" />
        </div>
      </form>
      <div className="signUp">Don’t have a Account? SIGNUP</div>
    </div>
  );
};

export default SignIn;
