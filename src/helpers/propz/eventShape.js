import PropTypes from 'prop-types';

const eventShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  uid: PropTypes.string.isRequired,
  typeId: PropTypes.string.isRequired,
});

export default { eventShape };
