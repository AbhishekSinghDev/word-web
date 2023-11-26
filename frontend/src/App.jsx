import { Route, Routes } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
