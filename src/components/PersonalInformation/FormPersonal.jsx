import  { useState } from 'react'
import PropTypes from "prop-types";

const FormPersonal = ({onFormSubmit}) => {
    const [formData, setFormData] = useState({
        fullName : '',
        address: '',
        city: '',
        phoneNumber: '',
        email: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevState => ({
            ...prevState,
                [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(formData);
        setFormData({ fullName: '', address: '', city: '', phoneNumber: '', email: '' }); // Réinitialiser le formulaire
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                />
            </label>
            <label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                />
            </label>
            <label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                />
            </label>
            <label>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
            </label>
            <label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                />
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    )

}
FormPersonal.propTypes = {
    onFormSubmit: PropTypes.func.isRequired
};

export default FormPersonal;