import "./topBar.css";

const TopBar = () => {
  return (
    <div>
      <div className="topBarContainer">
        <div className="topBarLogo">
          <img
            src={require("../../assets/icons/pass_logo.png")}
            alt="logoPass"
          />
        </div>
        <div className="topBarChoices">
          <div className="syncIcon">
            <img src={require("../../assets/icons/sync.png")} alt="" />
          </div>
          <div className="profileIcon">
            <img src={require("../../assets/icons/profile.png")} alt="" />
          </div>
        </div>
        <div className="topBarMobile"></div>
      </div>
      <div className="topBarMobile">
        <div className="topBarLeft">
          <div className="topLeftLogo">
            <img
              src={require("../../assets/icons/burger_menu.png")}
              alt="logoPass"
            />
          </div>
          <div className="topLeftRight">
            <img src={require("../../assets/icons/pass.png")} alt="logoPass" />
          </div>
        </div>
        <div className="topBarRight">
          <div className="syncIcon">
            <img src={require("../../assets/icons/sync_icn.png")} alt="" />
          </div>
          <div className="profileIcon">
            <img src={require("../../assets/Images/profile.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
