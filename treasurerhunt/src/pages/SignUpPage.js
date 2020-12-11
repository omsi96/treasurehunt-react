import React, { useRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import treasureIcon from "../assets/treasure.svg";
import { useForm } from "react-hook-form";
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

export default function SignIn() {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => {
    alert(data);
  };
  return (
    <Container component="main" maxWidth="xs">
      <Alert severity="success">This is a success alert — check it out!</Alert>

      <CssBaseline />
      <div className={classes.paper}>
        <img src={treasureIcon} alt="treasure" className={classes.mainIcon} />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={register({
              required: true,
            })}
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
            inputRef={register}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="conformPassword"
            label="conform Password"
            type="password"
            id="password"
            autoComplete="current-password"
            ref={register}
          />
          {errors.conformPassword && <p>{errors.conformPassword.message}</p>}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit(onSubmit)}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link to="signin" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
