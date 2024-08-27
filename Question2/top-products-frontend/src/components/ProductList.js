import React from 'react';

function ProductList({ products }) {
    return (
        <div>
            {products.map((product) => (
                <div key={product.productName} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
                    <h2>{product.productName}</h2>
                    <p>Price: {product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Discount: {product.discount}</p>
                    <p>Availability: {product.availability}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
