import PropTypes from "prop-types";

const Resume = ({ preview }) => {
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg">
            <h1 className="text-center text-3xl font-bold text-gray-700 mb-8">Preview</h1>
            <div className="text-gray-800">{preview}</div>
        </div>
    );
};

Resume.propTypes = {
    preview: PropTypes.object.isRequired,
};

export default Resume;
