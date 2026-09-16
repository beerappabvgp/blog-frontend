import { Navbar } from "./components/Navbar";
import "./app.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Signup } from "./components/SignUp";
import { Login } from "./components/Login";
import { Toaster } from "react-hot-toast";
import { Blogs } from "./components/Blogs";

const App = () => {
  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            fontSize: "16px",
            borderRadius: "8px",
          },
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>  
  );
};

export default App;