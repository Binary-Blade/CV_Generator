import PropTypes from "prop-types";

const Resume = ({preview}) => {
    return (
        <>
        <h1>Preview</h1>
         <div>{preview}</div>
        </>
    )
}

Resume.propTypes = {
    preview: PropTypes.object.isRequired,
};
export default Resume;