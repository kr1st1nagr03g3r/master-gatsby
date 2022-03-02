import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/Nunito-Light.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Nunito;
    src: url(${font});
  }
  html {
    font-family: Nunito, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
  }
  p, li {
    letter-spacing: 0.5px;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
  a {
    color: white;
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
   π text-decoration-skip-ink: none;
  }
  .center {
    text-align: center;
  }

`;

export default Typography;
