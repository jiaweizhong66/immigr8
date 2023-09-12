import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Button, Typography, CircularProgress } from '@mui/material';
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
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <Typography variant="h4" component="div" gutterBottom style={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'Ubuntu Mono' }}>
          Please review your form
        </Typography>
        <TextField
          select
          label="Country of Birth"
          value={formData.countryOfBirth || ''}
          onChange={(e) => handleChange(e, 'countryOfBirth')}
          variant="outlined"
          fullWidth
          name="countryOfBirth"
          fontFamil='Ubuntu Mono'
        >
          {countries.map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </TextField>
        <div className='button-container'>
          <Button variant="contained" color="primary" type="submit" fontFamil='Ubuntu Mono'>
            Save Changes
          </Button>
        </div>
      </form>
        
      </div>
        
    ) : (
      <div className="loading-container">
        <CircularProgress />
        <Typography variant="h6" style={{ marginTop: '20px' }}>Loading your files...</Typography>
      </div>
    );

}

export default ReviewPage