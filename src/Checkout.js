import React from 'react'
import { useStateValue } from "./StateProvider";
import "./Checkout.css";

function Checkout() {

    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg" alt="Advertistment Poster Here"></img>
        {
        basket?.length === 0 ? (
            <div>
                <h2>Your Shopping cart is Empty</h2>
                <p>You have no items in your cart. To buy one or add more items click "Add to cart" next to the item.</p></div>
        ) : (
            <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>
            </div>
        )}
        </div>
    );
}

export default Checkout;
