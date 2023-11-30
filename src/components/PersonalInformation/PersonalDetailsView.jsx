import PropTypes from 'prop-types';

const PersonalDetailsView = ({ details }) => {
    return (
        <div>
            {Object.entries(details).map(([key, value]) => (
                key !== 'id' && <p key={key}>{`${key}: ${value}`}</p>
            ))}
        </div>
    );
};

PersonalDetailsView.propTypes = {
    details: PropTypes.object.isRequired
};

export default PersonalDetailsView;
