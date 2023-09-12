import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IntakeForm from './IntakeForm';
import ReviewPage from './ReviewPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/review">
          <ReviewPage />
        </Route>
        <Route path="/edit">
          <IntakeForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
