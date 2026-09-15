// we need to write the logic to signup 

import { useState } from "react";
import { signUpApi } from "../api/client";
import '../styles/signup.css';
import { useNavigate } from "react-router-dom";
export const Signup = () => {

    // state of the form fields 

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: "",
        password: "",
        email: "",
        contact: "",
        bio: ""
    });

    // we need to store the response from the server
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData((prevData) => {
            return {
                ...prevData,
                [name]: value, 
            }
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handle submit ....")
        // make an api call
        const res = await signUpApi(userData);
        console.log("response: ", res);
        if (res) {
            setResponse(res);
            // if there is no error only then we need to show successful message or else we need to show the error message 
            // and once the user is created successfully we need to clear the form
            if (res.data) {
                alert("User created successfully ... ");
                navigate("/login");
            } else {
                alert("Failed to create user");
            }
            setUserData({
                username: "",
                password: "",
                email: "",
                contact: "",
                bio: ""
            });
        } else {
            alert("Failed to create user");
        }
    }
    return (
        <div className="signup-par">
            <h1>SignUp Form</h1>
            <div>
                {/* we need to call the signup api once they submit the form */}
                <form action="" onSubmit={handleSubmit} className="form">
                    {/* first field */}
                    <div className="form-input">
                        <label htmlFor="">Username: </label>
                        <input type="text" name="username" required placeholder="Enter your name" onChange={handleChange} value={userData.username}/>
                    </div>

                    {/* email field */}
                    <div className="form-input">
                        <label>Email: </label>
                        <input type="email" name = "email" required placeholder="Enter your email address" onChange={handleChange} value={userData.email} />
                    </div>

                    {/* password field */}
                    <div className="form-input">
                        <label htmlFor="">Password: </label>
                        <input type="password" name = "password" required placeholder="Enter your password" onChange={handleChange} value={userData.password} />
                    </div>

                    {/* contact field */}
                    <div className="form-input">
                        <label htmlFor="">Contact: </label>
                        <input type="text" name = "contact" required placeholder="Enter your contact number" onChange={handleChange} value={userData.contact}/>
                    </div>

                    {/* Bio of the user */}
                    <div className="form-input">
                        <label htmlFor="">Bio: </label>
                        <input type="text" name = "bio" placeholder="Enter your Bio" onChange={handleChange} value={userData.bio} />
                    </div>

                    {/* submit button */}
                    <div>
                        <button type="submit" id="submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}