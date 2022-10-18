import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sideBarContainer">
      <div className="iconsContainer">
        {" "}
        <div className="logoBurger">
          <img src={require("../../assets/icons/burger_menu.png")} alt="" />
        </div>
        <div className="logoHome">
          <img src={require("../../assets/icons/home_icn.png")} alt="" />
        </div>
        <div className="active"></div>
        <div className="homeIcn"></div>
      </div>
    </div>
  );
};

export default SideBar;
