import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Form from './Form'

export default function SecretSanta() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/secret-santa">
            <Form></Form>
          </Route>
          <Route path="/">
            <Link to="/secret-santa">
              Get Started
            </Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}