import { create } from '@storybook/theming/create'

const $blue = '#0D84FF'
const $grayDark = 'rgb(33, 33, 33)'
const $orange = '#F49400'
const $transparent = 'transparent'
const $white = 'rgb(255, 255, 255, .9)'
const $white2 = 'rgb(255, 255, 255, .8)'
const $white3 = 'rgb(240, 240, 240, .9)'

const $colorPrimary = $blue
const $colorSecondary = $orange

const $borderRadius = 2

export default create({
  base: 'light',

  colorPrimary: $colorPrimary,
  colorSecondary: $colorSecondary,

  // UI
  appBg: $white,
  appContentBg: $white2,
  appBorderColor: $transparent,
  appBorderRadius: $borderRadius,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: $grayDark,
  textInverseColor: $white,

  // Toolbar default and active colors
  barTextColor: $white3,
  barSelectedColor: $white,
  barBg: $colorPrimary,

  // Form colors
  inputBg: $white,
  inputBorder: $white2,
  inputTextColor: $grayDark,
  inputBorderRadius: $borderRadius,

  brandTitle: 'Boteria - Documentação frontend',
  brandUrl: 'https://app.boteria.com.br',
  brandImage:
    'https://app.boteria.com.br/static/media/logo-boteria.eed48dca.svg',
})
