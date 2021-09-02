import { Alert, Box, Collapse, Container, Fab } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import RespAdd from "../RespAdd";
import RespTable from "../RespTable";

const BottomRightFab = styled(Fab)`
  position: absolute !important;
  right: 20px;
  bottom: 20px;
`;

function RespPage() {
  const [open, setOpen] = useState(false);

  const location: any = useLocation();
  const [notif, setNotif] = useState(location.state?.updated ?? false);

  useEffect(() => {
    const tid = setTimeout(() => setNotif(false), 3000);
    return () => clearTimeout(tid);
  });

  return (
    <Box m="10px">
      <Container>
        <BottomRightFab
          color="primary"
          aria-label="add"
          onClick={() => setOpen(true)}
        >
          <AddIcon />
        </BottomRightFab>

        <Collapse in={notif}>
          <Alert
            onClose={() => {
              setNotif(false);
            }}
            severity="success"
          >
            Le responsable a bien été modifié
          </Alert>
          <Box m="5px"></Box>
        </Collapse>
        <RespTable></RespTable>
        <RespAdd open={open} handleClose={() => setOpen(false)}></RespAdd>
      </Container>
    </Box>
  );
}

export default RespPage;
