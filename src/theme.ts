import { createTheme } from "@mui/material";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  spacing: 12,
  palette: {
    primary: {
      main: "#00BFC7",
      contrastText: "white",
    },
    text: {
      primary: "#0000",
      secondary: "#B9B9B8",
    },
    success: {
      main: green[400],
    },
    info: {
      main: purple[700],
    },
  },
});

export default theme;
