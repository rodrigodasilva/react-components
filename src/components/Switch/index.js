import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import { Container, Content, CustomSwitch, ErrorMessage } from './styles';

const Switch = ({
  id,
  label,
  labelPlacement,
  color,
  className,
  error,
  ...props
}) => {
  const selfId = id || uniqid(`switch__`);

  return (
    <Container className={classNames(className)}>
      <Content
        className={classNames('content', `label-placement--${labelPlacement}`)}
      >
        <CustomSwitch className="switch" htmlFor={selfId}>
          <input type="checkbox" id={selfId} {...props} />
          <span className={classNames('slider', 'rounded', color)} />
        </CustomSwitch>

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

Switch.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  labelPlacement: PropTypes.oneOf(['start', 'end', 'top', 'bottom']),
  color: PropTypes.oneOf(['primary', 'success', 'danger']),
  className: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Switch.defaultProps = {
  id: '',
  label: '',
  labelPlacement: 'end',
  color: 'primary',
  className: '',
  error: '',
};

export default Switch;
