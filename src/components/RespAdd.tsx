import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@material-ui/core";

import { useForm } from "react-hook-form";
import useAddResp from "../hooks/useAddResp";
import useAddressAutocomplete from "../hooks/useAddressAutocomplete";
import { IResp } from "../types/todo";
import ControlledTextInput from "./reusable/ControlledTextInput";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ControlledDatePicker from "./reusable/ControlledDatePicker";
import ControlledAddressInput from "./reusable/ControlledAddressInput";

const EMPTY_RESPONSABLE = {
  firstName: "",
  name: "",
  birthday: null,
  address: "",
} as IResp;

const schema = yup.object().shape({
  name: yup.string().required("Le nom est requis"),
  firstName: yup.string().required("Le prénom est requis"),
  address: yup.string().required("L'adresse est requise"),
  birthday: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .max(new Date(), "La personne n'est pas encore née !")
    .required("Date de naissance requise"),
});

function RespAdd({ open, handleClose }: { open: boolean; handleClose: any }) {
  const addResponsable = useAddResp();

  const { control, reset, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (responsable: IResp) => {
    addResponsable(responsable);
    handleClose();
    reset(EMPTY_RESPONSABLE);
  };

  const handleCloseAndReset = () => {
    handleClose();
    reset();
  };

  return (
    <Dialog
      open={open}
      onClose={handleCloseAndReset}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>Créer un nouveau responsable</DialogContentText>

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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseAndReset} color="primary">
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit(onSubmit)}>
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default RespAdd;
