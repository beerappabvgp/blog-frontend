import { useEffect, useState } from "react";
import { fetchBlogs } from "../api/client";
import { BlogItem } from "./BlogItem";
import "../styles/blogs.css";
export const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const getAllBlogs = async () => {
            try {
                const response = await fetchBlogs();
                console.log("response : ", response);
                setBlogs(response?.data?.data);
            } catch (error) {
                console.log(error);
            }
        }

        getAllBlogs();
    }, [])
    return (
        <div className="blogs-par">
            {/*  list of blogs */}
            {blogs.map((blog) => {
                return (
                    < BlogItem title={blog.title}
                    description={blog.description}
                    content = {blog.content} />
                );
            })}
        </div>
    );
}