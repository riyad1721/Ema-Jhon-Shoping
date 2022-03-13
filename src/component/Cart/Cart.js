import React from 'react';

const Cart = (props) => {
    const { carts } = props;

    let total = 0;
    for (const product of carts) {
        total = total + product.price;
    }
    const shipping = 15;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;


    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {props.carts.length}</h5>
            <br />
            <p>Item : {props.carts.length}</p>
            <p> Shipping Cost : {shipping}</p>
            <p> Tax : {tax} (+2%)</p>
            <p>Gand Total Price : ${total}</p>
        </div>
    );
};

export default Cart;