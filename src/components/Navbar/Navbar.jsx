import { useState } from 'react';
import './Navbar.css';
import { FaChevronDown } from "react-icons/fa";

const Header = () => {

    const [isHumberOpen,setIsHumberOpen] = useState(false);
    const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);

    const routes = [
        { id: "1A", path: "/", name: "Home" },
        { id: "2B", path: "/newspaper", name: "Newspaper" },
        { id: "3C", path: "/cars", name: "Cars" },
        { id: "4D", path: "/jobs", name: "Jobs" },
        { id: "5E", path: "/properties", name: "Properties" }
    ];

    return (
        <div className='pp-header-area'>
            <div className="container">
                <div className="pp-header-content">

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="pp-nexus-logo">
                            <a href="#"><img src="/assets/images/logo/logo.png" alt="Logo" /></a>
                        </div>
                        <nav className='main-nav'>
                            <ul className={`${isHumberOpen ? "showMenu" : ""}`}>
                                {
                                    routes.map(route => <li key={route.id}><a href={route.path}>{route.name}</a></li>)
                                }
                                <li><a href="#">More <FaChevronDown className='nav-down-arrow' /></a>
                                    <ul>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="d-flex align-items-center">
                        <a className='signin-btn' href="#">Sign In</a>
                        <a className='similar-btn' href="#">Sign Up</a>
                    </div>

                    <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="mobile-menu-icon">
                        <div onClick={() => setIsHumberOpen(!isHumberOpen)} className={`all-p-humber ${isHumberOpen ? "open" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Header;