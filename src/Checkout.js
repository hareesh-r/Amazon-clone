import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {

    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/HSS/Home_1500x300-Final1.jpg" alt="advertisement image here"></img>

            <div className="checkout__productsContainer">
                <h3>Hello, Hareesh</h3>
                <h2 className="checkout__title">Your Shopping Basket</h2>
                {basket.map(item => {
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                })}
            </div>
        </div>
    );
}

export default Checkout;
