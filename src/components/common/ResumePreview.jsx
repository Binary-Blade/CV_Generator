import PropTypes from 'prop-types';

const ResumePreview = ({ title, details }) => {
    return (
        <div className="bg-white p-4 shadow rounded mt-6">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            {Object.entries(details).map(([key, value]) => (
                <p key={key} className="mb-2"><span className="font-semibold capitalize">{key}:</span> {value}</p>
            ))}
        </div>
    );
};

ResumePreview.propTypes = {
    title: PropTypes.string.isRequired,
    details: PropTypes.object.isRequired
};

export default ResumePreview;
