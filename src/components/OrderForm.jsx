import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/order-form.css';
import dayjs from 'dayjs';

import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function OrderForm({ displayForm, setDisplayForm, cart, setCart, freeCart, setFreeCart }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    datetime: null, // Store as a full DateTime object
    message: '',
  });

  const headers = {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  };

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateTimeChange = (newValue) => {
    setFormData((prev) => ({ ...prev, datetime: newValue }));
  };

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]*$/;
    const phoneRegex = /^[0-9]{10}$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) newErrors.name = 'Name is required.';
    else if (!nameRegex.test(formData.name)) newErrors.name = 'Name cannot contain numbers or special characters.';

    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Enter a valid email address.';

    if (!formData.phone) newErrors.phone = 'Phone is required.';
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits.';

    if (!formData.datetime) {
      newErrors.datetime = 'Please select a valid date and time.';
    } else {
      const currentDateTime = dayjs();
      const selectedDateTime = dayjs(formData.datetime);

      if (selectedDateTime.isBefore(currentDateTime)) {
        newErrors.datetime = 'Date and time must not be in the past.';
      } else if (
        selectedDateTime.hour() < 10 || 
        (selectedDateTime.hour() === 10 && selectedDateTime.minute() < 30) ||
        selectedDateTime.hour() > 14 ||
        (selectedDateTime.hour() === 14 && selectedDateTime.minute() > 30)
      ) {
        newErrors.datetime = 'Time must be between 10:30 AM and 2:30 PM.';
      }
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    setStatusMessage(null);

    const requestData = {
      ...formData,
      date: formData.datetime ? formData.datetime.format('YYYY-MM-DD') : '',
      time: formData.datetime ? formData.datetime.format('HH:mm a') : '',
      cart: [...cart, ...freeCart],
    };


    try {
      const response = await axios.post(
        'https://spicesofthesouth.au/sendmail/index.php/form',
        requestData,
        { headers }
      );
      if (response.data.status === 'success') {
        setStatusMessage({ type: 'success', text: 'Order placed successfully!' });
        setFormData({ name: '', phone: '', email: '', datetime: null, message: '' });
        setCart([]);
        localStorage.removeItem('cart');
        setFreeCart([]);
        localStorage.removeItem('freeCart');

        setTimeout(() => setDisplayForm(false), 3000);
      } else {
        setStatusMessage({ type: 'error', text: 'Failed to place order. Please try again.' });
      }
    } catch (error) {
      setStatusMessage({ type: 'error', text: 'An error occurred while placing your order. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`order-form ${displayForm ? 'active' : ''}`}>
      <div className="overlay" onClick={() => setDisplayForm(false)}></div>
      <div className="place-order-form">
        <h3 className="fs-32 fw-600">Your Details</h3>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="column-1">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
              <p className={`error ${errors.name ? 'active' : ''}`}>{errors.name}</p>
            </div>
            <div className="column-2">
              <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
              <p className={`error ${errors.phone ? 'active' : ''}`}>{errors.phone}</p>
            </div>
          </div>

          <div className="row">
            <div className="column-1">
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
              <p className={`error ${errors.email ? 'active' : ''}`}>{errors.email}</p>
            </div>
            <div className="column-2 order-date">
              <label htmlFor="date">Order Pickup</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDateTimePicker 
                  value={formData.datetime} 
                  onChange={handleDateTimeChange} 
                  format="DD-MM-YYYY HH:mm a"
                  slotProps={{ textField: { variant: 'outlined', fullWidth: true } }} 
                />
              </LocalizationProvider>
              <p className={`error ${errors.datetime ? 'active' : ''}`}>{errors.datetime}</p>
            </div>
          </div>

          <div className="row row-msg">
            <input type="text" name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
          </div>

          <button className="place-order-btn" type="submit">
            {loading ? <div className="simple-spinner"><span></span></div> : "Place your Order"}
          </button>
          {statusMessage && <p className={`status-message ${statusMessage.type} fs-16 fw-600`}>{statusMessage.text}</p>}
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
