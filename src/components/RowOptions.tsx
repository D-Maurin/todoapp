import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import { useHistory } from "react-router";
import useRemoveResp from "../hooks/useRemoveResp";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";
import useRespName from "../hooks/useRespName";

function RowOptions({ value }: { value: any }) {
  const history = useHistory();
  const removeResp = useRemoveResp();

  const resp = useRespName(value);

  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => {
          history.push("/resps/" + value);
        }}
      >
        <EditIcon></EditIcon>
      </IconButton>

      <IconButton onClick={() => setOpen(true)}>
        <DeleteIcon></DeleteIcon>
      </IconButton>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirmer la suppression</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Vous êtes sur le point de supprimer le responsable suivant : {resp}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary" autoFocus>
            Annuler
          </Button>
          <Button
            onClick={() => {
              removeResp(value);
              setOpen(false);
            }}
            color="primary"
          >
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default RowOptions;
