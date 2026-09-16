import "../styles/blogs.css";

export const BlogItem = ({ title, description, content}) => {
    return (
        <div className="blog-item">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{content}</p>
        </div>
    );
}