import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faUser, faAddressCard, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons

const Checkout = ({ cartItems, total }) => {
    const [shippingInfo, setShippingInfo] = useState({
        fullName: '',
        address: '',
        email: '',
        phoneNumber: ''
    });

    const [formValid, setFormValid] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({ ...shippingInfo, [name]: value });

        if (
            shippingInfo.fullName !== '' &&
            shippingInfo.address !== '' &&
            shippingInfo.email !== '' &&
            shippingInfo.phoneNumber !== ''
        ) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    };

    const handleCheckout = (e) => {
        if (!formValid) {
            e.preventDefault();
            setShowWarning(true);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
        >
            <div className="container mt-5">
                <h2 className="mb-4">Checkout</h2>
                {showWarning && (
                    <div className="alert alert-warning d-flex align-items-center" role="alert">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
                        Please fill in all fields.
                    </div>
                )}
                <form onSubmit={handleCheckout}>
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">
                            <FontAwesomeIcon icon={faUser} className="me-2" />
                            Full Name:
                        </label>
                        <input type="text" id="fullName" name="fullName" value={shippingInfo.fullName} onChange={handleInputChange} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                            <FontAwesomeIcon icon={faAddressCard} className="me-2" />
                            Address:
                        </label>
                        <input type="text" id="address" name="address" value={shippingInfo.address} onChange={handleInputChange} className={`form-control ${showWarning && !shippingInfo.address && 'is-invalid'}`} required />
                        {showWarning && !shippingInfo.address && (
                            <div className="invalid-feedback">Please enter your address.</div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                            Email:
                        </label>
                        <input type="email" id="email" name="email" value={shippingInfo.email} onChange={handleInputChange} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">
                            <FontAwesomeIcon icon={faPhone} className="me-2" />
                            Phone Number:
                        </label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" value={shippingInfo.phoneNumber} onChange={handleInputChange} className="form-control" required />
                    </div>
                    <NavLink to={formValid ? "/payment" : "/checkout"} className="btn btn-primary me-3" onClick={handleCheckout}>Proceed to Payment</NavLink>
                </form>
            </div>
        </motion.div>
    );
};

export default Checkout;
