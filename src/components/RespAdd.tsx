import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

import { useForm } from "react-hook-form";
import useAddResp from "../hooks/useAddResp";

import { yupResolver } from "@hookform/resolvers/yup";
import IResp from "../types/IResp";
import formSchemaResp from "../types/formSchemaResp";
import RespForm from "./RespForm";

function RespAdd({ open, handleClose }: { open: boolean; handleClose: any }) {
  const addResponsable = useAddResp();

  const { control, reset, handleSubmit } = useForm({
    resolver: yupResolver(formSchemaResp),
  });

  const onSubmit = (responsable: IResp) => {
    addResponsable(responsable);
    handleClose();
    reset();
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
      <DialogTitle id="form-dialog-title">
        Créer un nouveau responsable
      </DialogTitle>
      <DialogContent>
        <RespForm control={control} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseAndReset} color="primary">
          Annuler
        </Button>
        <Button color="primary" onClick={handleSubmit(onSubmit)}>
          Ajouter
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default RespAdd;
