import { Switch, Route } from "react-router";
import HomePage from "./HomePage";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
const Routers = () => (
  <Switch>
    <Route path="/signin">
      <SignInPage />
    </Route>
    <Route path="/signup">
      <SignUpPage />
    </Route>
    <Route path="/">
      <HomePage />
    </Route>
  </Switch>
);

export default Routers;
