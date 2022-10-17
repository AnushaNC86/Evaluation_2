import Login from "./views/login/loginPage";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import Register from "./views/Register/register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
