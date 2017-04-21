import React, {Component} from "react";
import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";
import LightBox from "./LightBox/LightBox.js";

export default class NavBis extends Component {

    constructor (props) {
        super(props);
        this.state = {
            activeItem: "home"
        };
    }

    handleItemClick = (e, {name}) => {
        console.log("coucou")
        this.setState({
            activeItem : name
        })
    }

    render() {
        return (
            <Menu stackable>
                <Menu.Item>
                    <LightBox />
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/home"
                    name="home"
                    active={this.state.activeItem === "home"}
                    onClick={this.handleItemClick}    
                >
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/gallery"
                    name="gallery"
                    active={this.state.activeItem === "gallery"}
                    onClick={this.handleItemClick}    
                >
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/help"
                    name="help"
                    active={this.state.activeItem === "help"}
                    onClick={this.handleItemClick}    
                >
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/user"
                    name="user"
                    active={this.state.activeItem === "user"}
                    onClick={this.handleItemClick}    
                >
                </Menu.Item>
            </Menu>
        )
    }
}