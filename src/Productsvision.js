import React, { useState, useEffect } from 'react';

// Sample product data
const sampleProducts = [
  { id: 1, name: 'vision', description: 'Relieves dry eyes', price: '$10', imagesrc: 'https://i.pinimg.com/564x/da/83/85/da8385abb0d629e3ff6e972d80e5be3b.jpg' },
  { id: 2, name: 'vision', description: 'Amplifies sound', price: '$150', imageUrl: 'http://localhost:3001/static/media/vision8.4cdb2bb36a4011cf53f4.png' },
  { id: 3, name: 'vision', description: 'Boosts immune system', price: '$20', imageUrl: 'http://localhost:3001/static/media/vision5.5e43dea8c9f7f9cde6ea.png' },
  { id: 4, name: 'vision', description: 'Corrects vision', price: '$100', imageUrl: 'http://localhost:3001/static/media/vision3.9677d3b3dd0b16e057e9.png' },
  // Add more products as needed
];

const Productsvision = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setProducts(sampleProducts);
  }, []);

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Products</h1>
      <div style={styles.productContainer}>
        {products.map(product => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.imageUrl} alt={product.name} style={styles.productImage} />
            <div style={styles.productDetails}>
              <h2 style={styles.productName}>{product.name}</h2>
              <p style={styles.productDescription}>{product.description}</p>
              <p style={styles.productPrice}>{product.price}</p>
              <button style={styles.button}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: '20px',
    background: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  productContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '250px',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    overflow: 'hidden',
    border: '1px solid #ddd',
  },
  productImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  productDetails: {
    padding: '10px',
  },
  productName: {
    fontSize: '1.25rem',
    margin: '10px 0',
    color: '#333',
  },
  productDescription: {
    fontSize: '0.875rem',
    color: '#666',
    margin: '10px 0',
  },
  productPrice: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '#333',
    margin: '10px 0',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Productsvision;
