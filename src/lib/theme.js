import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
//import { relative } from 'path'

const bodyFont = 'Quicksand, Helvetica, sans-serif'
const headingFont = 'Quicksand, Helvetica, sans-serif'
const unit = 4

const colors = {
  primary: 'rgb(61, 88, 102)',
  secondary: 'rgb(143, 166, 178);',
}

const baseTheme = {
  // See https://material-ui.com/customization/default-theme/
  typography: {
    fontFamily: bodyFont,
    fontSize: 14,
    color: colors.primary,
    h1: { fontFamily: headingFont },
    h2: { fontFamily: headingFont },
    h3: { fontFamily: headingFont },
    h4: { fontFamily: headingFont },
    h5: { fontFamily: headingFont },
    h6: { fontFamily: headingFont },
    // title: { fontFamily: headingFont },
    // headline: { fontFamily: headingFont },
  },
  zIndex: {
    drawer: 1100,
    appBar: 1101,
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: '#EB011E',
    },
    text: {
      primary: colors.primary,
      secondary: colors.secondary,
    },
  },

  shape: {
    borderRadius: 4,
  },

  spacing: unit,
  // spacing: {
  //   unit,
  // },

  // Default props go here.
  props: {
    MuiTextField: {
      variant: 'outlined',
    },
    MuiPaper: {
      elevation: 0,
    },
    MuiButton: {
      // disableRipple: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiMenu: {
      PaperProps: {
        elevation: 1,
      },
    },
    MuiSelect: {
      MenuProps: {
        PaperProps: {
          elevation: 1,
        },
      },
    },

    MuiDialog: {
      PaperProps: {
        elevation: 2,
      },
    },

    MuiAppBar: {
      elevation: 0,
    },

    MuiSnackbarContent: {
      elevation: 2,
    },

    MuiFormControl: {
      margin: 'normal',
    },
  },

  // CSS overrides go here.
  // All valid class names are listed in the API docs for material-ui.
  overrides: {
    MuiButton: {
      root: {
        color: 'red',
        // background: 'rgb(61, 88, 102)'
        //textTransform: 'none',
      },
      contained: {
        'fontWeight': 800,

        'textTransform': 'none',
        'fontSize': '12pt',
        'letterSpacing': '1px',
        'boxShadow': 'none',
        '&$focusVisible': {
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
        },
        '&:hover': {
          boxShadow: 'none',
        },
      },
      containedPrimary: {
        color: 'rgb(239, 243, 245)',
      },
      containedSecondary: {
        'color': 'rgb(239, 243, 245)',
        '&:hover': {
          backgroundColor: colors.primary,
        },
      },
    },
    MuiAppBar: {
      colorPrimary: {
        position: 'relative',
        zIndex: 1101,
        backgroundColor: 'white',
        boxShadow: 'rgba(12, 52, 75, 0.05) 0px 3px 3px',
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        position: 'relative',
        top: '0',
        zIndex: 1100,
        minHeight: 'calc(100vh - 64px)',
        width: '236px',
        borderRight: '0px solid #fff',
        boxShadow: 'rgba(12, 52, 75, 0.05) 0px 3px 3px;',
        padding: '8px 4px',
      },
    },
    MuiList: {
      padding: {
        padding: '8px',
      },
    },
    MuiListItem: {
      root: {
        'borderRadius': '6px',
        'paddingTop': '6px',
        'paddingBottom': '6px',
        'marginBottom': '2px',
        '&$selected': {
          'backgroundColor': 'rgb(239, 243, 245)',
          '&:hover': {
            backgroundColor: 'rgb(239, 243, 245)',
          },
        },
      },
      button: {
        '&:hover': {
          backgroundColor: 'rgb(239, 243, 245)',
        },
      },
    },
    MuiMenuItem: {
      dense: {
        color: colors.primary,
        fontWeight: 700,
      },
    },
    MuiAvatar: {
      colorDefault: {
        backgroundColor: colors.primary,
        fontWeight: 700,
      },
      img: {
        backgroundColor: 'white',
      },
    },
    MuiTypography: {
      root: {
        color: colors.primary,
      },
      h6: {
        fontWeight: 600,
      },
    },
    MuiPaper: {
      root: {
        boxShadow: 'rgba(12, 52, 75, 0.05) 0px 3px 3px',
      },
      elevation1: {
        boxShadow: 'rgba(12, 52, 75, 0.05) 0px 3px 3px',
        borderRadius: '8px',
      },
      elevation0: {
        boxShadow: 'rgba(12, 52, 75, 0.05) 0px 3px 3px',
        borderRadius: '8px',
      },
      rounded: {
        borderRadius: '8px',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: 700,
      },
    },
    MuiListItemIcon: {
      root: {
        color: colors.primary,
        minWidth: '36px',
      },
    },
    MuiTableCell: {
      head: {
        color: colors.primary,
        fontWeight: 700,
        fontSize: '14px',
      },
      root: {
        padding: '8px 16px',
      },
    },
    MuiTab: {
      wrapper: {
        color: colors.primary,
        fontWeight: 700,
        fontSize: '16px',
      },
    },
    MuiTabs: {
      inidicator: {
        backgroundColor: 'red',
      },
    },
    MuiFab: {
      root: {
        'boxShadow': 'none',
        '&$focusVisible': {
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    //   MuiMenuItem: {
    //     root: {
    //       paddingTop: unit,
    //       paddingBottom: unit,
    //     },
    //     gutters: {
    //       paddingLeft: unit * 2,
    //       paddingRight: unit * 2,
    //     },
    //   },
    //   MuiListItem: {
    //     root: {
    //       paddingTop: unit,
    //       paddingBottom: unit,
    //     },
    //     dense: {
    //       paddingTop: unit / 2,
    //       paddingBottom: unit / 2,
    //     },
    //     gutters: {
    //       paddingLeft: unit * 2,
    //       paddingRight: unit * 2,
    //     },
    //   },
    MuiFormControl: {
      // The default margins aren't symmetrical, which makes it difficult to
      // nicely center things placed next to a form control. These values add up
      // to the defaults from material-ui.
      marginNormal: {
        // marginTop: 16,
        // marginBottom: 8,
        marginTop: 12,
        marginBottom: 12,
      },
      marginDense: {
        // marginTop: 8,
        // marginBottom: 4,
        marginTop: 6,
        marginBottom: 6,
      },
    },
  },
}

export const lightTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    type: 'light',
    background: {
      default: 'rgb(244, 247, 250)',
    },
  },
})
