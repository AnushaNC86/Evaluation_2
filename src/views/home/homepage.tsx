import HomeBody from "../../components/Dashboard/dashboradPages";
import SideBar from "../../components/sidebar/sideBar";
import TopBar from "../../components/topBar/topBar";
import "./homePage.css";
import { useState, useEffect } from "react";
import Toast from "../../components/toast/toast";

const HomePage = () => {
  const [toast, setToast] = useState(false);

  useEffect(() => {
    setToast(Boolean(sessionStorage.getItem("signInSuccess")));
    console.log("toast1", toast);
  });

  setInterval(() => {
    sessionStorage.removeItem("signInSuccess");
    setToast(Boolean(sessionStorage.getItem("signInSuccess")));
    console.log("toast", toast);
  }, 3000);

  return (
    <div className="home">
      {toast ? <Toast message="Succesfully signed into your account!!!" /> : ""}
      <div className="homeContainer">
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="topBar">
          <TopBar />
        </div>
        <div className="Body">
          <HomeBody />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
