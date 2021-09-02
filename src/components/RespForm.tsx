import { Grid } from "@material-ui/core";
import ControlledAddressInput from "./reusable/ControlledAddressInput";
import ControlledDatePicker from "./reusable/ControlledDatePicker";
import ControlledTextInput from "./reusable/ControlledTextInput";

function RespForm({ control }: { control: any }) {
  return (
    <Grid container spacing={2}>
      <Grid item sm={6}>
        <ControlledTextInput
          control={control}
          name="firstName"
          label="Prénom"
          margin="normal"
          variant="standard"
        />
      </Grid>

      <Grid item sm={6}>
        <ControlledTextInput
          control={control}
          name="name"
          label="Nom"
          margin="normal"
          variant="standard"
        />
      </Grid>

      <Grid item sm={6}>
        <ControlledDatePicker
          control={control}
          name="birthday"
          label="Date de naissance"
          margin="normal"
          variant="standard"
        />
      </Grid>
      <Grid item sm={6}>
        <ControlledAddressInput
          control={control}
          name="address"
          label="Adresse"
          margin="normal"
          variant="standard"
        />
      </Grid>
    </Grid>
  );
}

export default RespForm;
