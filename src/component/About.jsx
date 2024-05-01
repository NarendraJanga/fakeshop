import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'; 

const About = () => {
    return (
        <div className="bg-light py-5">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <motion.h1 className="text-primary fw-bold mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>About Us</motion.h1>
                        <motion.p className="lead mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
                            Recent mechanical engineering graduate with a strong interest in web
                            development. Proficient in HTML, CSS, and JavaScript. Seeking an
                            entry-level position in web development to further develop my technical
                            abilities and contribute to innovative solutions while growing
                            professionally
                        </motion.p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-4">Contact Us</NavLink>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <motion.img src="./assets/About.avif" alt="About Us" className="img-fluid" style={{ maxWidth: '400px' }} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
