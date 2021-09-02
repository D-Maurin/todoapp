import { ITodo, ITodoList } from "../types/todo";
import TodoItem from "./TodoItem";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { ActionType } from "../types/todoActions";
import { Grid } from "@material-ui/core";

function TodoList() {
  const dispatch = useDispatch();
  const todoList: ITodoList = useSelector((state: any) => state.todos);

  const handleDragEnd = (result: DropResult) => {
    if (result.destination)
      dispatch({
        type: ActionType.REORDER,
        source: result.source.index,
        destination: result.destination.index,
      });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="0">
        {(provided, snapshot) => (
          <Grid
            container
            spacing={2}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {todoList.order
              .map((val) => todoList.todos[val])
              .map((value: ITodo, index: number) => (
                <TodoItem key={value.id} id={value.id} index={index} />
              ))}
            {provided.placeholder}
          </Grid>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TodoList;
