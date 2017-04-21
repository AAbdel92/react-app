import React, {Component} from "react";
import {Router, Route} from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import "semantic-ui-css/semantic.min.css";
import Items from "./Items/Items.js";
import Head from "./Head/Head.js";
import Nav from "./Nav/Nav.js";
import About from "./About/About.js";
import NavBis from "./Nav/NavBis.js";
import Help from "./Help/Help.js";
import axios from "axios";
import User from "./User/User.js"

const history = createBrowserHistory();

class Site extends Component {

    componentDidMount() {      
        // axios.get('http://localhost:8080/api/utilisateur/listeUtilisateur', crossDomain: true)
        //     .then(function (data) {
        //         console.log("///------------------------------------------///");
        //         console.log(data);
        //         console.log("///------------------------------------------///");
        //     })
        //     .catch(function (err) {
        //         console.log("///------------------------------------------///");
        //         console.log(err);
        //         console.log("///------------------------------------------///");
        //     });
        axios({
            method: "GET",
            url: 'http://localhost:8080/api/utilisateur/listeUtilisateur',
            withCredentials: true,
            crossDomain: true            
        }).then(function (data) {
            console.log(data)
        }).catch(function(error) {
            console.log(error)
        });
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Route path="/" component={Head} />
                    <Route path="/" component={NavBis} />
                    <Route path="/home" component={About} />
                    <Route path="/gallery" component={Items} />
                    <Route path="/help" component={Help} />
                    <Route path="/user" component={User} />
                </div>
            </Router>
        )
    }
}

export default Site;