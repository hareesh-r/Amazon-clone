import React from 'react'
import { useStateValue } from "./StateProvider";
import "./Checkout.css";

function Checkout() {

    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/HSS/Home_1500x300-Final1.jpg"></img>
        {
        basket?.length === 0 ? (
            <div className="checkout__productsContainer">
                <h2>Your Shopping cart is Empty</h2>
                <p>You have no items in your cart. To buy one or add more items click "Add to cart" next to the item.</p></div>
        ) : (
            <div className="checkout__productsContainer">
                <h2 className="checkout__title">Your Shopping Basket</h2>

                {basket.map(item => {
                    <CheckoutProduct
                    item={item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                    />
                })}

            </div>
        )}
        </div>
    );
}

export default Checkout;
