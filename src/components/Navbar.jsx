import '../styles/navbar.css';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();
    const handleSignupClick = () => {
        navigate('/signup')
    }

    const handleLoginClick = () => {
        navigate('/login');
    }

    return (
        <div className="nav">
            <div className="nav-item1" onClick={() => navigate('/')}>
                <img src="./logo.jpeg" alt="logo" onError={(e) => { e.target.style.display = 'none'; }} />
                <h1>ByteBlog</h1>  
            </div>

            {/* item2  */}
            <div className='blogs'>
                <p>My Blogs</p>
                <p>Create Blog</p>
            </div>
            <div className="nav-item2">
                {/* when clicked on signup we need to navigate the user to the signup page */}
                <button onClick={handleSignupClick}>Signup</button>
                <button onClick={handleLoginClick}>Login</button>
            </div>
        </div>
    );
}