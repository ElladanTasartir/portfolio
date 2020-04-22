import React from 'react';
import { Link } from 'react-router-dom'
import { FaHome, FaGithub, FaLinkedin, FaFacebook, FaTasks, FaEllipsisV } from 'react-icons/fa';
import $ from 'jquery';


const Header = () => {

    const linkColor = "#501b65";

    $(window).resize(() => {
        if ($(".nav-social-links").css("display") === "none" &&  $(window).innerWidth() > 806){
            $(".nav-social-links").css({"display": "block"});
            console.log("dei block");
        } 
        if ($(".nav-social-links").css("display") === "block" &&  $(window).innerWidth() <= 806) {
            $(".nav-social-links").css({"display": "none"});
            console.log("dei none");
        }
    });

    function scrollMenu() {
        $(document).ready(() => {
            $(".nav-social-links").slideToggle(350);
        });
    }

    return (
        <>
        <header>
            <nav className="main-nav">
                <div className="mobile-bar">
                    <button type="button" id="menu" onClick={scrollMenu}><FaEllipsisV color={linkColor}/></button>
                </div>
                <div className="home-button">
                    <Link className="home-button-link" to="/portfolio"><FaHome color={linkColor}/><span>Home</span></Link>
                    <Link className="home-button-link" to="/projects"><FaTasks color={linkColor}/><span>Projects</span></Link>
                </div>
            </nav>
            <nav className="nav-social-links">
                <ul>
                    <li><a href="https://github.com/ElladanTasartir"><FaGithub color={linkColor} /><span>Github</span></a></li>
                    <li><a href="https://www.linkedin.com/in/erick-malta-8597a1197/"><FaLinkedin color={linkColor} /><span>LinkedIn</span></a></li>
                    <li><a href="https://www.facebook.com/erick.demori"><FaFacebook color={linkColor} /><span>Facebook</span></a></li>
                </ul>
            </nav>
        </header>
        <div className="spacer"></div>
        </>
    );
}

export default Header;