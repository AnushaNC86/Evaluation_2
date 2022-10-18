import "./topBar.css";

const TopBar = () => {
  return (
    <div className="topBarContainer">
      <div className="topBarLogo">
        <img src={require("../../assets/icons/pass_logo.png")} alt="logoPass" />
      </div>
      <div className="topBarChoices">optoons</div>
    </div>
  );
};

export default TopBar;
