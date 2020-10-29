import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    border: 0;
    padding: 0;
  }

  img {
    display: block;
  	height: auto;
  	max-width: 100%;
  }

  svg {
    fill: currentColor;
  }

  .small,
  small {
    font-size: .8em;
  }

  html {
    font-size: 10px;
    -moz-osx-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
  }

  b, strong {
    font-weight: 600;
  }

  i, em {
    font-style: italic;
  }

  input[type="search"] {
    -webkit-appearance: textfield;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  *::placeholder {
    color: var(--text-color-lighten);
  }

  *::-webkit-input-placeholder {
    color: var(--text-color-lighten);
  }

  body {
    color: var(--text-color);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 2rem;
    min-height: calc(100vh);
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    will-change: background-color;
  }

  :root {
    --space-xxs: 4px;
    --space-xs: 8px;
    --space-sm: 16px;
    --space: 24px;
    --space-md: 34px;
    --space-lg: 42px;
    --space-xlg: 64px;

    --screen-xs: 360px;
    --screen-sm: 768px;
    --screen-md: 992px;
    --screen-lg: 1280px;
    --screen-xlg: 1440px;
    --screen-max-container: var(--screen-xlg);

    --black: #111;
    --white: #fff;
    --gray-1: #f5f5f5;
    --gray-2: #d8d8d8;
    --gray-3: #9b9b9b;
    --gray-4: #4a4a4a;
    --blue-1: #daf0ff;
    --blue-2: #0D84FF;
    --blue-3: #0060a7;
    --green-1: #15CE7E;
    --orange-1: #F49400;
    --red-1: #F15F52;
    --red-2: #ff917f;

    --bg: #F2F3F5;
    --default-color: #5E6876;
    --default-color-lighten: #8b96a5;
    --default-color-contrast: var(--white);
    --disabled-color: var(--gray-3);
    --disabled-color-contrast: var(--gray-1);
    --primary-color: var(--orange-1);
    --primary-color-lighten: #ffc546;
    --primary-color-contrast: var(--white);
    --secondary-color: var(--blue-2);
    --secondary-color-lighten: #6bb3ff;
    --secondary-color-contrast: var(--white);
    --success-color: var(--green-1);
    --success-color-lighten: #64ffae;
    --success-color-contrast: var(--white);
    --danger-color: var(--red-1);
    --danger-color-lighten: var(--red-2);
    --danger-color-contrast: var(--white);
    --text-color: #515F75;
    --text-color-lighten: #999999;
  }
`;

export default GlobalStyles;
