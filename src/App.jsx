import { Navbar } from "./components/Navbar";
import "./app.css";
import {Route, Router, Routes } from "react-router-dom";
import { Signup } from "./components/SignUp";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;