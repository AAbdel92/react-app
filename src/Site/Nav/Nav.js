import React, {Component} from "react";
import {Menu, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import LightBox from "./LightBox/LightBox.js";

class Nav extends Component {
    render() {
        return (
            <div as="nav">
                <Segment basic>
                    <Menu stackable>                        
                        <Menu.Item>
                            <LightBox />
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/gallery">
                                Gallery
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/home">
                                Home
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Segment>                            
            </div>
        )
    }
}

export default Nav;