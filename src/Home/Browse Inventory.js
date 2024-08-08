import React from 'react';
import './Browser Inventory.css';

const Explore = () => {
  // Sample product data 
  const products = [
    { id: 1, name: 'Vision 1', imgSrc: 'https://i.pinimg.com/236x/69/df/d7/69dfd792832dc357e82f7a081b98a9bb.jpg', price: '$1120' },
    { id: 2, name: 'Sunglass 2', imgSrc: 'https://i.pinimg.com/236x/5c/0d/44/5c0d449a25e5038ad72907f6a263717d.jpg', price: '$1150' },
    { id: 3, name: 'Sports 3', imgSrc: 'https://i.pinimg.com/236x/7c/1f/b7/7c1fb719c7d400bf56dd95d7a8fde09c.jpg', price: '$1180' },
    { id: 4, name: 'Sunglass 4', imgSrc: 'https://i.pinimg.com/236x/85/7e/0e/857e0e4d07298595ad8cc78a9086444d.jpg', price: '$1200' },
    { id: 5, name: 'Vision 1', imgSrc: 'https://i.pinimg.com/236x/39/4e/40/394e40e475b65fe4b661b9beaa119942.jpg', price: '$1120' },
    { id: 6, name: 'Sunglass 2', imgSrc: 'https://i.pinimg.com/236x/06/c9/0e/06c90ebb7c39d6f1047bada5a633589b.jpg', price: '$1150' },
    { id: 7, name: 'Sports 3', imgSrc: 'https://i.pinimg.com/236x/78/79/ca/7879ca1519bdafc790aa7d2535eb2142.jpg', price: '$1180' },
    { id: 8, name: 'Sunglass 4', imgSrc: 'https://i.pinimg.com/564x/da/83/85/da8385abb0d629e3ff6e972d80e5be3b.jpg', price: '$1200' },
  ];


  return (
    <div className="explore-container">
      <aside className="filter-sidebar">
        <h3>Filter by</h3>
        <ul>
          <li><a href="#price">Price</a></li>
          <li><a href="#brand">Brand</a></li>
          <li><a href="#category">Category</a></li>
          {/* Add more filter options as needed */}
        </ul>
      </aside>
      <main className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imgSrc} alt={product.name} />
            <div className="product-info">
              <h4>{product.name}</h4>
              <p>{product.price}</p>
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Explore;
