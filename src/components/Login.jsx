import { useState } from "react";
import { loginApi } from "../api/client";
import '../styles/login.css'
export const Login = () => {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        });
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log("handle submit....")

            // make an api call and handle the error 
            const response = await loginApi(userData);
            console.log("response: ", response);
        } catch (error) {
            console.log("error while making an api call ....", error);
            throw error;
        }

    } 

    return (
        <div className="login">
            <h1>Login Page</h1>
            <form action="" onSubmit={handleSubmit} className="form">
                {/* username */}
                <div className="form-input">
                    <label htmlFor="username">Username: </label>
                    <input type="text" required name = "username" placeholder="Enter your username " value={userData.username} onChange={handleChange} />
                </div>

                {/* paassword */}
                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Enter your pasword" value={userData.password} onChange={handleChange} />
                </div>
                <button type="submit" id="login-button">Login</button>
            </form>
        </div>
    );
}