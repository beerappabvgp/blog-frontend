import '../styles/navbar.css';

export const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-item1">
                <img src="./logo.jpeg" alt="logo"></img>
                <h1>Blogs</h1>  
            </div>

            {/* item2  */}
            <div className='blogs'>
                <p>My Blogs</p>
                <p>Create Blog</p>
            </div>
            <div className="nav-item2">
                <button>Signup</button>
                <button>Login</button>
            </div>
        </div>
    );
}