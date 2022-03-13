import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const handleButton = (product) => {

        const newCarts = [...carts, product];
        setCarts(newCarts);

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