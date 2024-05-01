import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox, faInfoCircle, faEnvelope, faSearch, faUser, faSignInAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const state = useSelector((state) => state.handleCart);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search functionality here
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold fs-4" to="/" onClick={closeNavbar} style={{ fontFamily: 'cursive' }}>Janga</NavLink>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/" onClick={closeNavbar}>
                <FontAwesomeIcon icon={faHome} /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/products" onClick={closeNavbar}>
                <FontAwesomeIcon icon={faBox} /> Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/about" onClick={closeNavbar}>
                <FontAwesomeIcon icon={faInfoCircle} /> About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/contact" onClick={closeNavbar}>
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </NavLink>
            </li>
          </ul>
          <form className="d-lg-flex w-100 mb-3 mb-lg-0" onSubmit={handleSearch}>
            <div className="input-group w-75 k">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </form>
          <div className='lis'>
            <ul className="navbar-nav mb-2 mb-lg-0  ">
              <li className="nav-item">
                <NavLink className="nav-link" to="/login" onClick={closeNavbar}>
                  <FontAwesomeIcon icon={faSignInAlt} className="me-1" /> Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/signin" className="nav-link" onClick={closeNavbar}>
                  <FontAwesomeIcon icon={faUser} className="me-1" /> SignIn
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link" onClick={closeNavbar}>
                  Cart(<span className="text-light">{state.length}</span>) <FontAwesomeIcon icon={faShoppingCart} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
