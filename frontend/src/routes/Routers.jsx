import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Editor from "../pages/Editor";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import Profile from "../components/Profile";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Routers;
