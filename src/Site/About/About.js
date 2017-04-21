import React, {Component} from "react";
import {Container, Image, Button} from "semantic-ui-react";
import axios from "axios";

export default class About extends Component {

    test = () => {

        // axios.get("http://localhost:8080/api/utilisateur/listeUtilisateur")
        // .then(function(data)  {
        //     console.log(data);
        // })
        // .catch(function(err) {
        //     console.log(err);
        // })
        // axios({
        //     method: "GET",
        //     url: 'http://localhost:8080/api/utilisateur/listeUtilisateur',
        //     withCredentials: true,
        //     crossDomain: true            
        // }).then(function (data) {
        //     console.log(data)
        // }).catch(function(error) {
        //     console.log(error)
        // });
        
        // axios.get('http://localhost:8080/api/utilisateur/listeUtilisateur',{withCredentials : true})
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
        fetch('http://localhost:8080/api/utilisateur/listeUtilisateur', {withCredentials : true, credentials : "include"})
        .then(function (data) {
            console.log(data)
        })
        .catch(function (error) {
            console.log(error)
        })
    }
    render() {
        return (
            <Container as="main">
                <Button onClick={this.test}>Test</Button>
                <Image 
                    src="http://www.roadcalls.fr/wp-content/uploads/2012/11/voyageur-solitaire.jpg" 
                    floated="right"
                    size="small"
                    shape="circular"
                />
                <p>
                    Pitchfork post-ironic paleo semiotics. 
                    Disrupt vaporware tote bag, hoodie food truck kitsch pitchfork tattooed cold-pressed. 
                    Distillery polaroid green juice, venmo truffaut squid austin PBR&B viral fam banh mi chia jean shorts. 
                    Lumbersexual sartorial meggings, church-key PBR&B +1 hammock affogato scenester drinking vinegar. 
                    Kitsch celiac authentic vape. Sartorial cray ugh messenger bag sustainable. 
                    You probably haven't heard of them forage raclette fam, snackwave godard pug hoodie tbh literally.
                    Artisan pour-over meggings hell of craft beer VHS. Shabby chic messenger bag semiotics occupy, 
                    vape vaporware drinking vinegar edison bulb ramps YOLO whatever lomo squid locavore. 
                </p>
                <Image 
                    src="http://www.roadcalls.fr/wp-content/uploads/2012/11/voyageur-solitaire.jpg"
                    floated="left"
                    size="small"
                />
                <p>VHS sustainable kinfolk PBR&B. 
                    Man braid tattooed iceland letterpress, unicorn cold-pressed brooklyn tacos. Irony bespoke pabst prism enamel pin, 
                    flexitarian four loko YOLO. Tacos humblebrag jianbing air plant echo park, artisan master cleanse kale chips bushwick 
                    affogato. Asymmetrical meggings jean shorts affogato +1 semiotics art party shabby chic raw denim, put a bird on it 
                    copper mug swag hexagon.Butcher fixie post-ironic flannel. Fingerstache brooklyn etsy, ugh tbh tumblr succulents 
                    pinterest sriracha cray hexagon portland. Ugh kale chips cornhole fingerstache cliche, mumblecore twee vice iPhone
                     yuccie man braid. Mixtape letterpress hell of pinterest, aesthetic synth chartreuse fashion axe neutra retro hot chicken. 
                     Small batch asymmetrical locavore church-key mumblecore gochujang listicle, man bun kale chips shabby chic pabst single-origin coffee. 
                     Echo park master cleanse blog 3 wolf moon, put a bird on it retro street art. Af live-edge meggings, godard fashion
                      axe messenger bag tote bag yr leggings pinterest cliche venmo pitchfork.
                </p>
            </Container>
        )
    }
}