// we will centralize all the api calls 


import axios from "axios";

export const client = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});


// signup api call
// http://localhost:3000/api/v1/users/create-user
// method: post 

export const signUpApi =  async (userData) => {
    try {
        const response = await client.post("/users/create-user", userData);
        return response;
    } catch (error) {
        console.error("error while signing up ...", error);
        throw error;
    }
}

export const loginApi = async (userData) => {
    try {
        const response = await client.post("/users/login", userData);
        // we need to store the token and the user data in the localstorage if response is valid 
        if (response.data) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userData", JSON.stringify(response.data.data));
        }
        return response;
    } catch (error) {
        console.error("error while sending api call to login");
        throw error;
    }
}