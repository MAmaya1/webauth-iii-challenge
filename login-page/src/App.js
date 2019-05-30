import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import RegistrationForm from './components/RegistrationForm';
import UsersView from './views/UsersView';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Login}/>
      <PrivateRoute path='/protected' component={UsersView}/>
      <Route path='/register' component={RegistrationForm}/>
    </Router>
  );
}

export default App;