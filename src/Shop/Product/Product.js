import React, { Component } from "react";

class Product extends Component {

    cliquer = () => {
        this.transferAdd();
        this.consoleName();
    }

    transferAdd = () => {
        this.props.add(this.props.name, this.props.price * 1.2);
    }
    transfertPrice = () => {
        this.props.add(this.props.price * 1.2);
    }

    consoleName = () => {
        this.props.console(this.props.name);
    }

    render() {
        return (
            <div className="product">
                <p>{this.props.name} : {this.props.price * 1.2} € TTC</p>
                <button onClick={this.cliquer}>Ajouter au panier</button>
            </div>
        )
    }
}

export default Product;