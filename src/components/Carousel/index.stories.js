import React from 'react';

import Carousel from '.';

export default {
  title: 'Components/Carousel',
  component: Carousel,
};

export const Default = () => {
  return (
    <div style={{ width: '450px', minHeight: '200px' }}>
      <Carousel />
    </div>
  );
};
