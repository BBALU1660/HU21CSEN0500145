const axios = require('axios');

// Replace this with your actual access token
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0NzQzMjQ4LCJpYXQiOjE3MjQ3NDI5NDgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjZhODI1ZTNmLWU1NGItNDRjNS1hYzdkLTY3OWRhZmZiMGQ3ZCIsInN1YiI6InNhbGFwYXRpM0BnaXRhbS5pbiJ9LCJjb21wYW55TmFtZSI6IkdpdGFtIiwiY2xpZW50SUQiOiI2YTgyNWUzZi1lNTRiLTQ0YzUtYWM3ZC02NzlkYWZmYjBkN2QiLCJjbGllbnRTZWNyZXQiOiJrQmtHY1dxdklqdmp4clJNIiwib3duZXJOYW1lIjoiQWxhcGF0aSBTYWkgTmlraGlsIEJhbGFqaSIsIm93bmVyRW1haWwiOiJzYWxhcGF0aTNAZ2l0YW0uaW4iLCJyb2xsTm8iOiJIVTIxQ1NFTjA1MDAxNDUifQ.XJaGCHXX9XAYyj7kV9WLHRXFA5Wq61JpjbLutmi0o10";
const BASE_URL = "http://20.244.56.144/test/companies";

// Function to get top N products in a category
const getProducts = async (req, res) => {
    const { companyname, categoryname } = req.params;
    const { top = 10, minPrice = 0, maxPrice = 100000 } = req.query;

    try {
        const response = await axios.get(
            `${BASE_URL}/${companyname}/categories/${categoryname}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
            {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            }
        );

        const products = response.data.map(product => ({
            productName: product.productName,
            price: product.price,
            rating: product.rating,
            discount: product.discount,
            availability: product.availability,
        }));

        res.status(200).json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

// Function to get details of a specific product
const getProductDetails = async (req, res) => {
    const { companyname, categoryname, productid } = req.params;

    try {
        const response = await axios.get(
            `${BASE_URL}/${companyname}/categories/${categoryname}/products/${productid}`,
            {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            }
        );

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Failed to fetch product details' });
    }
};

module.exports = {
    getProducts,
    getProductDetails,
};
