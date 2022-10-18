import SideBar from "../../components/sidebar/sideBar";
import TopBar from "../../components/topBar/topBar";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="topBar">
          <TopBar />
        </div>
        <div className="Body">Body</div>
      </div>
    </div>
  );
};

export default HomePage;
