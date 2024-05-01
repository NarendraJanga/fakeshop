import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="custom-footer ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <h4 className='bg-gradient'>Company</h4>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <h4 className='bg-gradient'>Customer Service</h4>
                        <ul className="list-unstyled">
                            <li>Help & FAQ</li>
                            <li>Returns & Exchanges</li>
                            <li>Shipping Information</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                        <h4 className='bg-gradient'>Shop</h4>
                        <ul className="list-unstyled">
                            <li>Electronics</li>
                            <li>Clothing</li>
                            <li>Home & Garden</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h4 className=" bg-gradient">Connect With Us</h4>
                        <ul className="list-unstyled">
                            <li><NavLink className="btn btn-group-vertical gap-3 btn-outline-info" to="/">Facebook</NavLink></li>
                            <li><NavLink className="btn btn-group-vertical gap-3 btn-outline-primary" to="/">Twitter</NavLink></li>
                            <li><NavLink className="btn btn-group-vertical gap-3 btn-outline-danger" to="/">Instagram</NavLink></li>
                        </ul>
                        <ul className="list-inline payment-icons">
                            <li className="list-inline-item"><i className="fab fa-cc-visa fa-lg"></i></li>
                            <li className="list-inline-item"><i className="fab fa-cc-mastercard fa-lg"></i></li>
                            <li className="list-inline-item"><i className="fab fa-cc-paypal fa-lg"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
