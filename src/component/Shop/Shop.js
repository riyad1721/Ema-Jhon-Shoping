import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                // console.log(key,setCarts[key]);
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCarts(storedCart);
        }
    }, [products])
    const handleButton = (product) => {

        const newCarts = [...carts, product];
        setCarts(newCarts);
        //save to local storage
        addToDb(product.key);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>

                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleButton={handleButton}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart carts={carts}></Cart>
            </div>

        </div>
    );
};

export default Shop;