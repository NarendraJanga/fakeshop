import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DummyCart from './DummyCart';

const Payment = ({ cartItems, total }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [creditCardInfo, setCreditCardInfo] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
  const [paypalInfo, setPaypalInfo] = useState({ email: '' });
  const [cashOnDeliveryInfo, setCashOnDeliveryInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({ phoneNumber: '' });

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCreditCardInfoChange = (e) => {
    const { name, value } = e.target;
    setCreditCardInfo({ ...creditCardInfo, [name]: value });
  };

  const handlePaypalInfoChange = (e) => {
    const { name, value } = e.target;
    setPaypalInfo({ ...paypalInfo, [name]: value });
  };

  const handleCashOnDeliveryInfoChange = (e) => {
    const { name, value } = e.target;
    setCashOnDeliveryInfo({ ...cashOnDeliveryInfo, [name]: value });
  };

  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handlePayment = () => {
    // Logic to handle payment based on the selected payment method
    // Example: Redirect to order confirmation page after successful payment
    // Example: history.push('/confirmation');
  };

  return (
    <div className="container mt-5">
      <h2>Payment</h2>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Your Cart</h5>
              <DummyCart/>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <p>Total: ${total}</p>
              {/* Payment method options */}
              <div className="mb-3">
                <select id="paymentMethod" name="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange} className="form-select form-select-sm w-50 gap-5">
                  <option value="">Select Payment Method</option>
                  <option value="creditCard">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="cashOnDelivery">Cash on Delivery</option>
                  <option value="phonePe">PhonePe</option>
                  <option value="googlePay">Google Pay</option>
                  <option value="paytm">Paytm</option>
                </select>
              </div>
              {/* Additional fields based on payment method */}
              {paymentMethod === 'creditCard' && (
                <div>
                  <input type="text" name="cardNumber" placeholder="Card Number" value={creditCardInfo.cardNumber} onChange={handleCreditCardInfoChange} className="form-control mb-2" />
                  <input type="text" name="expiryDate" placeholder="Expiry Date" value={creditCardInfo.expiryDate} onChange={handleCreditCardInfoChange} className="form-control mb-2" />
                  <input type="text" name="cvv" placeholder="CVV" value={creditCardInfo.cvv} onChange={handleCreditCardInfoChange} className="form-control mb-2" />
                </div>
              )}
              {paymentMethod === 'paypal' && (
                <div>
                  <input type="email" name="email" placeholder="PayPal Email" value={paypalInfo.email} onChange={handlePaypalInfoChange} className="form-control mb-2" />
                </div>
              )}
              {paymentMethod === 'cashOnDelivery' && (
                <div>
                  <input type="text" name="address" placeholder="Delivery Address" value={cashOnDeliveryInfo.address} onChange={handleCashOnDeliveryInfoChange} className="form-control mb-2" />
                </div>
              )}
              {['phonePe', 'googlePay', 'paytm'].includes(paymentMethod) && (
                <div>
                  <input type="text" name="phoneNumber" placeholder="Phone Number" value={paymentInfo.phoneNumber} onChange={handlePaymentInfoChange} className="form-control mb-2" />
                </div>
              )}
              {/* Confirm Payment button */}
              <NavLink to={paymentMethod ? "/order" : ""} className={`btn btn-primary mt-3`} onClick={paymentMethod ? handlePayment : undefined} disabled={!paymentMethod}>Confirm Payment</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
