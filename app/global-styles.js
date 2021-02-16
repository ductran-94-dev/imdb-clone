import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: ${props => props.theme.colors.main};
    --color-primary-dark: ${props => props.theme.colors.dark};
    --color-primary-darker: ${props => props.theme.colors.darker};
    --color-primary-light: ${props => props.theme.colors.light};
    --color-primary-lighter: ${props => props.theme.colors.lighter};
    --text-color: ${props => props.theme.colors.text};
    --link-color: ${props => props.theme.colors.link};
    --link-hover-color: ${props => props.theme.colors.linkHover};
    --border-color: rgba(176, 190, 197, 0.5);
    --shadow-color: rgba(0, 0, 0, 0.2);
    --shadow-color-dark: rgba(0, 0, 0, 0.25);
  }

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: var(--color-primary-ligth);
    color: var(--text-color);
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  svg {
    width: 100%;
    height: 100%;
    max-width: 100%;

    vertical-align: middle;
    fill: currentColor;
  }

  a {
    color: var(--link-color);
    
    &:hover {
      color: var(--link-hover-color);
    }
  }
`;

export default GlobalStyle;
