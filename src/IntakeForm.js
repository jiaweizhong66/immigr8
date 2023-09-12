import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import formSchema from './formSchema'
import { TextField, MenuItem, Button } from '@mui/material';
import './formStyle.css'

function IntakeForm() {
    const [countryOfBirth, setCountryOfBirth] = useState('')
    const history = useHistory();
    const [errors, setErrors] = useState({})

    const countries = [
      'United States',
      'Canada',
      'Mexico',
      'China',
    ];

    const handleInputChange = (setter, field) => (e) => {
        console.log(e.target)
        setter(e.target.value);
      
        // Clear the specific error for the field being updated
        setErrors((prev) => ({
          ...prev,
          [field]: undefined,
        }));
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            // Validate the form data against the schema
            await formSchema.validate({ countryOfBirth}, { abortEarly: false });
            
            // Save data to local storage
            localStorage.setItem('formData', JSON.stringify({ countryOfBirth}));
            history.push('/review');
          } catch (err) {
            // If validation fails, set errors to state
            setErrors(err.inner.reduce((acc, currentError) => ({
              ...acc,
              [currentError.path]: currentError.message,
            }), {}));
          }
    }

    return (
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <TextField
            select
            label="Country of Birth"
            value={countryOfBirth}
            onChange={handleInputChange(setCountryOfBirth, 'countryOfBirth')} 
            variant="outlined"
            fullWidth
            name="countryOfBirth"
            helperText={errors.countryOfBirth}
            error={!!errors.countryOfBirth}
          >
            {countries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </TextField>
          <div className='button-container'>
          <Button variant="contained" color="primary" type="submit">
            Submit Form
          </Button>
        </div>
      </form>
      </div>
    )
}

export default IntakeForm