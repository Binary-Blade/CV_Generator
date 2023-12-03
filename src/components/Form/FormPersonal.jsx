import  { useState } from 'react'
import PropTypes from "prop-types";
import {handleInputChange} from "../../utils/handleInputChange.jsx";
import Form from "../common/Form.jsx";

const FormPersonal = ({ onInfoUpdate }) => {
    const [personalData, setPersonalData] = useState({
        'Full Name': '',
        'Address': '',
        'City': '',
        'Phone number': '',
        'Email': '',
        'Language': ''
    });
    // Utilisation de la fonction `handleChange` depuis utils
    const handleChange = handleInputChange(setPersonalData);

    const handleSubmit = (e) => {
        e.preventDefault();
        onInfoUpdate(personalData);
    };

    return (
        <>
            <h2 className="text-center text-xl font-bold text-gray-700 mt-4">General Information</h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded">
                <Form formData={personalData} onChange={handleChange}/>
            </form>
        </>
    )

}
FormPersonal.propTypes = {
    onInfoUpdate: PropTypes.func.isRequired,
};

export default FormPersonal;