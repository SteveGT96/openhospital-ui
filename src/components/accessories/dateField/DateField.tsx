import React, { FunctionComponent, useEffect, useState } from "react";
import {
  DatePicker,
  DesktopDatePicker,
  MobileDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { IProps } from "./types";
import "./styles.scss";
import { FIELD_VALIDATION } from "../../../types";
import { IconButton, TextField, useMediaQuery } from "@material-ui/core";
import { CalendarTodayRounded } from "@material-ui/icons";
import { MuiTextFieldProps } from "@material-ui/pickers/_shared/PureDateInput";
const DateField: FunctionComponent<IProps> = ({
  fieldName,
  fieldValue,
  disableFuture,
  disabled,
  label,
  theme,
  isValid,
  errorText,
  format,
  onChange,
  onMonthChange,
  shouldDisableDate,
  renderDay,
  views,
  required = FIELD_VALIDATION.IDLE,
  open,
  okLabel,
  cancelLabel,
  TextFieldComponent,
}) => {
  const [value, setValue] = useState<Date | null>(null);
  const matches = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    // field value comes in timestamp string (eg. 2020-03-19T14:58:00.000Z)
    fieldValue === "" ? setValue(null) : setValue(new Date(fieldValue));
  }, [fieldValue]);

  const handleDateChange = (date: Date | null) => {
    onChange(date);
    setValue(date);
  };

  const actualClassName = theme === "light" ? "dateField__light" : "dateField";

  const isOpen = open === true ? { open: open } : {};

  return (
    <>
      {matches ? (
        <DesktopDatePicker
          inputFormat={format}
          label={
            required === FIELD_VALIDATION.SUGGESTED ? label + " **" : label
          }
          disabled={disabled}
          disableFuture={disableFuture}
          onChange={(date: any) => handleDateChange(date)}
          value={value}
          onMonthChange={onMonthChange}
          shouldDisableDate={shouldDisableDate}
          allowSameDateSelection
          renderInput={(props: MuiTextFieldProps) =>
            TextFieldComponent ? (
              <TextFieldComponent {...props} />
            ) : (
              <TextField
                {...props}
                id={fieldName}
                error={Boolean(errorText)}
                disabled={disabled}
                helperText={errorText}
                variant="outlined"
                margin="dense"
                required={required === FIELD_VALIDATION.REQUIRED}
                className={actualClassName}
              />
            )
          }
          okText={okLabel}
          cancelText={cancelLabel}
          views={views}
          open={open}
        />
      ) : (
        <MobileDatePicker
          inputFormat={format}
          label={
            required === FIELD_VALIDATION.SUGGESTED ? label + " **" : label
          }
          disabled={disabled}
          disableFuture={disableFuture}
          onChange={(date: any) => handleDateChange(date)}
          value={value}
          onMonthChange={onMonthChange}
          shouldDisableDate={shouldDisableDate}
          allowSameDateSelection
          renderInput={(props: MuiTextFieldProps) =>
            TextFieldComponent ? (
              <TextFieldComponent {...props} />
            ) : (
              <TextField
                {...props}
                id={fieldName}
                error={Boolean(errorText)}
                disabled={disabled}
                helperText={errorText}
                variant="outlined"
                margin="dense"
                required={required === FIELD_VALIDATION.REQUIRED}
                className={actualClassName}
              />
            )
          }
          okText={okLabel}
          cancelText={cancelLabel}
          views={views}
          open={open}
        />
      )}
    </>
  );
};

export default DateField;
