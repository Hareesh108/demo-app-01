import React, { ChangeEvent } from "react";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  TextFieldProps,
  Input,
  SxProps,
  Theme,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface InputFieldProps {
  name: string;
  label: string | React.ReactElement;
  error?: boolean;
  errorMessage?: string;
  variant?: "filled" | "outlined" | "standard" | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  inputProps?: Record<string, string> | Record<number, number>;
  sx?: SxProps<Theme>;
}

const TextFieldComponent: React.FC<InputFieldProps & TextFieldProps> = ({
  name,
  label,
  error,
  variant = "standard",
  errorMessage,
  onChange,
  startAdornment,
  endAdornment,
  value,
  inputProps,
  sx,
  onClick,
  onFocus,
  onBlur,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: "This field is required" }}
      render={({ field, fieldState: { error } }) => (
        <FormControl variant={variant} fullWidth error={!!error}>
          <InputLabel
            sx={{
              fontSize: "16px",
              fontWeight: "normal",
              "&.Mui-focused": {
                color: "#58595B",
              },
              "&.Mui-error": {
                color: "red",
              },
            }}
            htmlFor={`standard-${name}`}
          >
            {label}
          </InputLabel>
          <Input
            {...field}
            onClick={onClick}
            sx={{
              color: "#231F20",
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontSize: "16px",
              fontStyle: "normal",
              caretColor: "#EA0029",
              fontWeight: 700,
              lineHeight: "22px",
              ...(sx && sx),
            }}
            name={name}
            id={`standard-${name}`}
            inputProps={inputProps && { ...inputProps }}
            value={
              typeof field.value === "number" && field.value === 0
                ? ""
                : field.value
            }
            startAdornment={startAdornment || null}
            endAdornment={endAdornment || null}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {error && (
            <FormHelperText id={name} error>
              {error.message}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default TextFieldComponent;
