import {useState} from "react";
import PropTypes from "prop-types";
import {handleInputChange} from "../../utils/handleInputChange.jsx";
import Form from "../common/Form.jsx";

const FormProfessional = ({onInfoUpdate}) => {

    const [educationData, setEducationData] = useState({
        'Institution Name': '',
        'Degree or Certificate': '',
        'Study period': '',
        'Description': ''

    })

    // Utilisation de la fonction `handleInputChange` depuis utils
    const handleChange = handleInputChange(setEducationData);

    const handleSubmit = e => {
        e.preventDefault();
        onInfoUpdate(educationData);
    }

    return (
        <>
            <h2>Education Experience</h2>
            <form onSubmit={handleSubmit}>
                <Form formData={educationData} onChange={handleChange}/>
            </form>

        </>
    )

}
FormProfessional.propTypes = {
    onInfoUpdate: PropTypes.func.isRequired,
};


export default FormProfessional;