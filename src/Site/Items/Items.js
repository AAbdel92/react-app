import React, {Component} from "react";
import {Container ,Grid, Card, Icon} from "semantic-ui-react";

import items from "./items.json";

class Items extends Component {

    render() {
        return (
            <Container as="main">
                <Grid columns="three">                   
                        {
                            items.trips.map(
                                (trip, key) => 
                                <Grid.Column mobile={16} tablet={8} computer={4} key={key}>
                                    <Card 
                                        as="article"
                                        image={trip.url}
                                        header={trip.place}
                                        description={trip.description}
                                        extra={
                                            (
                                                <a>
                                                    <Icon name="heart" />
                                                    {trip.likes} Likes
                                                </a>
                                            )
                                        }
                                    />
                                </Grid.Column>
                            )
                        }                  
                </Grid>
            </Container>
        )
    }
}

export default Items;