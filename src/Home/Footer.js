// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="py-5 mt-3  bg-amber-50 flex flex-wrap justify-center items-center gap-2 md:gap-10  absolute right-0 left-0 ">
      <p>Eyesome made with 🤎 by Gobhika </p>
      <p className="flex gap-3">
        <a href="https://github.com/SandhyaR1007">
          
        </a>
        <a href="https://www.linkedin.com/in/sandhya-rajwanshi-a75b331b4/">
          {" "}
         
        </a>
        <a href="https://www.instagram.com/">
          
        </a>
      </p>
    </div>
  );
};

export default Footer;
