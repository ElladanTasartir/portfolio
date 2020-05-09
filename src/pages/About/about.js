import React, { useEffect } from 'react';
import codingSVG from '../../assets/coding.svg';

const About = () => {

    useEffect(() => {
        document.title = "Portfolio - Erick";
    }, []);

    return (
        <main>
            <article>
                <div id="container-text">
                    <h1 id="title">About:</h1>  
                    <p id="text">Hi! My name is Erick Demori Malta, a student aspiring to become a FullStack developer
                    someday. I live in Brazil and I'm currently studying JavaScript and some of its libraries, like JQuery and React, 
                    hence the reason I made this portfolio using them. In any case, I have some experience
                    with C# and am a bit knowledgeable about Python and Java.</p>
                </div>
                <div id="container-img">
                    <img src={codingSVG} alt="Proud Coder"/>
                </div>
            </article>
        </main>
    );
}

export default About;
