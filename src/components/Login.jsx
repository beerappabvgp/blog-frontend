import { useState } from "react";
import { loginApi } from "../api/client";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import '../styles/login.css';

export const Login = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await loginApi(userData);
            toast.success(response.data?.message || "Logged in successfully!");
            navigate("/blogs");
        } catch (error) {
            // Show backend error message (e.g., "Invalid credentials" or validation error)
            const errorMessage = 
                error.response?.data?.errors?.[0]?.message || 
                error.response?.data?.message || 
                "Login failed";
            toast.error(errorMessage);
        }
    };

    return (
        <div className="login">
            <h1>Welcome Back</h1>
            <p className="auth-subtitle">Sign in to manage your blogs and profile</p>
            <form onSubmit={handleSubmit} className="form">
                {/* username */}
                <div className="form-input">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        required
                        name="username"
                        placeholder="Enter your username"
                        value={userData.username}
                        onChange={handleChange}
                    />
                </div>

                {/* password */}
                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        required
                        name="password"
                        placeholder="Enter your password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" id="login-button">Sign In</button>
            </form>
            <p className="auth-footer">
                Don't have an account?
                <span onClick={() => navigate('/signup')}>Sign up</span>
            </p>
        </div>
    );
};