import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import UsersView from './views/users-view';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Login}/>
      <PrivateRoute path='/protected' component={UsersView}/>
    </Router>
  );
}

export default App;