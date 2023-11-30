import {useState} from "react";
import PropTypes from "prop-types";

const FormProfessional = ({onFormSubmit, initialData}) => {

    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevContent => ({
            ...prevContent,
                [name]: value
        }));
    }
    const handleSubmit = e => {
        e.preventDefault();
        onFormSubmit(formData);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            {Object.keys(formData).map((key )=> (
                <label key={key}>
                    <input
                    type="text"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    placeholder={key}/>
                    <br/>
                </label>
            ))}
            <button type="submit">Submit</button>
        </form>

        </>
    )

}
FormProfessional.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
    initialData: PropTypes.object.isRequired
};


export default FormProfessional;