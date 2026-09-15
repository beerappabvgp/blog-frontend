import { Navbar } from "./components/Navbar";
import "./app.css";
import {Route, Router, Routes } from "react-router-dom";
import { Signup } from "./components/SignUp";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;