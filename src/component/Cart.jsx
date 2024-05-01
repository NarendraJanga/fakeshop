import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCart, delCart } from '../redux/action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const handleAdd = (item) => {
        dispatch(addCart(item));
    };

    const handleDel = (item) => {
        dispatch(delCart(item));
    };

    const emptyCart = () => {
        return (
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card bg-light border-0 shadow">
                            <div className="card-body text-center">
                                <NavLink to="/products" className="card-title text-dark btn btn-info">Your Cart is Empty</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const cartItems = (product) => {
        return (
            <div key={product.id} className="col-md-6">
                <div className="card mb-4 shadow">
                    <div className="row g-0">
                        <div className="col-md-4">
                            {product.image ? (
                                <img src={product.image} alt={product.title} className="img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
                            ) : product.thumbnail ? (
                                <img src={product.thumbnail} alt={product.title} className="img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
                            ) : product.photos && product.photos.length > 0 ? (
                                <img src={product.photos[0]} alt={product.title} className="img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
                            ) : (
                                <p>No image available</p>
                            )}
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-dark">{product.title}</h5>
                                <p className="card-text lead fw-bold text-dark">
                                    {product.qty} X ${product.price} = ${product.qty * product.price}
                                </p>
                                <div className="btn-group" role="group" aria-label="Quantity">
                                    <button className="btn btn-outline-dark" onClick={() => handleDel(product)}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <button className="btn btn-outline-dark" onClick={() => handleAdd(product)}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const buttons = () => {
        const totalPrice = state.reduce((total, product) => total + product.qty * product.price, 0);
        return (
            <div className="container py-3">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <NavLink to="/checkout" className="btn btn-dark w-100 mb-3">
                            Proceed to Checkout
                        </NavLink>
                        <button className="btn btn-dark w-100">
                            Total Cost: ${totalPrice.toFixed(2)}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && (
                <div className="container">
                    <div className="row">
                        {state.map((product) => cartItems(product))}
                    </div>
                </div>
            )}
            {state.length !== 0 && buttons()}
        </div>
    );
};

export default Cart;
