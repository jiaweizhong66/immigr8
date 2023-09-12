import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IntakeForm from './IntakeForm';
import ReviewPage from './ReviewPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/review" component={ReviewPage} />
        <Route exact path="/" component={IntakeForm} />
      </Switch>
    </Router>
  );
}

export default App;
