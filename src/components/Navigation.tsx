import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import MapIcon from "@material-ui/icons/Map";
import HomeIcon from "@material-ui/icons/Home";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import PersonIcon from "@material-ui/icons/Person";

import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router";

const CenterdTypo = styled(Typography)`
  flex-grow: 1;
  text-align: center;
`;

const MyList = styled(List)`
  width: 250px;
`;

function Navigation() {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <CenterdTypo variant="h6">A Todo App</CenterdTypo>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <MyList>
          <ListItem
            button
            onClick={() => {
              history.push("/");
              setOpen(false);
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Accueil</ListItemText>
          </ListItem>
        </MyList>
        <Divider />
        <MyList>
          <ListItem
            button
            onClick={() => {
              history.push("/todo");
              setOpen(false);
            }}
          >
            <ListItemIcon>
              <FormatListBulletedIcon />
            </ListItemIcon>
            <ListItemText>Todo-Liste</ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() => {
              history.push("/resps");
              setOpen(false);
            }}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText>Responsables</ListItemText>
          </ListItem>

          <ListItem
            button
            onClick={() => {
              history.push("/map");
              setOpen(false);
            }}
          >
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText>Carte</ListItemText>
          </ListItem>
        </MyList>
      </Drawer>
    </>
  );
}

export default Navigation;
