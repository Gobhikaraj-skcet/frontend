/* Categories.css */

.categories {
    padding: 20px;
    text-align: center; /* Center align title */
  }
  
  .categories-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* Space between cards */
    justify-content: center; /* Center align cards */
  }
  
  .category-card {
    position: relative;
    width: 280px; /* Card width */
    height: 350px; /* Increased height of the card */
    border-radius: 12px; /* Rounded corners */
    overflow: hidden; /* Ensure images don't overflow card */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Modern shadow effect */
    transition: transform 0.3s, box-shadow 0.3s; /* Smooth transition for hover effects */
  }
  
  .category-card:hover {
    transform: scale(1.05); /* Slightly enlarge card on hover */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3); /* Enhance shadow on hover */
  }
  
  .category-card img {
    width: 100%; /* Fill the width of the card */
    height: 100%; /* Fill the height of the card */
    object-fit: cover; /* Ensure the image covers the area without distortion */
    display: block; /* Ensure image is a block element */
  }
  
  .category-card:hover img {
    opacity: 0.9; /* Slightly fade image on hover */
  }
  
  .category-button {
    position: absolute; /* Position button absolutely within card */
    bottom: 10px; /* Space from the bottom of the card */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Center button horizontally */
    padding: 10px 30px; /* Adjust padding as needed */
    text-align: center;
    text-decoration: none;
    color: white;
    background: linear-gradient(135deg, #ff7e5f, #feb47b); /* Trendy gradient background */
    border-radius: 8px; /* Rounded corners */
    font-size: 0.9rem; /* Adjust font size */
    transition: background 0.3s, transform 0.3s; /* Smooth transition for button effects */
    z-index: 1; /* Ensure button is on top of the image */
  }
  
  .category-button:hover {
    background: linear-gradient(135deg, #feb47b, #ff7e5f); /* Reverse gradient on hover */
    transform: scale(1.05); /* Slightly enlarge button on hover */
  }
  