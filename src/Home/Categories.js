import React from 'react';
import './Categories.css';

const Categories = () => {
    const categories = [
        { id: 1, name: 'Vision', imgSrc: 'https://i.pinimg.com/564x/90/21/84/902184c4a5eb9b2fe606667ccb8f5a8d.jpg', page: '/category/1' },
        { id: 2, name: 'Sports', imgSrc: 'https://i.pinimg.com/564x/80/11/4f/80114faa77b9f2a1381193068ab580a2.jpg', page: '/category/2' },
        { id: 3, name: 'Sunglasses', imgSrc: 'https://i.pinimg.com/236x/05/63/3e/05633eaf5abba9c3d2f45278372b6c32.jpg', page: '/category/3' }
    ];

    return (
        <div className="categories">
            <h2>Categories</h2>
            <div className="categories-container">
                {categories.map(category => (
                    <div key={category.id} className="category-card">
                        <img src={category.imgSrc} alt={category.name} />
                        {category.name && <div className="category-name">{category.name}</div>}
                        <a href={category.page} className="category-button">Go to {category.name}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;
