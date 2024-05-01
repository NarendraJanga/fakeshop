import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Style from './Products.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Sliding = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); // Initialize with all products
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setProducts(response.data.products);
                // Extracting unique categories from products
                const uniqueCategories = ['All', ...Array.from(new Set(response.data.products.map(product => product.category)))];
                setCategories(uniqueCategories);
                // Initially show all products
                setFilteredProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const filterProductsByCategory = (category) => {
        if (category === 'All') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className={`container ${Style.card}`}>
            <div className="btn-group mb-3" role="group" aria-label="Basic example">
                {categories.map((category, index) => (
                    <button key={index} type="button" className="btn btn-secondary" onClick={() => filterProductsByCategory(category)}>{category}</button>
                ))}
            </div>
            <div className={`row row-cols-1 row-cols-md-3 flex-md-row-reverse ${Style.box}`}>
                {filteredProducts.map(product => (
                    <div key={product.id} className={`col-md-4 mb-4 ${Style.b}`}>
                        <div className={`card text-center ${Style.box}`}>
                            <img src={product.thumbnail} className="card-img-top" alt={product.title} style={{ height: "300px", objectFit: 'fit' }} />
                            <div className={`card-body ${Style.box}`}>
                                <h5 className="card-title text-dark">{product.title}</h5>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className="card-text fw-bolder">
                                            <FontAwesomeIcon icon={faDollarSign} /> Price: <span className="fw-bold text-success">${product.price}</span>
                                        </p>
                                    </div>
                                    <NavLink to={`/aproducts/${product.id}`} className="btn btn-primary btn-outline-dark">
                                        <FontAwesomeIcon icon={faShoppingCart} /> Buy Now
                                    </NavLink>
                                </div>
                                <div className="mt-3">
                                    <p className="card-text fw-medium text-info">
                                        Rating: <span className="fw-bold text-info">{product.rating} <FontAwesomeIcon icon={faStar} /> </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sliding;
