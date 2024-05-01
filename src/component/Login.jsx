import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';

const Login = () => {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./assets/lock2.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./assets/lock1.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <Card>
                        <Card.Header className="bg-primary text-white">Login</Card.Header>
                        <Card.Body>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <Button variant="primary" type="submit">Submit</Button>
                            </form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Login;
