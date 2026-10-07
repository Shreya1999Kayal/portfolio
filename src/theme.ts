import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#002f7b" },
    secondary: { main: "#afeb8f" },
    text: { primary: "#002f7b", secondary: "#475569" },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"Lexend", "Segoe UI", system-ui, sans-serif',
    button: { textTransform: "none", fontWeight: 600 },
  },
});

export default theme;
