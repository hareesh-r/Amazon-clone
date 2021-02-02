import React from 'react'
import "./Product.css";
function Product({ id, title, image, price, rating }) {
    return (
        <div className="products">
            <p>{title}</p>
            <p className="product__price">
                <span>₹</span>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating).fill().map((i) => (<p>⭐</p>))
                }
            </div>
            <img src="" alt={title+" image"} />
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
