import React from 'react';

const Cart = (props) => {
    const { carts } = props;

    let totalQuantity = 0;
    let total = 0;
    for (const product of carts) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = 15;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;


    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {totalQuantity}</h5>
            <br />
            <p>Item : {totalQuantity}</p>
            <p> Shipping Cost : {shipping}</p>
            <p> Tax : {tax} (+2%)</p>
            <p>Gand Total Price : ${grandTotal}</p>
        </div>
    );
};

export default Cart;