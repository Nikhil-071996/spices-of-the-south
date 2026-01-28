import React, { useState } from 'react';
import '../assets/css/subscribe.css';
import subscribeImg from '../assets/images/home/subscribe-bg.png';
import axios from 'axios';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    console.log(email);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setStatusMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    setLoading(true);
    setStatusMessage(null);

    try {
      const response = await axios.post(
        'https://spicesofthesouth.au/sendmail/index.php/subscribe', // Change to your actual PHP URL
        { email }, 
        { headers: { 
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*', } }
      );

      if (response.data.status === 'success') {
        setStatusMessage({ type: 'success', text: 'You have subscribed successfully!' });
        setEmail('');
      } else {
        setStatusMessage({ type: 'error', text: response.data.message || 'Subscription failed. Try again.' });
      }
    } catch (error) {
      setStatusMessage({ type: 'error', text: 'An error occurred. Please try again.' });
      console.error('Subscription error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="subscribe-container bg-orange-500 text-white rounded-lg p-6 text-center relative mt-5">
      {/* Background Image */}
      <img
        src={subscribeImg}
        alt="Stay in the loop"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
      />

      {/* Text Content */}
      <div className="PlacedStyle">
        <h2 className="text-2xl font-bold mb-2">Stay in the loop</h2>
        <p className="text-sm mb-4">
          Keep up to date with the menu changes, special offers on the menu, and all upcoming Chef's Specials.
        </p>

        {/* Input & Button */}
        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row justify-center items-center gap-2 moveInput">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="p-2 inputStyle rounded-md text-black w-full md:w-1/3"
            value={email}
            onChange={handleChange}
          />
          <button type="submit" className="bg-red-600 px-4 py-2 rounded-md text-white subButton">
            {loading ? 'Submitting...' : 'Sign Up'}
          </button>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <p className={`status-message ${statusMessage.type} mt-2`}>
            {statusMessage.text}
          </p>
        )}
      </div>
    </div>
  );
}

export default Subscribe;
