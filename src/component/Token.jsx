import React from 'react';

const Token = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./assets/qualitty.jpg" className="card-img-top" alt="Quality Products" style={{ height: '300px', objectFit: 'fit  ' }} />
                        <div className="card-body">
                            <h5 className="card-title">Quality Products</h5>
                            <p className="card-text">
                                We offer only the finest quality products to ensure customer satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./assets/bestprice.jpg" className="card-img-top" alt="Best Prices" style={{ height: '300px', objectFit: 'fit' }} />
                        <div className="card-body">
                            <h5 className="card-title">Best Prices</h5>
                            <p className="card-text">
                                Our prices are competitive and affordable, giving you great value for your money.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./assets/delivary.jpg" className="card-img-top" alt="Fast Shipping" style={{ height: '300px', objectFit: 'fit' }} />
                        <div className="card-body">
                            <h5 className="card-title">Fast Shipping</h5>
                            <p className="card-text">
                                Enjoy fast and reliable shipping options to get your products to you as quickly as possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Token;
