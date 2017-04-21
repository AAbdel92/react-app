import React, {Component} from "react";
import {Image, Segment, Header, Divider} from "semantic-ui-react";
import imageFond from "../../../public/headerPic.jpg";

class Head extends Component {
    render() {
        return (
            <div as="header">
                <Image src={imageFond}/>
                <Segment basic>
                    <Header 
                    as="h2"
                    color="grey">
                    Mon Blog de voyage
                    </Header>                     
                </Segment>                
            </div>

        )
    }
}


export default Head;