const computedStyle = getComputedStyle(document.documentElement);
const getHexFromVariable = (variableName: string) =>
  computedStyle.getPropertyValue(variableName).trim();


export default {
  primary: {
    main: getHexFromVariable("--boost-primary-color") || "#EA0029",
    light: getHexFromVariable("--boost-light-action-color") || "#F8A6B4",
    dark: getHexFromVariable("--boost-dark-action-color") || "#EA0029",
  },
  secondary: {
    main: getHexFromVariable("--boost-secondary") || "#FFFFFF",
    light: getHexFromVariable("--boost-light-secondary") || "#469DD800",
  },
  action: {
    disabled: getHexFromVariable("--boost-disabled-color") || "#FFFFFF", // Set for disabled state of components - class .Mui-disabled
    disabledBackground:
      getHexFromVariable("--boost-disabled-color") || "#F8A6B4", // Set for disabled state of components - class .Mui-disabled
  },
  text: {
    disabled: getHexFromVariable("--boost-disabled-color") || "#cecece", // Set for disabled text state of components - class .Mui-disabled
    grayText: getHexFromVariable("--boost-gray-color") || "#58595B",
    charCoal: getHexFromVariable("--boost-textinput-color" || "#231F20"),
  },
  error: {
    main: getHexFromVariable("--boost-signal-error") || "#CC3059",
    background: getHexFromVariable("--boost-alert-notif-error-bg") || "#ffe8e8",
  },
  success: {
    main: getHexFromVariable("--boost-signal-success") || "#87CF6E",
    background:
      getHexFromVariable("--boost-alert-notif-success-bg") || "#87CF6E",
  },
  info: {
    main: getHexFromVariable("--boost-signal-info") || "#F58721",
    background: getHexFromVariable("--boost-alert-notif-info-bg") || "#F58721",
  },
  warning: {
    main: getHexFromVariable("--boost-signal-warning") || "#EDD138",
    light: getHexFromVariable("--boost-alert-notif-warning-bg") || "#ffedd9",
  },
  background: {
    default: getHexFromVariable("var(--boost-background)") || "#fff",
  },
};
