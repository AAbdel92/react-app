import React, {Component} from "react";
import {Container, Image} from "semantic-ui-react";
import image from "../../../public/help.jpg";

export default class Help extends Component {

    render() {
        return (
            <Container as="main">
                <Image 
                    centered 
                    src={image}
                    fluid
                />
            </Container>
        )
    }

}