import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Sliding from './Sliding';
import Filter from './Filter';
import Token from './Token';
import Feedback from './Feedback';

const Homeapplince = () => {
    const images = [
        "./assets/image1.jpg",
        "./assets/image2.jpg",
        "./assets/image3.jpg",
        "./assets/image4.jpg",
        "./assets/image5.jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]); // Include images.length as a dependency

    return (
        <>
            <div className='hero'>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner overflow-hidden">
                        {images.map((image, index) => (
                            <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
                                <img src={image} className="d-block w-100" style={{ height: '500px', objectFit: 'fit' }} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="card-img d-flex flex-column justify-content-center align-items-center text-center">
                    <h5 className="card-title display-3 fw-bolder mb-0" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', color: '#FF5733', fontFamily: 'Arial, sans-serif' }}>🌟 Discover the Latest Arrivals! 🌟</h5>
                    <p className="card-text display-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', color: '#4CAF50', fontFamily: 'Arial, sans-serif' }}>Stay ahead with our freshest picks!</p>
                    <NavLink to="/products" className="btn btn-primary rounded-pill" style={{ backgroundColor: '#FF5733', borderColor: '#FF5733', fontFamily: 'Arial, sans-serif' }}>
                        <FontAwesomeIcon icon={faShoppingCart} /> Shop Now
                    </NavLink>
                </div>

                {/* Use CSS animation for scrolling text */}
                <div className="marquee-container bg-info-subtle h1">
                    <p className="marquee-text text-danger-emphasis">Online shopping itself isn't subject to copyright, but elements like website design, software, branding, product images, and original content may be protected by intellectual property laws.</p>
                </div>
            </div>
            <div className='py-5 text-center fw-bolder text-dark shadow-lg'>
                <div className="container">
                    <h1 className='bg-secondary text-center mb-5'>Today Festival Sale</h1>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <img src="./assets/discount.jpg" alt="Discount" className="img-fluid mb-5" />
                        </div>
                    </div>
                    <Filter />
                </div>
                <p className="bg-gradient display-5 bg-body-tertiary fw-bolder text-center" style={{ fontSize: "30px", color: "royalblue" }}>Today's Best Sale Offers</p>
                <Token />
                <button className='btn btn-info mt-5'>
                    <FontAwesomeIcon icon={faAngleDown} /> Click below and enjoy shopping
                </button>
                <Sliding />
            </div>
            <div className="container my-5">
                <p className="text-center mb-4 bg-body-secondary" style={{fontSize:"50px", color:"skyblue", boxShadow:"2px 2px 5px black"}}>Feedback</p>
                <Feedback />
            </div>
        </>
    );
}

export default Homeapplince;
