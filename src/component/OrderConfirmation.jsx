import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DummyOrder from './DummyOrder';

function OrderConfirmation() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {!isConfirmed ? (
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Your Order</h2>
                <DummyOrder/>  
                <button className="btn btn-primary" onClick={() => setIsConfirmed(true)}>Confirm Order</button>
              </div>
            </div>
          ) : (
            <div className="card">
              <div className="card-body">
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  <strong>Success!</strong> Your order has been successfully confirmed.
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div>
                  <p>Browse more products or continue shopping:</p>
                  <NavLink to="/" className="btn btn-primary">Continue Shopping</NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
