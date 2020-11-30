import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
                <Route path="/resume" component={Resume} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes