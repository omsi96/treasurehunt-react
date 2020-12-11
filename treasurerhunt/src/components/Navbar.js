import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import authStore from "../stores/AuthStore";
import { observer } from "mobx-react";
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

function Navbar() {
  const classes = useStyles();

  const SignIn = () => (
    <Link className="text-link" to="/signin">
      <Button color="inherit">Login</Button>
    </Link>
  );
  const SignOut = () => (
    <div>
      <h1>UserrrName</h1>
      <Button className="text-link" onClick={authStore.signOut()}>
        <Button color="inherit">Sign Out</Button>
      </Button>
    </div>
  );
  const SignInOutSwitch = () =>
    authStore.userExists ? <SignOut /> : <SignIn />;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className="text-link" to="/">
              Treasure Hunt!
            </Link>
          </Typography>
          <SignInOutSwitch />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default observer(Navbar);
