import PropTypes from "prop-types";

const Form = ({formData, onChange}) => {
    return (
        <>
        {Object.keys(formData).map((key) => (
                <label key={key}>
                    <input
                        type="text"
                        name={key}
                        value={formData[key]}
                        onChange={onChange}
                        placeholder={`Your ${key}`}
                    />
                    <br />
                </label>
            ))}
    <button type="submit">Submit</button>
        </>
    )
}
Form.propTypes = {
    formData: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
};
export default Form;