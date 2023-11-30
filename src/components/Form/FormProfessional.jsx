import {useState} from "react";
import PropTypes from "prop-types";
import {handleInputChange} from "../../utils/handleInputChange.jsx";
import Form from "../common/Form.jsx";

const FormProfessional = ({onInfoUpdate}) => {

    const [professionalData, setProfessionalData] = useState({
        'Company Name': '',
        'Job Title': '',
        'Work Period': '',
        'Job Description': ''

    })

    // Utilisation de la fonction `handleInputChange` depuis utils
    const handleChange = handleInputChange(setProfessionalData);

    const handleSubmit = e => {
        e.preventDefault();
        onInfoUpdate(professionalData);
    }

    return (
        <>
            <h2>Professional Experience</h2>
            <form onSubmit={handleSubmit}>
                <Form formData={professionalData} onChange={handleChange}/>
            </form>
        </>
    )

}
FormProfessional.propTypes = {
    onInfoUpdate: PropTypes.func.isRequired,
};


export default FormProfessional;