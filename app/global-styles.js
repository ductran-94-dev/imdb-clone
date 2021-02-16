import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --app-primary: ${props => props.theme.colors.primary};
    --app-secondary: ${props => props.theme.colors.secondary};
    --app-success: ${props => props.theme.colors.success};
    --app-info: ${props => props.theme.colors.info};
    --app-warning: ${props => props.theme.colors.warning};
    --app-danger: ${props => props.theme.colors.danger};
    --app-light: ${props => props.theme.colors.light};
    --app-dark: ${props => props.theme.colors.dark};
    --app-primary-text: ${props => props.theme.colors.textPrimary};
    --app-secondary-text: ${props => props.theme.colors.textSecondary};
    --app-primary-link: ${props => props.theme.colors.textPrimary};
    --app-secondary-link: ${props => props.theme.colors.textSecondary};
    --app-primary-shadow: ${props => props.theme.colors.shadowPrimary};
    --app-border-color: rgba(176, 190, 197, 0.5);
  }

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-size: 14px;
  }

  // body {
  //   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // }

  // body.fontLoaded {
  //   font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // }

  #app {
    background-color: var(--app-secondary);
    color: var(--app-primary-text);
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
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
    color: var(--app-primary-link);
    
    &:hover {
      color: var(--app-secondary-link);
    }
  }
`;

export default GlobalStyle;
