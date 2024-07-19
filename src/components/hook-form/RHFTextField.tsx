import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

type Props = TextFieldProps & {
  name: string;
  requireBoolean: string;
  maxSize?: number;
};

export default function RHFTextField(
  { requireBoolean, name, maxSize, ...other }: Props,
  defaultValue: any
) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: requireBoolean }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          // variant={variant}
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          inputProps={{ maxLength: maxSize ?? 128 }}
          error={!!error}
          defaultValue={defaultValue}
          helperText={requireBoolean && error?.message}
          {...other}
        />
      )}
    />
  );
}
