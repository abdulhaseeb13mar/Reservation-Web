import React, { useState } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Home from "../components/Home/Home";
import AddPassenger from "../components/AddPassenger/AddPassenger";

function AdminRoutes() {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  const CloseDrawer = () => setIsOpen(false);
  const OpenDrawer = () => setIsOpen(true);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={OpenDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" style={{ textAlign: "center", width: "100%" }}>
            Reservation System
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/add-passenger" component={AddPassenger} />
        <Redirect to="/" />
      </Switch>
      <Drawer anchor="left" open={isOpen} onClose={CloseDrawer}>
        asdasda
      </Drawer>
    </>
  );
}

export default withRouter(AdminRoutes);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
