/* eslint-disable prettier/prettier */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --app-pallete-black: ${props => props.theme.pallete.common.black};
    --app-pallete-white: ${props => props.theme.pallete.common.white};

    --app-pallete-primary: ${props => props.theme.pallete.primary.main};
    --app-pallete-primary-light: ${props => props.theme.pallete.primary.light};
    --app-pallete-primary-dark: ${props => props.theme.pallete.primary.dark};
    
    --app-pallete-secondary: ${props => props.theme.pallete.secondary.main};
    --app-pallete-secondary-light: ${props => props.theme.pallete.secondary.light};
    --app-pallete-secondary-dark: ${props => props.theme.pallete.secondary.dark};
    
    --app-pallete-warning: ${props => props.theme.pallete.warning.main};
    --app-pallete-warning-light: ${props => props.theme.pallete.warning.light};
    --app-pallete-warning-dark: ${props => props.theme.pallete.warning.dark};
    
    --app-pallete-text-primary: ${props => props.theme.pallete.text.primary};
    --app-pallete-text-secondary: ${props => props.theme.pallete.text.secondary};
    --app-pallete-text-disabled: ${props => props.theme.pallete.text.disabled};
    --app-pallete-text-hint: ${props => props.theme.pallete.text.hint};
    
    --app-pallete-border-primary: ${props => props.theme.pallete.grey[900]};
    --app-pallete-shadow-primary: ${props => props.theme.pallete.grey[400]};

    --app-gap-width: ${props => props.theme.mixins.gutters};

    --app-font-size: ${props => props.theme.typography.fontSize};
    --app-font-size-html: ${props => props.theme.typography.htmlFontSize};
    --app-font-weight-light: ${props => props.theme.typography.fontWeightLight};
    --app-font-weight-regular: ${props => props.theme.typography.fontWeightRegular};
    --app-font-weight-medium: ${props => props.theme.typography.fontWeightMedium};
    --app-font-weight-bold: ${props => props.theme.typography.fontWeightBold};

    --app-breakpoint-xs: ${props => props.theme.breakpoints.xs};
    --app-breakpoint-sm: ${props => props.theme.breakpoints.sm};
    --app-breakpoint-md: ${props => props.theme.breakpoints.md};
    --app-breakpoint-lg: ${props => props.theme.breakpoints.lg};
    --app-breakpoint-xl: ${props => props.theme.breakpoints.xl};
  }

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-size: var(--app-font-size);
  }

  // body {
  //   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // }

  // body.fontLoaded {
  //   font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // }

  #app {
    background-color: var(--app-pallete-secondary);
    color: var(--app-pallete-text-primary);
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
    color: var(--app-pallete-text-primary);
    
    &:hover {
      color: var(--app-pallete-text-secondary);
    }
  }
`;

export default GlobalStyle;
