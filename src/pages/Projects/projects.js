import React from 'react';

import './styles.css';

let vectorProjects = require('../../services/feedProjects');

const Projects = () => {
    return (
        <main>
            <article className="container-projects">
                <p id="title-projects">Aqui estão alguns dos projetos que eu já trabalhei:</p>
                <div>
                    <ul className="list-projects">
                        {vectorProjects.map((item, index) => (
                            <li key={item.id}>
                                <p id="title">Projeto {index + 1}</p>
                                <p><span>Nome: </span>{item.name}</p>
                                <p><span>Descrição: </span>{item.description}</p>
                                <p><span>Ano: </span>{item.year}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        </main>

    );
}

export default Projects;