import React, { useState } from 'react';
import '../assets/css/form.css';
import axios from 'axios';

function FormContainer() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    field: '',
  });

  const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);

    const headers = {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
      };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/; // 10 digits only
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
  
    // Phone validation (mandatory)
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits.';
    }
  
    // Email validation (mandatory)
    if (!formData.email) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
  
    // Field selection validation (if applicable)
    if (!formData.field) {
      newErrors.field = 'Please choose a field.';
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


    try {
        const response = await axios.post(
          'https://spicesofthesouth.au/sendmail/index.php/enquiry-form',
          formData,
          { headers }
        );
        if (response.data.status === 'success') {
          setStatusMessage({ type: 'success', text: 'We have received your enquiry we will get back to you soon!' });
          setFormData({
            name: '',
            phone: '',
            email: '',
            field: '',
          });
        } else {
          console.log(`Failed to place order: ${response.data.message}`);
          setStatusMessage({ type: 'error', text: response.data.message || 'Failed. Please try again.' });
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
        console.log('An error occurred while placing your order. Please try again.');
        setStatusMessage({ type: 'error', text: 'An error occurred. Please try again.' });
      }finally {
        setLoading(false); 
      }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log('Form submitted successfully:', formData);
      // Reset form after submission
      
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="first-section">
          <div className="input-container">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <p className={`error ${errors.name ? 'active' : ''}`}>{errors.name}.</p>
          </div>

          <div className="input-container">
            <input
              type="text"
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
            />
            <p className={`error ${errors.phone ? 'active' : ''}`}>{errors.phone}.</p>
          </div>
        </div>

        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <p className={`error ${errors.email ? 'active' : ''}`}>{errors.email}.</p>
        </div>

        <div className="select-container">
          <select
            name="field"
            value={formData.field}
            onChange={handleChange}
            style={{color : formData.field ? "#000" : "#B5B5B5"}}
          >
            <option value="">Choose field (Enquire for delivery/pickup/catering...)</option>
            <option value="Enquire for delivery">Enquire for delivery</option>
            <option value="Pickup">Pickup</option>
            <option value="Catering">Catering</option>
            <option value="Ready to go meals">Ready to go meals</option>
          </select>
          <p className={`error ${errors.field ? 'active' : ''}`}>{errors.field}.</p>

        </div>

        <button type="submit" className={`enquiry-btn ${loading ? 'active' : null}`}>
            {
              loading ?
              <div className="simple-spinner white">
                <span></span>
              </div>
              :
              "Enquire Now"
            }
          
        </button>
        {statusMessage && (
            <p className={`status-message ${statusMessage.type} fs-16 fw-600`}>
              {statusMessage.text}
            </p>
          )}
      </form>
    </div>
  );
}

export default FormContainer;
