import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Style from './Products.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Bproducts from './Bproducts';
import Aproducts from './Aproducts';
import { NavLink } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={`container ${Style.card}`}>
            <Aproducts />
            <div className={`row row-cols-1 row-cols-md-3 flex-md-row-reverse ${Style.box}`}>
                {/* Use map to generate the array of product elements */}
                {products.map(product => (
                    <div key={product.id} className={`col-md-4 mb-4 ${Style.b}`}>
                        <div className={`card text-center ${Style.box}`}>
                            <img src={product.image} className={`card-img-top ${Style.productImage}`} alt={product.title} height="300px" />
                            <div className={`card-body ${Style.box}`}>
                                <h5 className={`card-title text-dark ${Style.productTitle}`}>{product.title}</h5>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className="card-text fw-bolder">
                                            <FontAwesomeIcon icon={faDollarSign} /> Price: <span className="fw-bold text-success">${product.price}</span>
                                        </p>
                                    </div>
                                    <NavLink to={`/products/${product.id}`} className="btn btn-primary btn-outline-dark">
                                        <FontAwesomeIcon icon={faShoppingCart} /> Buy Now
                                    </NavLink>
                                </div>
                                <div className="mt-3">
                                    <p className="card-text fw-medium text-info">
                                        Rating: <span className="fw-bold text-info">{product.rating.rate} <FontAwesomeIcon icon={faStar} /> </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Bproducts />
        </div>
    );
};

export default Products;
