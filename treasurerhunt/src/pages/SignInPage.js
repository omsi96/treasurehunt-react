import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import treasureIcon from "../assets/treasure.svg";
import authStore from "../stores/AuthStore";
import { observer } from "mobx-react";
import isEmpty from "../helper/isEmpty";
import Alert from "@material-ui/lab/Alert";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  mainIcon: {
    height: "80px",
  },
}));

const initialUserCredentials = {
  username: "",
  password: "",
};
function SignIn() {
  const classes = useStyles();
  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );
  const inputHandler = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
    console.log(userCredentials);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    authStore.signIn(userCredentials);
  };

  return (
    <Container component="main" maxWidth="xs">
      {authStore.userExists ? <Redirect to="/" /> : <span></span>}
      <CssBaseline />
      <div className={classes.paper}>
        <img src={treasureIcon} alt="treasure" className={classes.mainIcon} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={formSubmitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Email Address"
            name="username"
            autoComplete="email"
            autoFocus
            value={userCredentials.username}
            onChange={inputHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={userCredentials.password}
            onChange={inputHandler}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {authStore.error && <Alert severity="error">{authStore.error}</Alert>}
    </Container>
  );
}

export default observer(SignIn);
