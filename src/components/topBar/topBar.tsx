import "./topBar.css";

const TopBar = () => {
  return (
    <div className="topBarContainer">
      <div className="topBarLogo">
        <img src={require("../../assets/icons/pass_logo.png")} alt="logoPass" />
      </div>
      <div className="topBarChoices">
        <div className="syncIcon">
          <img src={require("../../assets/icons/sync.png")} alt="" />
        </div>
        <div className="profileIcon">
          <img src={require("../../assets/icons/profile.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
