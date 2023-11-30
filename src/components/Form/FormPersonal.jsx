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
            <h2>General Information</h2>
            <form onSubmit={handleSubmit}>
                <Form formData={personalData} onChange={handleChange}/>
            </form>
        </>
    )

}
FormPersonal.propTypes = {
    onInfoUpdate: PropTypes.func.isRequired,
};

export default FormPersonal;