import { Autocomplete, CircularProgress, TextField } from "@material-ui/core";
import React from "react";
import { useController } from "react-hook-form";
import useAddressAutocomplete from "../../hooks/useAddressAutocomplete";

function ControlledAddressInput(props: any) {
  const { name, control, ...otherProps } = props;

  const { setVal, handleOpen, handleClose, options, loading } =
    useAddressAutocomplete();

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
    <Autocomplete
      onOpen={handleOpen}
      onClose={handleClose}
      {...inputProps}
      options={options}
      loading={loading}
      loadingText="Chargement des suggestions..."
      filterOptions={(x) => x}
      renderInput={(params) => (
        <TextField
          error={error}
          helperText={error?.message}
          {...params}
          {...otherProps}
          variant="standard"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      onChange={(_, data) => {
        inputProps.onChange(data);
      }}
      onInputChange={(event: any, data: any) => setVal(data)}
    />
  );
}

export default ControlledAddressInput;
