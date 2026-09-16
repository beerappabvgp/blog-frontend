import { useState } from "react";
import { signUpApi } from "../api/client";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import '../styles/signup.css';

export const Signup = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: "",
        password: "",
        email: "",
        contact: "",
        bio: ""
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
            const res = await signUpApi(userData);
            toast.success(res.data?.message || "User created successfully!");
            navigate("/login");
        } catch (error) {
            // Show backend error message or validation issue in toast
            const errorMessage = 
                error.response?.data?.errors?.[0]?.message || 
                error.response?.data?.message || 
                "Failed to create user";
            toast.error(errorMessage);
        }
    };

    return (
        <div className="signup-par">
            <h1>Create an Account</h1>
            <p className="auth-subtitle">Join us to share stories, connect, and read blogs</p>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-input">
                    <label htmlFor="signup-username">Username</label>
                    <input
                        type="text"
                        id="signup-username"
                        name="username"
                        required
                        placeholder="Choose a username"
                        onChange={handleChange}
                        value={userData.username}
                    />
                </div>

                <div className="form-input">
                    <label htmlFor="signup-email">Email</label>
                    <input
                        type="email"
                        id="signup-email"
                        name="email"
                        required
                        placeholder="name@example.com"
                        onChange={handleChange}
                        value={userData.email}
                    />
                </div>

                <div className="form-input">
                    <label htmlFor="signup-password">Password</label>
                    <input
                        type="password"
                        id="signup-password"
                        name="password"
                        required
                        placeholder="At least 8 characters"
                        onChange={handleChange}
                        value={userData.password}
                    />
                </div>

                <div className="form-input">
                    <label htmlFor="signup-contact">Contact</label>
                    <input
                        type="text"
                        id="signup-contact"
                        name="contact"
                        required
                        placeholder="Your phone number"
                        onChange={handleChange}
                        value={userData.contact}
                    />
                </div>

                <div className="form-input">
                    <label htmlFor="signup-bio">Bio (optional)</label>
                    <input
                        type="text"
                        id="signup-bio"
                        name="bio"
                        placeholder="A short intro about yourself"
                        onChange={handleChange}
                        value={userData.bio}
                    />
                </div>

                <div>
                    <button type="submit" id="submit-button">Create Account</button>
                </div>
            </form>
            <p className="auth-footer">
                Already have an account?
                <span onClick={() => navigate('/login')}>Sign in</span>
            </p>
        </div>
    );
};