import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  SxProps,
  Theme,
} from "@mui/material";
import React, { ChangeEvent } from "react";

interface RadioButtoninputProps {
  options: { value: string; label: string }[];
  label: string;
  value: string | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  sx?: SxProps<Theme>;
  name: string;
}

const RadioButtonComponent: React.FC<RadioButtoninputProps> = ({
  options,
  label,
  onChange,
  value,
  errorMessage,
  name,
  sx,
}) => (
    <FormControl>
      <FormLabel
        id="demo-customized-radios"
        sx={{
          color: "#58595B",
          "&.Mui-focused": {
            color: "#58595B",
          },
          fontWeight: "600",
          fontSize: "12px",
        }}
      >
        {label}
      </FormLabel>
      <RadioGroup
        name={name}
        value={value}
        onChange={onChange}
        sx={{
          color: "#58595B",

          "& .MuiTypography-root ": {
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "18px",
          },
          "& .MuiSvgIcon-root": {
            fontSize: 32,
          },
          ...sx,
        }}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.label}
            value={option.value}
            control={
              <Radio
                icon={
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="31"
                      height="31"
                      rx="15.5"
                      stroke="#EA0029"
                    />
                  </svg>
                }
                checkedIcon={
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="12" fill="#EA0029" />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="31"
                      height="31"
                      rx="15.5"
                      stroke="#EA0029"
                    />
                  </svg>
                }
              />
            }
            label={option.label}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );

export default RadioButtonComponent;
