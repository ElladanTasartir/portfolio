import React from 'react';
import { FaHome,FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './styles.css';

const Header = () => {
    return (
        <header>
            <nav>
                <a id="home-button" href="/"><FaHome /><span>Início</span></a>
                <ul>
                    <li><a href="https://github.com/ElladanTasartir"><FaGithub /><span>Github</span></a></li>
                    <li><a href="https://www.linkedin.com/in/erick-malta-8597a1197/"><FaLinkedin /><span>LinkedIn</span></a></li>
                    <li><a href="https://www.facebook.com/erick.demori"><FaFacebook /><span>Facebook</span></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;