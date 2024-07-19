export default {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
      disableTouchRipple: true,
      focusRipple: true,
    },
    styleOverrides: {
      root: {
        "&:disabled": {
          cursor: "not-allowed",
          pointerEvents: "auto",
        },
        "&:focus": {
          outlineWidth: "0",
        },
      },
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        borderRadius: "var(--boost-button-radius)",
        textTransform: "lowercase" as const,
        display: "inline-flex",
        minHeight: "33px",
        // padding: "5px 25px",
        fontFamily: "Maven Pro",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "14px",
        "&.Mui-disabled": {
          "&:hover": {
            backgroundColor: "#F8A6B4",
            outlineWidth: "0",
            boxShadow: "none",
          },
        },
      },
      containedPrimary: {
        "&:hover": {
          // cursor: "pointer",
          backgroundColor: "#EA0029",
          outlineWidth: "0",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
        },
        "&:active": {
          // cursor: "pointer",
          backgroundColor: "#EA0029",
          outlineWidth: "0",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #EA0029",
        },
      },
      containedSecondary: {
        marginLeft: "5px",
        "&:hover": {
          backgroundColor: "#FFFFFF",
          color: "#EA0029",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        },
        "&:active": {
          backgroundColor: "#F2F2F2",
          color: "#EA0029",
        },
        backgroundColor: "#FFFFFF",
        color: "#EA0029",
        border: "1px solid #EA0029",
      },
      startIcon: {
        marginLeft: "0px",
        marginRight: "0px",
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: "#EA0029",
        width: "32px",
        height: "32px",
        colorSecondary: {
          "&$checked": {
            // backgroundColor: "#EA0029",
            color: "#EA0029",
          },
        },
        // "&.Mui-checked": {
        //   color: "#EA0029"
        // }
      },
    },
  },
  // ===================SideMenu======================
  MuiListItem: {
    styleOverrides: {
      root: {
        padding: "12px 5px 12px 5px",
        "&:hover": {
          // cursor: "pointer",
          backgroundColor: "#EA0029",
          color: "white",
          outlineWidth: "0",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
          "&:active": {
            backgroundColor: "#EA0029",
          },
        },
      },
      // button: {
      //   "&:hover": {
      //     // cursor: "pointer",
      //     backgroundColor: "#EA0029",
      //     color: "white",
      //     outlineWidth: "0",
      //     boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)"
      //   },

      // }
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#EA0029 !important",
          color: "white",
          outlineWidth: "0",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
          "&.Mui-selected ": {
            "&:active": {
              backgroundColor: "#EA0029 !important",
            },
          },
        },
      },
    },
  },
  // ==============sidemenuicon=========
  MuiListItemIcon: {
    styleOverrides: {
      root: {},
    },
  },
  MuiListItemText: {
    styleOverrides: {
      root: {},
      primary: {
        fontWeight: "700 !important",
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      root: {},
      paper: {
        display: "flex",
        justifyContent: "space-between",
      },
    },
  },
  MuiCollapse: {
    styleOverrides: {
      // MuiList: {
      root: {},
      // horizontal: {
      //   width: "100%", transform: "translate3d(-50%, 0px, 0px)", minHeight: "1px"
      // },
      wrapperInner: {
        width: "100%",
      },
    },
  },
  // MuiListItemText: {
  //   defaultProps: {
  //     disableTypography: false,
  //     primaryTypographyProps: {
  //       variant: "caption"
  //     },
  //     secondaryTypographyProps: {
  //       variant: "body2Regular"
  //     }
  //   }
  // },
  // MuiTypography: {
  //   defaultProps: {
  //     variantMapping: {
  //       header3Bold: "p"
  //     }
  //   }
  // },

  // ===================box=============
  // MuiBox: {
  //   styleOverrides: {
  //     root: {
  //       width: "inherit"

  //     },

  //   },
  // },
  // ======================search========
  MuiPaper: {
    styleOverrides: {
      root: {
        color: "var(--boost-textinput-color)",
        fontFamily: "var(--boost-text-font)",
        fontWeight: "var(--boost-text-weight)",
        fontSize: "var(--boost-text-size)",
      },
    },
  },
  // ============for input========
  MuiTextField: {
    styleOverrides: {
      root: {
        color: "var(--boost-textinput-color)",
        fontFamily: "var(--boost-text-font)",
        fontWeight: "var(--boost-text-weight)",
        fontSize: "var(--boost-text-size)",
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        color: "black",
        fontFamily: "var(--boost-text-font)",
        fontWeight: "var(--boost-text-weight)",
        fontSize: "var(--boost-text-size)",
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: "#58595B",
        fontWeight: "var(--boost-label-weight)",
        fontSize: "var(--boost-label-size)",
      },
    },
  },

  MuiInputBase: {
    text: {
      color: "var(--boost-textinput-color)",
    },

    styleOverrides: {
      root: {
        color: "var(--boost-textinput-color)",
        fontFamily: "var(--boost-largetext-font)",
        "&::before": {
          borderBottomColor: "var(--boost-text-white)",
        },
      },
      sizeSmall: {
        color: "var(--boost-textinput-color)",
        fontFamily: "var(--boost-textinput-font)",
        fontWeight: "var(--boost-textinput-weight)",
        fontSize: "var(--boost-textinput-size)",
        paddingTop: "var(--boost-input-padding-top) !important",
        paddingBottom: "var(--boost-input-padding-bottom) !important",
      },
      sizemedium: {
        color: "red",
        paddingTop: "var(--boost-input-padding-top) !important",
        paddingBottom: "var(--boost-input-padding-bottom) !important",
      },
      input: {
        "&::placeholder": {
          color: "var(--boost-placeholder-text-color)",

          opacity: 1,
        },
        "&[type=file]": {
          "&::-webkit-file-upload-button": {
            float: "right",
            color: "var(--boost-primary-color)",
            backgroundColor: "var(--boost-background-white)",
            border: "1px solid #EA0029",
            borderRadius: "4px",
            fontFamily: "var(--boost-imagetext-font)",
            fontWeight: "var(--boost-imagetext-weight)",
            fontSize: "var(--boost-imagetext-size)",
            padding: "3px 10px 3px 10px !important",
            // marginBottom: "20px"
            // marginBottom: "25px",
            // textAlign: "center",

            // marginTop: "3px",
            // width: "110px",
            // height: "25px",

            paddingTop: "-5px !important",
          },
        },
      },
    },
  },
};
