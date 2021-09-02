import { TextField } from "@material-ui/core";
import { DatePicker, LocalizationProvider } from "@material-ui/lab";
import { useController } from "react-hook-form";
import AdapterMoment from "@material-ui/lab/AdapterMoment";
import moment from "moment";
import "moment/locale/fr";

function ControlledTextInput(props: any) {
  const { name, control, ...otherProps } = props;

  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <LocalizationProvider
      dateAdapter={AdapterMoment}
      locale={moment.locale("fr")}
    >
      <DatePicker
        {...inputProps}
        inputRef={ref}
        renderInput={(params) => (
          <TextField
            error={error}
            helperText={error?.message}
            fullWidth
            autoComplete="off"
            {...params}
            {...inputProps}
            {...otherProps}
          />
        )}
      />
    </LocalizationProvider>
  );
}

export default ControlledTextInput;
