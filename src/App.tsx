import "./style.css";
import Router from "./components/router/router";
import { useEffect, useState } from "react";
import Toast from "./components/toast/toast";

function App() {
  const [toast, setToast] = useState(false);
  useEffect(() => {
    setToast(Boolean(sessionStorage.getItem("signUpSuccess")));
  });

  setInterval(() => {
    sessionStorage.removeItem("signUpSuccess");
    setToast(Boolean(sessionStorage.getItem("signUpSuccess")));
  }, 2000);

  return (
    <div className="App">
      {toast ? <Toast message="Congrats!! succesfylly signed in:)" /> : ""}
      <Router />
    </div>
  );
}

export default App;
