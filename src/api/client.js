import axios from "axios";

export const client = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// Signup API call
export const signUpApi = async (userData) => {
    return await client.post("/users/create-user", userData);
};

// Login API call
export const loginApi = async (userData) => {
    const response = await client.post("/users/login", userData);
    
    // Save token and user data to localStorage
    if (response.data?.data) {
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("userData", JSON.stringify(response.data.data.user));
    }
    
    return response;
};

// http://localhost:3000/api/v1/blogs

export const fetchBlogs = async () => {
    try {
        const response = await client.get("/blogs");
        return response;
    } catch (error) {
        throw error;
    }
} 