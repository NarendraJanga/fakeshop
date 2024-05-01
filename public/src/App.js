import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./component/Navbar"; // Importing Navbar component
import Products from "./component/Products"; // Importing Products component
import Home from "./component/Home"; // Importing Home component
import Product from './component/Product'; // Importing Product component
import Cart from './component/Cart'; // Importing Cart component
import About from './component/About'; // Importing About component
import Contact from './component/Contact'; // Importing Contact component
import Login from './component/Login'; // Importing Login component
import Checkout from './component/Checkout'; // Importing Checkout component
import SignIn from './component/SignIn';
import Payment from './component/Payment';
import OrderConfirmation from './component/OrderConfirmation';
import Aproducts from './component/Aproducts';
import Bproducts from './component/Bproducts';
import Bproduct from './component/Bproduct';
import Aproduct from './component/Aproduct';
function App() { // App component definition
  return (
    <BrowserRouter>
      <Navbar /> {/* Rendering Navbar component */}
      <Routes>
        {/* Setting up routes for different components */}
        <Route exact path="/" element={<Home />} /> {/* Home route */}
        <Route path="/products" element={<Products />} /> {/* Products route */}
        <Route path="/aproducts" element={<Aproducts />} /> {/* Products route */}
        <Route path="/bproducts" element={<Bproducts />} /> {/* Products route */}
        <Route path="/products/:id" element={<Product />} /> {/* Product detail route */}
        <Route path="/aproducts/:id" element={<Aproduct />} /> {/* Product detail route */}
        <Route path="/bproducts/:id" element={<Bproduct />} /> {/* Product detail route */}
        <Route path="/cart" element={<Cart />} /> {/* Cart route */}
        <Route path="/cart/:id" element={<Cart />} /> {/* Cart route with id */}
        <Route path="/about" element={<About />} /> {/* About route */}
        <Route path="/contact" element={<Contact />} /> {/* Contact route */}
        <Route path="/login" element={<Login />} /> {/* Login route */}
        <Route path="/signin" element={<SignIn />} /> {/* Login route */}
        <Route path="/checkout" element={<Checkout />} /> {/* Login route */}
        <Route path="/payment" element={<Payment />} /> {/* Login route */}
        <Route path="/order" element={<OrderConfirmation />} /> {/* Login route */}


      </Routes>
    </BrowserRouter>
  );
}

export default App; // Exporting App component

