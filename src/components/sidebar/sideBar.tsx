import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sideBarContainer">
      <div className="logoBurger">
        <img src={require("../../assets/icons/burger_Menu.png")} alt="" />
      </div>
      <div className="homeIcn"></div>
    </div>
  );
};

export default SideBar;
