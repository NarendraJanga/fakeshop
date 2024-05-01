import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Style from './Products.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Alert } from 'react-bootstrap';

const ProductCard = ({ product }) => (
    <div key={product.id}>
        <div className={`card text-center ${Style.box}`}>
            <img src={product.image} className={`card-img-top ${Style.productImage}`} alt={product.title} style={{ height: "300px", objectFit: "fit" }} />
            <div className={`card-body ${Style.box}`} style={{ height: "200px" }}>
                <h5 className={`card-title text-dark ${Style.productTitle}`}>{product.title}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p className="card-text fw-bolder">
                            <FontAwesomeIcon icon={faDollarSign} /> Price: <span className="fw-bold text-success">${product.price}</span>
                        </p>
                    </div>
                    <NavLink to={`/products/${product.id}`} className="btn btn-primary btn-outline-dark">
                        <FontAwesomeIcon icon={faShoppingCart} /> Buy Now
                    </NavLink>
                </div>
                <div className="mt-3">
                    <p className="card-text fw-medium text-info">
                        Rating: <span className="fw-bold text-info">{product.rating.rate} <FontAwesomeIcon icon={faStar} /> </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const Filter = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again later.');
            }
        };

        fetchData();
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className={`container ${Style.card}`}>
            {error && <Alert variant="danger">{error}</Alert>}
            <Slider {...sliderSettings}>
                {products.slice(0, 15).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Slider>
        </div>
    );
};

export default Filter;
