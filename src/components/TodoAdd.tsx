import {
  Button,
  CardContent,
  Card,
  CardActions,
  TextField,
} from "@material-ui/core";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { ActionType } from "../types/todoActions";

import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";

const MyCard = styled(Card)`
  margin-top: 20px;
`;

function TodoAdd() {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleSubmit = (event: FormEvent) => {
    if (text) dispatch({ type: ActionType.ADD, text: text });
    setText("");
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <MyCard>
        <CardContent>
          <TextField
            type="text"
            fullWidth
            variant="standard"
            value={text}
            onChange={(event: any) => setText(event.target.value)}
          />
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            size="small"
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
          >
            Ajouter
          </Button>
        </CardActions>
      </MyCard>
    </form>
  );
}

export default TodoAdd;
