import React from 'react';
import Page from './pages/Page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Page} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;