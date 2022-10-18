import { Routes, Route } from "react-router-dom";
import HomePage from "../../views/home/homepage";
import Login from "../../views/login/loginPage";
import Register from "../../views/Register/register";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default Router;
