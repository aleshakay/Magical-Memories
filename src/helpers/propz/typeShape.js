import PropTypes from 'prop-types';

const typeShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
});

export default { typeShape };
