import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import formSchema from './formSchema'

function IntakeForm() {
    const [countryOfBirth, setCountryOfBirth] = useState('')
    const history = useHistory();
    const [errors, setErrors] = useState({})

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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Country of Birth</label>
                <input
                    type="text"
                    value={countryOfBirth}
                    onChange={handleInputChange(setCountryOfBirth, 'countryOfBirth')} 
                />
            </div>
            {errors.countryOfBirth && <div style={{ color: 'red' }}>{errors.countryOfBirth}</div>}
            <button type="submit">Submit</button>
        </form>
    )
}

export default IntakeForm