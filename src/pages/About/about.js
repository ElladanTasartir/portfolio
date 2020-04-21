import React from 'react';
import codingSVG from '../../assets/coding.svg';

const About = () => {
    return (
        <main>
            <article>
                <div id="container-text">
                    <p id="title">About:</p>
                    <p id="text">Hi! My name is Erick Demori Malta, a student aspiring to become a FullStack developer
                    someday. I live in Brazil and I'm currently studying JavaScript and some of its libraries, like JQuery, 
                    and frameworks, such as React, hence the reason I made this portfolio using it. 
                    In any case, I have some experience
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
