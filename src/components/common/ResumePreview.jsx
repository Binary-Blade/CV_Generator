import PropTypes from 'prop-types';

const ResumePreview = ({ details }) => {
    return (
        <div>
            {Object.entries(details).map(([key, value]) => (
                key !== 'id' && <p key={key}>{`${value}`}</p>
            ))}
        </div>
    );
};

ResumePreview.propTypes = {
    details: PropTypes.object.isRequired
};

export default ResumePreview;
