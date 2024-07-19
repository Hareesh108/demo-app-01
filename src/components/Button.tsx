import React from "react";
import { LoadingButton } from "@mui/lab";
import { SxProps, Theme } from "@mui/material";
import { ReactElement } from "react";

type ButtonProps = {
  variant: "text" | "outlined" | "contained" | undefined;
  size: "small" | "large" | "medium" | undefined;
  sx?: SxProps<Theme>;
  btnText: string;
  fullWidth?: boolean;
  disabled?: boolean;
  startIcon?: ReactElement;
  onClick?: () => void;
  loading?: boolean;
};
const Button = ({
  variant,
  size,
  sx,
  btnText,
  fullWidth,
  startIcon,
  disabled,
  onClick,
  loading,
}: ButtonProps) => (
  <LoadingButton
    loading={loading}
    startIcon={startIcon}
    onClick={onClick}
    fullWidth={fullWidth}
    variant={variant}
    size={size}
    disabled={disabled}
    type="submit"
    sx={{
      textTransform: "capitalize",
      cursor: "pointer",
      borderRadius: "50px",
      opacity: 1,
      backgroundColor: "#ea0029",
      "&:hover": {
        // Set hover color
        backgroundColor: "#ea0029",
        cursor: "pointer",
      },
      "&:disabled": {
        backgroundColor: "#f8a6b4", // Change the color for disabled state
        color: "white",
        cursor: "not-allowed",
      },
      ...sx,
    }}
  >
    {btnText}
  </LoadingButton>
);

export default Button;
