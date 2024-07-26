"use client"
import React, { useEffect, useState } from 'react';
import Product from '../componet/detailslie';

async function getProducts() {
    const res = await fetch('https://dummyjson.com/products?limit=5&select=title,price');
    const data = await res.json();
    return data.products;
}

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const productsData = await getProducts();
            setProducts(productsData);
        }
        fetchProducts();
    }, []);

    console.log({products})
    return (
        <>
            <h1>Products</h1>
            {/* Product = confine div */}
            {products.length > 0 && (
                products.map(({ id, title, price }) => (
                    <Product key={id} id={id} title={title} price={price} />
                ))
            )}
        </>
    );
}
