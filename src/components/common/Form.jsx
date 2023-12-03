import PropTypes from "prop-types";

const Form = ({formData, onChange}) => {
    return (
        <>
        {Object.keys(formData).map((key) => (
            <label key={key} className="block mb-4">
                <span className="text-gray-700 capitalize">{key}</span>
                <input
                    type="text"
                    name={key}
                    value={formData[key]}
                    onChange={onChange}
                    placeholder={`Enter your ${key}`}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
            </label>
        ))}
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                Submit
            </button>
        </>
    )
}
Form.propTypes = {
    formData: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
};
export default Form;