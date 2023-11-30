import  { useState } from 'react'
import PropTypes from "prop-types";

const FormPersonal = ({ onFormSubmit, initialData }) => {
    const [formData, setFormData] = useState(initialData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(formData);
    };
    return (
        <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                    <label key={key}>
                        <input
                            type="text"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            placeholder={`Enter your ${key}`}
                        />
                        <br />
                    </label>
                ))}
                <button type="submit">Submit</button>
        </form>

    )

}
FormPersonal.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
   initialData: PropTypes.object.isRequired
};

export default FormPersonal;