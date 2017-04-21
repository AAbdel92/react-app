import React, { Component } from "react";
import Cart from "./Cart/Cart.js";
import Product from "./Product/Product.js";
import products from "./products.json";
import "./shop.css";

class Shop extends Component {

    constructor (props) {
        super(props);
        this.state = {
             cart: [],
            click: 0
        };       
    }

    componentWillMount () {
        //Requetes ajax ici       
        this.setState ({
            products : products.datas
        })
    }

    incrementClick = () => {
        let newClick = this.state.click;
        newClick++;
        this.setState({
            click: newClick
        });        
    }

    componentDidUpdate () {
        console.log(this.state.cart);
    }

    addToCart = (productName, productPrice) => {       
        this.setState((prevState) => {
            prevState.cart.push({name: productName, price: productPrice})
        });       
    }

    addPriceToCart = (productPrice) => {
         // this.state.cart.push(productPrice);
         this.setState((prevState) => {
             prevState.cart.push(productPrice);
         });
        //this.forceUpdate();
    }

    consoleProductName = (productName) => {
        console.log(productName);
    }

    render() {
        return (
            <div className="shop">
                <h1>Shop</h1>                
                <Cart click={this.state.click} add={this.state.cart} addNames={this.consoleProductName}/>
                {
                    this.state.products.map(
                        (product, cle) => <Product key={cle} price={product.price} name={product.name} add={this.addToCart} increment={this.incrementClick} console={this.consoleProductName}/>
                    )
                }
            </div>
        )
    }
}

export default Shop;