import React, { useState } from 'react';
import './ContactPage.css'; // Import your CSS file for styling
import Header from '../Home/Header';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
    <Header/>
    <div className="contact-page">
    <h1>Contact Us</h1>
    <form onSubmit={handleSubmit} className='cform'>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
          type="text"
          id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
            </div>
        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        />
        </div>
        <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="5"
        required
        ></textarea>
        </div>
        <button type="submit">Send Message</button>
        </form>
        </div>
        </>
  );
};

export default ContactPage;
