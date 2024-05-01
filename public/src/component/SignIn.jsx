import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Button, Form } from 'react-bootstrap';

const SignIn = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        rememberMe: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <div className="container mt-5">
            <div className="card text-dark">
                <div className="card-body">
                    <h5 className="card-title">Register</h5>
                    <Button variant="primary" className="w-100 mb-3">
                        <FontAwesomeIcon icon={faGoogle} className="me-2" /> Sign up With Google
                    </Button>
                    <Button variant="primary" className="w-100 mb-3">
                        <FontAwesomeIcon icon={faFacebook} className="me-2" /> Sign up With Facebook
                    </Button>
                    <Button variant="primary" className="w-100 mb-3">
                        <FontAwesomeIcon icon={faTwitter} className="me-2" /> Sign up With Twitter
                    </Button>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" name="username" value={formData.username} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" placeholder="Enter phone number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mt-3">Register</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
