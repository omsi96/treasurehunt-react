import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { amber, orange } from "@material-ui/core/colors";

import "./App.css";
import Navbar from "./components/Navbar";
import Routers from "./pages/Routers";

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: amber,
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
