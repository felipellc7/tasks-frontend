import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import NewAccount from './components/auth/NewAccount'
import Projects from './components/projects/Projects'

import ProjectState from './context/projects/ProjectState'

function App() {
  return (
    <ProjectState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/sign-up" component={NewAccount}></Route>
          <Route exact path="/projects" component={Projects}></Route>
        </Switch>
      </Router>
    </ProjectState>
  );
}

export default App;
