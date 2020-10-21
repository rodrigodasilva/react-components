import React from 'react';
import { PropTypes } from 'prop-types';

import { FaCheck } from 'react-icons/fa';

import { StepperList, Step } from './styles';

export default function Stepper({ list, current }) {
  return (
    <StepperList>
      {list.map((step, index) => (
        <Step
          key={step.label}
          active={index === current}
          visited={current > index}
        >
          <div className="step__wrapper">
            <div className="step__indicator">
              {current > index ? <FaCheck size={14} /> : index + 1}
            </div>
          </div>
          <h3 className="step__label">{step.label}</h3>
        </Step>
      ))}
    </StepperList>
  );
}

Stepper.propTypes = {
  current: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
