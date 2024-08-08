import React from 'react';
import './AboutUs.css';
import Header from '../Home/Header';

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="aboutus-container">
        <div className="aboutus-banner">
          <h1>About Us</h1>
        </div>
        <div className="aboutus-content">
          <h2>Mission</h2>
          <p>
            FocusFrame was founded with a simple mission: to provide premium sunglasses that combine style and utility. 
            Our designs are crafted to offer the perfect blend of elegance and practicality, ensuring that you look great 
            while protecting your eyes.
          </p>
          <h2>Values</h2>
          <ul>
            <li><strong>Quality:</strong> We use only the finest materials to create our sunglasses.</li>
            <li><strong>Innovation:</strong> Our designs are cutting-edge and trendsetting.</li>
            <li><strong>Customer Satisfaction:</strong> We strive to exceed your expectations with every purchase.</li>
          </ul>
          <h2>Our Team</h2>
          <p>
            Our team is composed of experienced designers, engineers, and customer service professionals who are passionate 
            about eyewear. We work tirelessly to bring you products that you will love and cherish.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
