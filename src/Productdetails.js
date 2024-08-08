// src/ProductDetailPage.js
import React from 'react';


// Sample product data (for demonstration; in a real app, fetch this data from an API or context)
const sampleProducts = [
  { id: 1, name: 'Eye Drops', description: 'Relieves dry eyes', price: '$10', imageUrl: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Hearing Aid', description: 'Amplifies sound', price: '$150', imageUrl: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Vitamin C', description: 'Boosts immune system', price: '$20', imageUrl: 'https://via.placeholder.com/300' },
  { id: 4, name: 'Glasses', description: 'Corrects vision', price: '$100', imageUrl: 'https://via.placeholder.com/300' },
  // Add more products as needed
];

const Productdetails = () => {
  const { id } = useParams();
  const product = sampleProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={styles.page}>
      <div style={styles.productDetailCard}>
        <img src={product.imageUrl} alt={product.name} style={styles.productImage} />
        <h1 style={styles.productName}>{product.name}</h1>
        <p style={styles.productDescription}>{product.description}</p>
        <p style={styles.productPrice}>{product.price}</p>
        <button style={styles.button} onClick={() => window.history.back()}>Back to Products</button>
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
  productDetailCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  productName: {
    fontSize: '2rem',
    margin: '10px 0',
    color: '#333',
  },
  productDescription: {
    fontSize: '1rem',
    color: '#666',
    margin: '10px 0',
  },
  productPrice: {
    fontSize: '1.25rem',
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
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Productdetails;
