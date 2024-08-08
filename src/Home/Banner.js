import React from 'react';
import './Banner.css';
import bannerImage from '../assets/blue.jpeg'; // Adjust the path based on your folder structure
import { useNavigate } from 'react-router-dom';



const Banner = () => {
  const navigate=useNavigate();
  const handlebrowse=()=>{
   navigate("/Browse Inventory");
  }
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-image">
          <img src={bannerImage} alt="Banner" />
        </div>
        <div className="banner-text">
          <h1>ClarityX & StyleGazz</h1>
          <p>“Discover top-tier sunglasses that blend fashion and function seamlessly.”</p>
          <div className="banner-buttons">
            <button className="browse-button" onClick={handlebrowse}>Browse Inventory</button>
            <button className="more-button">Tap More <span>&#10148;</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
