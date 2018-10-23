import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Home extends Component {
    state = { authenticated: null }; 

  checkAuthentication = async() => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  login = async() => {
    this.props.auth.login('/');
  }

  logout = async() => {
    this.props.auth.logout('/');
  }

  render() {
    if (this.state.authenticated === null) return null;

    const mainContent = this.state.authenticated ?
      (
          <div>
              <p className="lead">You are now authorized to view the projects, <Link to="/Project">click here</Link></p>
              <button className="btn btn-light btn-lg" onClick={this.logout}>Logout<i className="fa fa-sign-in"></i></button>
          </div>
      ) :
      (
          <div>
          <p className="lead">If you wish to view the projects, please get your credentials from the admin</p>
          <button className="btn btn-dark btn-lg" onClick={this.login}>Login<i className="fa fa-sign-in"></i></button>
          </div>
      )
      

    return (
      <div className="jumbotron pt text-center">
          <h1 className="display-4">Welcome to this Portal</h1>
          {mainContent}
          <hr/>
          <p className="lead">To know more about the author, <a href="https://lk-portfolio.herokuapp.com/" target="_blank" rel="noopener noreferrer">click here</a></p>
      </div>
    );
  }
});