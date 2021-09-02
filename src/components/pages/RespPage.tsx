import { Box, Fab } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
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

  return (
    <Box m="10px">
      <BottomRightFab
        color="primary"
        aria-label="add"
        onClick={() => setOpen(true)}
      >
        <AddIcon />
      </BottomRightFab>

      <RespTable></RespTable>
      <RespAdd open={open} handleClose={() => setOpen(false)}></RespAdd>
    </Box>
  );
}

export default RespPage;
