/* eslint-disable @typescript-eslint/no-unused-vars */
import { createTheme, darken, lighten } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';

const aeCyan = 'rgb(87, 182, 178)';
const aePurple = 'rgb(164, 118, 154)';
const aeRed = 'rgb(233, 104, 82)';
const aeBlue = 'rgb(36, 76, 90)';

const primaryMain = aeCyan;
const secondaryMain = aeRed;
const defaultBorder = '#f0ffff';
const offsetFactor = 0.2;

const theme = createTheme({
  palette: createPalette({
    background: {
      default: aeBlue,

      paper: '#eee',
    },
    primary: { dark: darken(primaryMain, offsetFactor), main: primaryMain, light: lighten(primaryMain, offsetFactor) },
    secondary: { dark: darken(secondaryMain, offsetFactor), main: secondaryMain, light: lighten(secondaryMain, offsetFactor) },
    text: {
      primary: aeBlue,
      secondary: aeRed,
      disabled: 'rgb(112, 113, 113)',
      hint: aePurple,
    },
  }),
  spacing: 8,

  typography: {
    //   fontSize: '1.2rem',
    //   '@media (min-width:600px)': {
    //     fontSize: '1.5rem',
    //   },
    //   [theme.breakpoints.up('md')]: {
    //     fontSize: '2.4rem',
    //   },
    fontFamily: `'Centra No 2 Medium'`,
    fontSize: 12,
    // fontWeightLight: 100,
    // fontWeightRegular: 200,
    // fontWeightMedium: 300,
    // fontWeightBold: 500,
  },
  shape: {
    borderRadius: 16,
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: `'Centra No 2 Medium'`,
        },
      },
    },

    MuiSelect: {
      outlined: {
        padding: '8px 14px',
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: 'translate(14px, 10px) scale(1)',
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '8px 14px',
      },
    },
    MuiAppBar: {
      root: {
        border: '0px',
      },
      colorPrimary: {
        backgroundColor: aeCyan,
        color: aeBlue,
      },
    },
    MuiDrawer: {
      paper: {
        borderLeft: 0,
        borderTop: 0,
        borderBottom: 0,
        backgroundColor: '#3f8f8b',
      },
    },
    MuiPaper: {
      root: {
        border: `1px ${defaultBorder} solid`,
      },
    },
    MuiTableContainer: {
      root: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: aeBlue,
      },
    },

    MuiTableRow: {
      root: {
        color: '#000',
      },
      head: {
        color: '#fff',
        backgroundColor: aeRed,
      },
    },
    MuiButton: {
      root: {
        height: 'min-content',
        alignSelf: 'center',
      },
    },
    MuiButtonGroup: {
      grouped: {
        minWidth: '-webkit-fill-available',
      },
    },
    MuiListItemIcon: {
      root: {
        color: '#fff',
      },
    },
  },
});

export { theme };
