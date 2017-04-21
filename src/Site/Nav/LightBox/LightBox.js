import React, {Component} from "react";
import {Modal, Icon, Button, Header, Input, Form} from "semantic-ui-react";
import axios from "axios";

export default class LightBox extends Component {

constructor (props) {
    super(props);
    this.state = {
        affichageLog : "Log In"
    }
} 

    login = () => {
        // var config = {
        //     header : {
        //         "Access-Control-Allow-Origin" : "http://localhost:3000"
        //     }
        // }
        console.log(document.getElementById("username").value)
        axios.post('http://localhost:8080/login?username=' + document.getElementById("username").value + '&password=' + document.getElementById("password").value)
        .then(function (response) {
            if (response.status === 200 ) {
                this.setState({
            affichageLog : "Log Out"
        })
            }
        })
        

    }

    render() {
        return (
            <div>
                <Modal trigger={<Button>{this.state.affichageLog}</Button>} closeIcon='close'>
                    <Header icon='signup' content='Bienvenue !' />
                    <Modal.Content>
                        <Form>
                            <Form.Field inline>
                                <label for="username">Pseudo</label>                                
                                <input id="username" />
                            </Form.Field>
                            <Form.Field inline>
                                <label for="username">Mot de passe</label>
                                <input id="password" />                            
                            </Form.Field>
                        </Form>                        
                    </Modal.Content>
                    <Modal.Actions>                        
                        <Button 
                            color='green'
                            onClick={this.login}
                        >
                            <Icon name='checkmark' /> Valider
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}