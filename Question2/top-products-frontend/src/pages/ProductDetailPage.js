import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProductDetails();
    }, [id]);

    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/api/companies/AMZ/categories/Laptop/products/${id}`
            );
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <h1>{product.productName}</h1>
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}</p>
            <p>Availability: {product.availability}</p>
        </div>
    );
}

export default ProductDetailPage;
