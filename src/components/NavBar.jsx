import '../styles/navbar.css';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();

    // Function to determine if the current page is the home page
    const isHomePage = location.pathname === '/';

    // Function to determine if the current page is the specified path
    const isCurrentPage = (path) => location.pathname === path;

    return (
        <div className='nav'>
            <div className='left'>
                {/* Conditionally render home link if not on the home page */}
                {!isHomePage && (
                    <Link to='/'>
                        <p>Home</p>
                    </Link>
                )}
                {/* Conditionally render work link if not on the work page */}
                {!isCurrentPage('/work') && (
                    <Link to='/work'>
                        <p>Work</p>
                    </Link>
                )}

                {/* Conditionally render about link if not on the about page */}
                {!isCurrentPage('/about') && (
                    <Link to='/about'>
                        <p>About</p>
                    </Link>
                )}


            </div>
            <div className='right'>
                {/* Conditionally render contact link if not on the contact page */}
                {!isCurrentPage('/contact') && (
                    <Link to='/contact'>
                        <p>Get in touch!</p>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
