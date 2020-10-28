import React from 'react';
import PropTypes from 'prop-types';
import { toast as reactToast } from 'react-toastify';

import Button from '../Button';

import iconUpdatedBot from '../../assets/icons/icon_bot_atualizado.svg';
import iconRight from '../../assets/icons/icon_certo.svg';
import iconError from '../../assets/icons/icon_erro.svg';
import iconAlert from '../../assets/icons/icon_alerta.svg';

import { CustomContainerToast } from './styles';

const CustomToastContent = ({
  icon,
  title,
  description,
  buttonLabel,
  href,
}) => {
  return (
    <>
      {icon && <img src={icon} alt="Icon" className="custom-toastify-icon" />}

      <div className="custom-toastify-content">
        <strong className="custom-toastify-title">{title}</strong>
        {description && (
          <p className="custom-toastify-description">{description}</p>
        )}

        {buttonLabel && (
          <Button
            size="small"
            variant="outlined"
            shape="round-square"
            color="secondary"
            {...(href && { href })}
          >
            {buttonLabel}
          </Button>
        )}
      </div>
    </>
  );
};

const toast = {
  default: (title, description, buttonLabel, href) =>
    reactToast(
      <CustomToastContent
        icon={iconUpdatedBot}
        title={title}
        description={description}
        buttonLabel={buttonLabel}
        href={href}
      />
    ),
  success: (title, description, buttonLabel, href) =>
    reactToast.success(
      <CustomToastContent
        icon={iconRight}
        title={title}
        description={description}
        buttonLabel={buttonLabel}
        href={href}
      />
    ),
  error: (title, description, buttonLabel, href) =>
    reactToast.error(
      <CustomToastContent
        icon={iconError}
        title={title}
        description={description}
        buttonLabel={buttonLabel}
        href={href}
      />
    ),
  warn: (title, description, buttonLabel, href) =>
    reactToast.warn(
      <CustomToastContent
        icon={iconAlert}
        title={title}
        description={description}
        buttonLabel={buttonLabel}
        href={href}
      />
    ),
};

CustomToastContent.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  href: PropTypes.string,
};

CustomToastContent.defaultProps = {
  icon: '',
  description: '',
  buttonLabel: '',
  href: '',
};

const ContainerToast = () => {
  return <CustomContainerToast autoClose={9000} />;
};

export { ContainerToast, toast };
