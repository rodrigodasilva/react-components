import React from 'react';
import { addDecorator } from '@storybook/react';

import GlobalStyle from '../src/styles/global';
import {ContainerToast} from '../src/components/CustomToast';

import './styles/storybook.css'

addDecorator(storyFn =>
  <>
    <GlobalStyle />
    <ContainerToast />
    {storyFn()}
  </>
  );

