import {
  Button,
  CardContent,
  Card,
  CardActions,
  Checkbox,
  TextField,
  Grid,
  Autocomplete,
} from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import useEditMode from "../hooks/useEditMode";
import { ActionType } from "../types/todoActions";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckIcon from "@material-ui/icons/Check";

import styled from "styled-components";
import ITodo from "../types/ITodo";
import IRespList from "../types/IRespList";

const MyLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const MyText = styled.div<{ done: boolean }>`
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
`;

function TodoItem({ id, index }: { id: string; index: number }) {
  const todo: ITodo = useSelector((state: any) => state.todos[id]);
  const resps: IRespList = useSelector((state: any) => state.resps);
  const link = useSelector((state: any) => state.link);

  const dispatch = useDispatch();
  const remove = () => dispatch({ type: ActionType.REMOVE, id: id });
  const edit = (text: string) =>
    dispatch({ type: ActionType.EDIT, text: text, id: id });
  const toggleDone = () => dispatch({ type: ActionType.TOGGLE_DONE, id: id });
  const selectResps = (resps: any) =>
    dispatch({ type: ActionType.SELECT_RESP, id: id, resps: resps });

  const {
    text,
    setText,
    editMode,
    enterEditMode,
    confirmEdition,
    cancelEdition,
  } = useEditMode(todo.todo, edit);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <Grid
          xs={12}
          item
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card>
            {editMode ? (
              <form onSubmit={confirmEdition}>
                <CardContent>
                  <TextField
                    fullWidth
                    variant="standard"
                    id="standard-basic"
                    value={text}
                    onChange={(event: any) => setText(event.target.value)}
                  />
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    startIcon={<CancelIcon />}
                    onClick={cancelEdition}
                  >
                    Annuler
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    startIcon={<CheckIcon />}
                    type="submit"
                  >
                    Valider
                  </Button>
                </CardActions>
              </form>
            ) : (
              <>
                <CardContent>
                  <MyLayout>
                    <div>
                      <Checkbox checked={todo.done} onClick={toggleDone} />
                    </div>
                    <MyText done={todo.done}>{todo.todo}</MyText>
                  </MyLayout>

                  <Autocomplete
                    value={link[id]}
                    onChange={(event: any, data: any) => selectResps(data)}
                    multiple
                    fullWidth
                    options={Object.keys(resps)}
                    getOptionLabel={(option) =>
                      resps[option].firstName + " " + resps[option].name
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        margin="normal"
                        variant="standard"
                        label="Responsables"
                      />
                    )}
                  />
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    startIcon={<EditIcon />}
                    onClick={enterEditMode}
                  >
                    Modifier
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={remove}
                  >
                    Supprimer
                  </Button>
                </CardActions>
              </>
            )}
          </Card>
        </Grid>
      )}
    </Draggable>
  );
}
export default TodoItem;
