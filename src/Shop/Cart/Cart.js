import React, { Component } from "react";

class Cart extends Component {

    calculerTotal = () => {
        let total = 0;
        this.props.add.forEach(function(element) {
            total += element.price;
        }, this);
        return total;
    }

    render() {
        return (
            <div className="cart">
                <h1>Panier</h1>
                <ul>
                    {
                        this.props.add.map(
                            (product, cle) => <li key={cle}> {product.name} : {product.price}€ TTC</li>
                        )
                    }
                </ul>
                <p>Total : {this.calculerTotal()}</p>
            </div>
        )
    }
}

export default Cart;