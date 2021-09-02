import { Box, Container } from "@material-ui/core";
import TodoAdd from "../TodoAdd";
import TodoList from "../TodoList";

function TodoPage() {
  return (
    <Box m="10px">
      <Container maxWidth="sm">
        <TodoList />
        <TodoAdd />
      </Container>
    </Box>
  );
}

export default TodoPage;
