import PropTypes from 'prop-types';

const pictureShape = PropTypes.shape({
  id: PropTypes.string,
  eventId: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
});

export default { pictureShape };
