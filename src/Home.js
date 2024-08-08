// src/pages/Home.js

import React from 'react';
import Header from './Home/Header';
import Banner from './Home/Banner';
import TrendingProducts from './Home/TrendingProducts';
import Categories from './Home/Categories';
import Footer from './Home/Footer';

//import FeaturedProducts from './FeaturedProducts';
//import CategoryList from './CategoryList';
//import TrendingEyeframes from './TrendingEyeframes';
//import AboutUs from './AboutUs';
//import NewsletterSignup from './NewsletterSignUp';
//import Footer from './Footer'
import './Home.css'; // Import your CSS for styling

const Home = () => {
  return (
    <div className="home">
    <Header />
    <Banner />
    <TrendingProducts />
    <Categories />   
    <Footer /> 
   </div> 
  );
};

export default Home;
