import React from 'react'
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch(
            {
                type:'REMOVE_FROM_BASKET',
                id:id,
            }
        )
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt={title+"image here.."}></img>
            <div classname="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <span>₹</span>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((i) => (<p>⭐</p>))
                    }
                </div>
                <button onClick={removeFromBasket} >Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
