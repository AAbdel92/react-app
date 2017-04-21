import React, { Component } from 'react';


class Test extends Component {

   
constructor (props) {
    super(props);  
    this.state = {
        greeting: "Hello",
        date : new Date()
    };    
}

tick = () => {    
    this.setState ({        
       date : new Date()
    });
}


    render () {  

        window.setInterval(this.tick, 1000);
        return (
            <div className="test">
               {this.state.greeting}, c'est bien {this.props.osef} {this.props.blabla}
                <div>
                    {this.state.date.toLocaleTimeString()}
                </div>
            </div>
        );
    }
}

export default Test;