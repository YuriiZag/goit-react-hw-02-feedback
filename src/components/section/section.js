import { PropTypes } from 'prop-types';

export const Section = ({ title, children }) => {
  return <section>{children}</section>;
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
