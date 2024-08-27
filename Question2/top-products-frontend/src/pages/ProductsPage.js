import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import FilterSortControls from '../components/FilterSortControls';

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        top: 10,
        minPrice: 0,
        maxPrice: 10000,
    });

    useEffect(() => {
        fetchProducts();
    }, [filters]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/api/companies/AMZ/categories/Laptop/products`,
                { params: filters }
            );
            setProducts(response.data); // Update state with fetched data
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div>
            <FilterSortControls filters={filters} setFilters={setFilters} />
            <ProductList products={products} /> {/* Render products here */}
        </div>
    );
}

export default ProductsPage;
