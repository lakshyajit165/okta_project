import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import Login from './components/auth/Login';

import './App.css';

function onAuthRequired({history}){
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
      <Security issuer='https://dev-293945.oktapreview.com/oauth2/default'
                  client_id='0oagukfz4zxbLeyVU0h7'
                  redirect_uri={'https://lk-project-portfolio.herokuapp.com' + '/implicit/callback'}
                  onAuthRequired={onAuthRequired} >
            <div className="App"> 
              <Navbar />
              <div className="container">
                  <Route path="/" exact={true} component = {Home}/>
                  <SecureRoute path="/Project" exact={true} component = {Project}/>
                  <Route path='/login' render={() => <Login baseUrl='https://dev-293945.oktapreview.com' />} />
                  <Route path='/implicit/callback' component={ImplicitCallback} />
              </div>
              
            </div>
        </Security>
      </Router>
      
    );
  }
}

export default App;
