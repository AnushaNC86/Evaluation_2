import SideBar from "../../components/sidebar/sideBar";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="topBar">Top</div>
        <div className="Body">Body</div>
      </div>
    </div>
  );
};

export default HomePage;
