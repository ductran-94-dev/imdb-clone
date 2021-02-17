const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  direction: 'ltr',
  mixins: {
    gutters: '1rem',
  },
  overrides: {},
  pallete: {
    type: 'light',
    common: {
      white: '#ffffff',
      black: '#000000',
    },
    primary: {
      light: '#385898',
      main: '#385898',
      dark: '#385898',
    },
    secondary: {
      light: '#f0f2f5',
      main: '#f0f2f5',
      dark: '#f0f2f5',
    },
    success: {
      light: '#28a745',
      main: '#28a745',
      dark: '#28a745',
    },
    info: {
      light: '#17a2b8',
      main: '#17a2b8',
      dark: '#17a2b8',
    },
    warning: {
      light: '#ffc107',
      main: '#ffc107',
      dark: '#ffc107',
    },
    danger: {
      light: '#dc3545',
      main: '#dc3545',
      dark: '#dc3545',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  props: {},
  shadows: {},
  typography: {
    htmlFontSize: 16,
    fontFamily: '""Roboto", "Helvetica", "Arial", sans-serif""',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  spacing: {},
  shape: {
    borderRadius: 4,
  },
  transitions: {
    easing: Object,
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    duration: Object,
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};

export default theme;
