// Import necessary modules from React and other libraries
import React, { useEffect, useState } from 'react'; // Import React
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch hooks from react-redux
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import { addCart } from '../redux/action'; // Import action creators for adding and deleting items from cart
// Define Cart component
const DummyOrder = () => {
    // Access cart state from Redux store
    const state = useSelector((state) => state.handleCart);
    // Get dispatch function from useDispatch hook
    const dispatch = useDispatch();

    // Function to dispatch action to add item to cart
    const handleAdd = (item) => {
        dispatch(addCart(item));
    };

    const [time, setTime] = useState();
    useEffect(() => {
        const timer=setInterval((e)=>{
            const tdate=new Date()
            const actual=tdate.toLocaleDateString()
            const modify=actual+5;
            setTime(actual)
        },1000)
    }, [])
    
    // Function to render individual cart items
    const cartItems = (product) => {
        return (
            // JSX for rendering individual cart item
            <div key={product.id} className="col-md-6 mb-3 w-100">
                <div className="card shadow">
                    <div className="row g-0">
                        <div className="col-md-4 w-100">
                            {product.image ? (
                                <img src={product.image} alt={product.title} className="img-fluid w-100" style={{ height: '500px', objectFit: 'fit' }} />
                            ) : product.thumbnail ? (
                                <img src={product.thumbnail} alt={product.title} className="img-fluid w-100" style={{ height: '500px', objectFit: 'fit' }} />
                            ) : product.photos && product.photos.length > 0 ? (
                                <img src={product.photos[0]} alt={product.title} className="img-fluid w-100" style={{ height: '500px', objectFit: 'fit' }} />
                            ) : (
                                <p className="m-0 p-2">No image available</p>
                            )}
                        </div>


                        <div className="col-md-8">
                            <div className="card-body">
                                <h1>Date:{time}</h1>
                                <h5 className="card-title text-dark">{product.title}</h5>
                                <p className="card-text lead fw-bold text-dark">
                                   ${product.qty * product.price}
                                </p>
                                <h1 className="text-body-tertiary" style={{width: "350px"}}>Your order estimated with in 5days {time}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Function to render checkout and total cost buttons
    const buttons = () => {
        // Calculate total price
        const totalPrice = state.reduce((total, product) => total + product.qty * product.price, 0);
        // JSX for rendering checkout and total cost buttons
        return (
            <div className="container py-3">
                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <button className="btn btn-dark w-100">
                            Total Cost: ${totalPrice.toFixed(2)}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    // JSX for rendering Cart component
    return (
        <div>
            {state.length === 0 && <p className="text-center">Your cart is empty.</p>} {/* Render empty cart message if cart is empty */}
            {state.length !== 0 && (
                <div className="container">
                    <div className="row">
                        {state.map((product) => cartItems(product))} {/* Map through cart items and render each item */}
                    </div>
                </div>
            )}
            {state.length !== 0 && buttons()} {/* Render checkout and total cost buttons if cart is not empty */}
        </div>
    );
};

// Export Cart component
export default DummyOrder;
