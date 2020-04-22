import React from 'react';

import './styles.css';

let vectorProjects = require('../../services/feedProjects');

const Projects = () => {
    return (
        <main>
            <article className="container-projects">
                <h1 id="title-projects">Here are some of the projects I've worked on:</h1>
                <div>
                    <ul className="list-projects">
                        {vectorProjects.map((item, index) => (
                            <li key={item.id}>
                                <h2 id="title">Project {index + 1}</h2>
                                <p><span>Name: </span>{item.name}</p>
                                <p><span>Description: </span>{item.description}</p>
                                <p><span>Year: </span>{item.year}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        </main>

    );
}

export default Projects;