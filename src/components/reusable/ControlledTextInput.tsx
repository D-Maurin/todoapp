import { TextField } from "@material-ui/core";
import { useController } from "react-hook-form";

function ControlledTextInput(props: any) {
  const { name, control, ...otherProps } = props;

  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return (
    <TextField
      error={error}
      helperText={error?.message}
      autoComplete="off"
      fullWidth
      {...inputProps}
      {...otherProps}
      inputRef={ref}
    />
  );
}

export default ControlledTextInput;
