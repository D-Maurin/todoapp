import styled from "styled-components";
import useTodoList from "../../hooks/useTodoList";
import ITodoList from "../../types/ITodoList";

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const BigNum = styled.div`
  font-size: 5em;
`;
const TitleText = styled.div`
  font-size: 2em;
`;

function HomePage() {
  const state: ITodoList = useTodoList();

  const nTodos = Object.keys(state.todos).length;
  const nResps = Object.keys(state.resps).length;

  return (
    <>
      <Title>
        <BigNum>{nTodos}</BigNum>
        <TitleText>todo{nTodos > 1 ? "s" : ""}</TitleText>
      </Title>
      <Title>
        <BigNum>{nResps}</BigNum>
        <TitleText>responsable{nResps > 1 ? "s" : ""}</TitleText>
      </Title>
    </>
  );
}

export default HomePage;
