import React from 'react'
import { addParameters, addDecorator } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

// import GlobalStyle from '../src/styles/global';

import CustomViewports from './customViewports'

// addDecorator(storyFn => (
//   <GlobalStyle>
//     {storyFn()}
//   </GlobalStyle>
// ));

addParameters({
  viewport: {
    viewports: {
      ...CustomViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
})
