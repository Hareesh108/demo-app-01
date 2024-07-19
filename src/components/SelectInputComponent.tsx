import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";
import { includes } from "lodash";
import CustomCheckbox from "./CustomCheckBox";

interface SelectInputProps {
  label: string;
  name: string;
  variant?: "standard" | "outlined" | "filled" | undefined;
  fullWidth?: boolean | false;
  options: { value: string | number; label: string; disabled?: boolean }[];
  onChange?: any;
  error?: boolean;
  errorMessage?: string;
  sx?: SxProps<Theme>;
  inputProps?: Record<string, string>;
  value: string | undefined | string[];
  multiple?: boolean;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "100%",
      maxWidth: "320px",
      borderRadius: "10px",
    },
  },
};

const SelectInputComponent: React.FC<SelectInputProps> = ({
  label,
  name,
  options,
  fullWidth,
  sx,
  inputProps,
  onChange,
  variant = "standard",
  error,
  errorMessage,
  value,
  multiple = false,
}) => !multiple ? (
    <FormControl variant={variant} fullWidth={fullWidth}>
      <InputLabel
        sx={{
          fontSize: "16px",
          fontWeight: "normal",
          "&.Mui-focused": {
            color: "#58595B",
            fontWeight: "bold",
          },
          "&.MuiFormLabel-filled": {
            fontWeight: "bold",
          },
          "&.Mui-error": {
            color: "red",
          },
          "&[data-shrink='false']": {
            "& + .MuiInputBase-formControl": {
              ".MuiSelect-select-MuiInputBase-input-MuiFilledInput-input":
                {
                  backgroundColor: "white",
                },
            },
          },
        }}
      >
        {label}
      </InputLabel>
      <Select
        IconComponent={ExpandMoreIcon}
        // native
        SelectDisplayProps={{ style: { backgroundColor: "inherit" } }}
        MenuProps={{
          // Customize properties of the underlying Menu component
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          // getContentAnchorEl: null, // Disable auto positioning based on the anchor element
          PaperProps: {
            style: {
              maxHeight: 200,
              backgroundColor: "#e0dedf",
              color: "#231F20",
              paddingLeft: "0px",
              marginTop: "-30px",
              width: "auto",
            },
          },
        }}
        sx={{
          color: "#231F20",
          fontFeatureSettings: "'clig' off, 'liga' off",
          fontFamily: "Maven Pro",
          fontSize: "16px",
          fontStyle: "normal",
          caretColor: "#e0dedf",
          fontWeight: 700,
          lineHeight: "22px", // You can specify the line height as a string with the desired unit
          ...(sx && sx),
          "& .MuiSvgIcon-root": {
            display: "none",
          },
        }}
        name={name}
        label={label}
        value={value as ""}
        onChange={onChange}
        inputProps={inputProps && { ...inputProps }}
      >
        <MenuItem
          value=""
          disabled
          sx={{
            backgroundColor: "#e0dedf !important",
            paddingLeft: "35px",
            "& .MuiListItemIcon-root": {
              display: "none", // Hide the check icon in the selected value
            },
          }}
        >
          -Select {label} -
        </MenuItem>
        {options.map((option) => (
          <MenuItem
            key={option.value}
            disabled={option?.disabled || false}
            value={option.value}
            sx={{
              backgroundColor: "#e0dedf !important",
              "&:hover": {
                // Styles for the hovered state
                backgroundColor: "#e0dedf", // Inherit background color
                color: "inherit", // Inherit text color
                // Add any other properties you want to inherit
              },
              "&.Mui-selected": {
                backgroundColor: "#5397F8 !important",
                // Set the background color for the selected item
                color: "#FFFFFF", // Set the text color for the selected item
                "& .MuiListItemIcon-root": {
                  color: "#FFFFFF", // Set the color for the tick icon
                },
              },
            }}
          >
            {value === option.value ? (
              // Show the check icon if the option is selected
              <CheckIcon sx={{ color: "white" }} />
            ) : (
              <CheckIcon sx={{ color: "#e0dedf" }} />
            )}
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText id={name}>{errorMessage}</FormHelperText>}
    </FormControl>
  ) : (
    <FormControl variant={variant} fullWidth={fullWidth}>
      <InputLabel
        sx={{
          fontSize: "16px",
          fontWeight: "normal",
          "&.Mui-focused": {
            color: "#58595B",
            fontWeight: "bold",
          },
          "&.MuiFormLabel-filled": {
            fontWeight: "bold",
          },
        
          "&.Mui-error": {
            color: "red",
          },
          "&[data-shrink='false']": {
            "& + .MuiInputBase-formControl": {
              ".MuiSelect-select-MuiInputBase-input-MuiFilledInput-input":
                {
                  backgroundColor: "white",
                },
            },
          },
        }}
      >
        {label}
      </InputLabel>
      <Select
      
        sx={{
          position:'relative',
          ".MuiSelect-select.MuiSelect-standard.MuiSelect-multiple.MuiInputBase-input.MuiInput-input":
            {
              color: "#231F20",
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontFamily: "Maven Pro",
              fontSize: "16px !important",
              fontStyle: "normal",
              caretColor: "#EA0029",
              fontWeight: "700 !important",
              lineHeight: "22px",
            },
      
        }}
        variant="standard"
        multiple
        IconComponent={ExpandMoreIcon}
        inputProps={inputProps && { ...inputProps }}
        value={value as ""}
        onChange={onChange}
        renderValue={(selected: string[]) => selected
            ?.map((item) => options.find((el) => el.value === item)?.label)
            .join(", ")}
        MenuProps={MenuProps}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} sx={{
            "&.Mui-selected":{
              backgroundColor:'transparent !important',
            },
          }}>
            <Typography
              sx={{
                flex: 1,
                color: "#231F20",
                fontFeatureSettings: "'clig' off, 'liga' off",
                fontFamily: "Maven Pro",
                fontSize: "16px",
                fontStyle: "normal",
                caretColor: "#EA0029",
                fontWeight: "normal",
                lineHeight: "22px",
              }}
            >
              {option.label}
            </Typography>
            <CustomCheckbox checked={includes(value, option.value)} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

export default SelectInputComponent;
