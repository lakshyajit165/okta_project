import React, { Component } from 'react'

class Project extends Component {

  state = {
      currentUserName: '',
      currentUserEmail: ''
  }  

  componentDidMount(){
      const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
      this.setState({
        currentUserEmail: idToken.idToken.claims.email,
        currentUserName: idToken.idToken.claims.name,
      });
  }
  render() {
    
    const { currentUserEmail, currentUserName} = this.state;
    return (
      <div className="container">
        <div className="jumbotron text-center">
          <h1>Welcome {currentUserName}</h1>
          <p className="lead"><b>Email: </b>{currentUserEmail}</p>
          <hr/>
          <p className="lead">Take a peek at my projects below!</p>
        </div>
        <nav className="text-center">
            <div className="nav nav-tabs nav-justified" id="nav-tab" role="tablist">
              <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><b>JavaScript</b></a>
              <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><b>React.js</b></a>
              <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><b>Node.js & Firebase</b></a>
            </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <br/>
              <div className="row col-lg-12 mx-auto">
                <div className="card">
                    <div className="card-body">
                      <h5 className="card-title text-center">Type n Speak</h5>
                      <br/>
                      <p className="card-text">A Web App that converts whatever you type into speech, using Google's Web Speech API</p>
                      
                      <a href="https://lakshyajit165.github.io/type_n_speak/" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-block">View<i className="fa fa-paper-plane"></i></a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                      <h5 className="card-title text-center">Word Beater</h5>
                      <br/>
                      <p className="card-text">Provides you with words to type and updates your scores as long as you type correctly!</p>
                      <a href="https://lakshyajit165.github.io/wordbeater/" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-block">View<i className="fa fa-paper-plane"></i></a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                      <h5 className="card-title text-center">Text Editor</h5>
                      <br/>
                      <p className="card-text">A text editor web app with different functionalities, created while learning javascript initially..</p>
                      <a href="https://lakshyajit165.github.io/text_editor/" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-block">View<i className="fa fa-paper-plane"></i></a>
                    </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <br/>
              <div className="row col-lg-12 mx-auto">
                <div className="card">
                    <div className="card-body">
                      <h5 className="card-title text-center">Weather App</h5>
                      <br/>
                      <p className="card-text">Shows the weather of place with different parameters using OpenWeatherMap API.</p>
                      
                      <a href="https://lk-weatherapp.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-block">View<i className="fa fa-paper-plane"></i></a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                      <h5 className="card-title text-center">Face Detection</h5>
                      <br/>
                      <p className="card-text">Detects a face in an image (single face) along with authentication using a machine learning API</p>
                      <a href="https://smartbrain-lk.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-block">View<i className="fa fa-paper-plane"></i></a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                      <h5 className="card-title text-center">Shopping List</h5>
                      <br/>
                      <p className="card-text">A simple todo list app, created to learn the basics of react, state and props along with redux..</p>
                      <a href="https://lk-shoppinglist.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-block">View<i className="fa fa-paper-plane"></i></a>
                    </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              <br/>
              <div className="row col-lg-12 mx-auto">

                  <div className="card">
                      <div className="card-body">
                        <h5 className="card-title text-center">Secret Diary</h5>
                        <br/>
                        <p className="card-text">Allows users to register and login, and then create posts in their account, with some basic validation.</p>
                        
                        <a href="https://lk-secretdiary.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-block">View<i className="fa fa-paper-plane"></i></a>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-body">
                        <h5 className="card-title text-center">Face Detection</h5>
                        <br/>
                        <p className="card-text">Detects a face in an image (single face) along with authentication using a machine learning API</p>
                        <a href="https://smartbrain-lk.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-block">View<i className="fa fa-paper-plane"></i></a>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-body">
                        <h5 className="card-title text-center">Shopping List</h5>
                        <br/>
                        <p className="card-text">A simple todo list app, created to learn the basics of react, state and props along with redux..</p>
                        <a href="https://lk-shoppinglist.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-block">View<i className="fa fa-paper-plane"></i></a>
                      </div>
                  </div>
                </div>
                <div className="row col-lg-12 mx-auto">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title text-center">Node Mailer</h5>
                        <br/>
                        <p className="card-text">An App created to send mails, using nodemailer and gmail's SMTP.</p>
                        <a href="https://nodemailer-lk.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-block">View<i className="fa fa-paper-plane"></i></a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>  
    )
  }
}

export default Project;
