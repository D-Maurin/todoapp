import { useSelector } from "react-redux";
import styled from "styled-components";
import { ITodoList } from "../../types/todo";

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
  const state: ITodoList = useSelector((state: any) => state.todos);

  return (
    <>
      <Title>
        <BigNum>{Object.keys(state.todos).length}</BigNum>
        <TitleText>todos</TitleText>
      </Title>
      <Title>
        <BigNum>{Object.keys(state.resps).length}</BigNum>
        <TitleText>responsables</TitleText>
      </Title>
    </>
  );
}

export default HomePage;
