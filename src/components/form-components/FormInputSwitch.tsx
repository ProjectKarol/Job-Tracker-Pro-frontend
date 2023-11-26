import React from "react";
import { Controller, useFormContext } from "react-hook-form";


import { FormInputProps } from "./FormInputProps";
import { FormControlLabel, Switch } from "@mui/material";

export const FormInputSwitch = ({ name, control, label }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <FormControlLabel
          control={
            <Switch
              checked={value}
              onChange={onChange}
              name={name} />
          }
          label={label}
        />
      )}
    />
  );
};


