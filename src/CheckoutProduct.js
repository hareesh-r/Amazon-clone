import React from 'react'
import {useStateValue} from "./StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch(
            {
                type:'REMOVE_FROM_BASKET',
                id: id,
            }
        );
    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt={title+"image here.."}></img>
            <div className="checkoutProduct__info">
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
                <button className="checkoutProduct__info__button" onClick={removeFromBasket} >Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
