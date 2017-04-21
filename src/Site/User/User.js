import React, {Component} from "react";
import axios from "axios";
import {Card} from "semantic-ui-react";

export default class User extends Component {

    componentWillMount() {
        this.state = {users : []}
        const componentInstance = this;
        axios.get("/utilisateurs")
        .then( (response) => {
            componentInstance.setState({
                users: response.data
            })
        })
        .catch( (error) => {
            console.log(error)
        });
    }
    

    render() {
        return(
            <div as="main">
                {
                    this.state.users.map(
                    (user) => <Card 
                                        image="https://d13yacurqjgara.cloudfront.net/users/791595/screenshots/2346542/user-police_1x.png"
                                        key={user.id}
                                        header={user.username}
                                        description={user.roles[0]}
                                    />
                    )
                }
            </div>
        )
    };
}