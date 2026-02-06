import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fbc02d", // industrial yellow
    },
    secondary: {
      main: "#212121", // dark industrial black
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    button: { fontWeight: 600 },
  },
});

export default theme;
