import React from 'react';
import './TrendingProducts.css'; // Assuming you have a CSS file for styling

const TrendingProducts = () => {
    const products = [
        { id: 1, name: 'Ardor Aviator', price: '₹1999', category: 'Sports', imgSrc: 'https://i.pinimg.com/236x/38/21/95/382195c30a53fac708f6384ccb6e90bc.jpg' },
        { id: 2, name: 'Caper Active', price: '₹1299', category: 'Sports', imgSrc: 'https://i.pinimg.com/564x/6d/68/04/6d6804287f4f856843cf44158ee9fca6.jpg' },
        { id: 3, name: 'Alder Street', price: '₹2999', category: 'Sports', imgSrc: 'https://i.pinimg.com/236x/79/60/e3/7960e3ba8a661e844d18dbf105d2d4fc.jpg' },
        { id: 4, name: 'Black Boss', price: '₹2999', category: 'Sunglasses', imgSrc: 'https://i.pinimg.com/564x/03/52/a9/0352a92f2b5496d2e92dbfb92e63dc12.jpg' },
        { id: 5, name: 'Hip Hop Candy', price: '₹1499', category: 'Sports', imgSrc: 'https://i.pinimg.com/564x/f0/4e/c8/f04ec85854deed515c1dbf4e97bd2088.jpg' },
        { id: 6, name: 'Punk Cut Out', price: '₹2999', category: 'Sports', imgSrc: 'https://i.pinimg.com/236x/6f/32/89/6f3289f268958f5d4af152c20fe8676f.jpg' },
        
    ];

    return (
        <div className="trending-products">
            <h2>Trending Products</h2>
            <div className="products-container">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.imgSrc} alt={product.name} />
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                            <div className="product-category">
                                <span>{product.category}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingProducts;
