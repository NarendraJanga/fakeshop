import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Initial animation properties
            animate={{ opacity: 1, y: 0 }} // Animation properties
            transition={{ duration: 0.5 }} // Animation duration
            className="container mb-5"
        >
            <div className="row">
                <div className="col-12 text-center py-4 my-4">
                    <h1>Contact Us</h1>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 d-flex justify-content-center">
                    <img src="./assets/contact.jpg" alt="Contact Us" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleForm" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="exampleForm" placeholder="FristName SecondName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"  placeholder="typing.................."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
    