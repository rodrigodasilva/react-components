import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Paper = ({ className, children, ...props }) => {
  return (
    <Container className={className} {...props}>
      {children}
    </Container>
  );
};

Paper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

Paper.defaultProps = {
  className: '',
};

export default Paper;
