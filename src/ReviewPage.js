import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Button } from '@mui/material';
import './formStyle.css';


function ReviewPage() {
    const [formData, setFormData] = useState({});

    const countries = [
      'United States',
      'Canada',
      'Mexico',
      // ... other countries
    ];
  
    useEffect(() => {
      const savedData = JSON.parse(localStorage.getItem('formData'));
      setFormData(savedData);
    }, []);

    const handleChange = (e, field) => {
        setFormData({
          ...formData,
          [field]: e.target.value,
        });
    };

    const handleSubmit = (event) => {
      event.preventDefault();  // Prevent default form submission behavior

      // Save data to local storage
      localStorage.setItem('formData', JSON.stringify(formData));
      };

    return formData ? (

        <form onSubmit={handleSubmit}>
          <div>
            <label>Country of Birthhh</label>
            <input 
              type="text" 
              value={formData.countryOfBirth || ''} 
              onChange={(e) => handleChange(e, 'countryOfBirth')} 
            />
          </div>
          <button type="submit">Save Edit</button>
        </form>
    ) : (
        <div>Loading...</div>
    );

}

export default ReviewPage