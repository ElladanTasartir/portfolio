import React from 'react';
import { Link } from 'react-router-dom'
import { FaHome,FaGithub, FaLinkedin, FaFacebook, FaTasks } from 'react-icons/fa';


const Header = () => {
    return (
        <header>
            <nav>
                <div className="home-button">
                    <Link to="/"><FaHome /><span>Home</span></Link>
                    <Link to="/projects"><FaTasks /><span>Projects</span></Link>
                </div>
                <ul className="nav-social-links">
                    <li><a href="https://github.com/ElladanTasartir"><FaGithub /><span>Github</span></a></li>
                    <li><a href="https://www.linkedin.com/in/erick-malta-8597a1197/"><FaLinkedin /><span>LinkedIn</span></a></li>
                    <li><a href="https://www.facebook.com/erick.demori"><FaFacebook /><span>Facebook</span></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;