import React, { Component } from 'react';
import {Router, Route, Redirect} from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import Home from "./Home/Home.js";
import About from "./About/About.js";
import Nav from "./Nav/Nav.js";
import Header from "./Header/Header.js";

const history = createBrowserHistory();

class RouterComponent extends Component {

  componentWillMount() {
    // $.post('localhost:8080/login', function (data) {
    //   if (data) {
        this.setState({
          userConnected: false
        })
    //   }
    // });

  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Header} />
          <Route path="/" component={Nav}/>
          <Route exact path="/" component={Home} />
          {/*<Route exact path="/home" component={Home}/>*/}
          <Route exact path="/about" component={About}/>   
          {
            this.state.userConnected ? (
              <Redirect to="home" />
            ) : (
              <Redirect to="/" />
            )
          }       
        </div>
      </Router>
    );
  }
}

export default RouterComponent;
