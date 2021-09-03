import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Container } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import useEditResp from "../../hooks/useEditResp";
import useResp from "../../hooks/useResp";
import formSchemaResp from "../../types/formSchemaResp";
import IResp from "../../types/IResp";
import RespForm from "../RespForm";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-top: 10px;
  justify-content: flex-end;
`;

function EditRespPage() {
  const { id } = useParams() as any;
  const history = useHistory();

  const resp = useResp(id);
  const editResp = useEditResp();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(formSchemaResp),
    defaultValues: resp,
  });

  const onSubmit = (responsable: IResp) => {
    editResp(id, responsable);
    history.push("/resps", { updated: true });
  };

  return (
    <Box m="10px">
      <Container maxWidth="sm">
        <RespForm control={control}></RespForm>
        <ButtonContainer>
          <Button
            variant="text"
            color="secondary"
            onClick={() => history.push("/resps")}
          >
            Annuler
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSubmit(onSubmit)}
          >
            Modifier
          </Button>
        </ButtonContainer>
      </Container>
    </Box>
  );
}
export default EditRespPage;
