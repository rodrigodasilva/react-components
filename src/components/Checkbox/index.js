import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import { Container, Content, ErrorMessage } from './styles';

const Checkbox = ({
  id,
  label,
  labelPlacement,
  className,
  error,
  ...props
}) => {
  const selfId = id || uniqid(`input__`);

  return (
    <Container className={classNames(className)}>
      <Content
        className={classNames('content', `label-placement--${labelPlacement}`)}
      >
        <input type="checkbox" id={selfId} {...props} />
        {label && (
          <label htmlFor={selfId} className="label">
            {label}
          </label>
        )}
      </Content>

      {error && <ErrorMessage className="error">{error}</ErrorMessage>}
    </Container>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  labelPlacement: PropTypes.oneOf(['start', 'end', 'top', 'bottom']),
  className: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Checkbox.defaultProps = {
  id: '',
  label: '',
  labelPlacement: 'end',
  className: '',
  error: '',
};

export default Checkbox;
