import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const Bproducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product`)
            .then((res) => {
                setProducts(res.data);
                console.log(res.data)
            });
    }, []);

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 flex-md-row-reverse">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card text-center">
                            <img src={product.preview} className="d-block w-100" style={{ height: "400px", objectFit: 'fit' }} />
                            <div className="card-body">
                                <h5 className="card-title text-dark">{product.name}</h5>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className="card-text fw-bolder">
                                            <FontAwesomeIcon icon={faDollarSign} /> Price: <span className="fw-bold text-success">${product.price}</span>
                                        </p>
                                    </div>
                                    <NavLink to={`/bproducts/${product.id}`} className="btn btn-primary btn-outline-dark">
                                        <FontAwesomeIcon icon={faShoppingCart} /> Buy Now
                                    </NavLink>
                                </div>
                                <div className="mt-3">
                                    <p className="card-text fw-medium text-info">
                                        Rating:4.1 <span className="fw-bold text-info">{product.rating} <FontAwesomeIcon icon={faStar} /> </span>
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

export default Bproducts;
