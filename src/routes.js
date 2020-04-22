import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './pages/About/about';
import Projects from './pages/Projects/projects';

export default function Routes() {
    return (
            <Switch>
                <Route path="/portfolio" component={About} />
                <Route path="/projects" component={Projects} />
            </Switch>
    );
}