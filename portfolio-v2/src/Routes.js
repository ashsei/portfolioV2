import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/resume" component={Resume} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes