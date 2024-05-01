import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingCart, faShoppingBag, faGem } from '@fortawesome/free-solid-svg-icons';

const Aproduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
    };
    
    useEffect(() => {
        const getProduct = () => {
            setLoading(true);
            axios.get(`https://dummyjson.com/products/${id}`)
                .then(response => {
                    setProduct(response.data);
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                })
                .finally(() => {
                    setLoading(false);
                });
        };
        getProduct();
    }, [id]);

    const Loading = () => (
        <>
            <div className="col-md-6">
                <Skeleton height={400} />
            </div>
            <div className="col-md-6">
                <div style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </div>
        </>
    );

    const ShowProduct = () => (
        <>
            <div className="col-md-6">
                <div className="position-relative overflow-hidden product-image">
                    <img src={product.thumbnail} alt={product.title} className="img-fluid" />
                </div>
            </div>
            <div className="col-md-6 bg-light p-5">
                <h4 className="text-uppercase text-primary"><FontAwesomeIcon icon={faShoppingBag} className="me-2" />{product.category}</h4>
                <h1 className="display-5 text-dark"><FontAwesomeIcon icon={faGem} className="me-2" />{product.title}</h1>
                <p className="lead fw-bold text-secondary">Rating: {product.rating && product.rating.rate} <FontAwesomeIcon icon={faStar} /></p>
                <h3 className="display-6 fw-bold my-4 text-primary">${product.price}</h3>
                <p className="lead text-dark">{product.description}</p>
                <NavLink className="btn btn-outline-dark px-4 py-2 me-2" onClick={() => addProduct(product)}><FontAwesomeIcon icon={faShoppingCart} className="me-2" />Add to Cart</NavLink>
                <NavLink to="/cart" className="btn btn-primary px-3 py-2"><FontAwesomeIcon icon={faShoppingCart} className="me-2" />Go to Cart</NavLink>
            </div>
        </>
    );

    return (
        <div className="container-fluid py-5 bg-light">
            <div className="container">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    );
};

export default Aproduct;
