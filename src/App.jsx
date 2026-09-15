import { Navbar } from "./components/Navbar";
import "./app.css";
import {Route, Router, Routes } from "react-router-dom";
import { Signup } from "./components/SignUp";
import { Login } from "./components/Login";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element = {<Login />} />
       </Routes>
    </div>
  );
}

export default App;