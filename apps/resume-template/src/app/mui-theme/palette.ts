import { ThemeOptions } from "@mui/material";
import { green } from "@mui/material/colors";
import createPalette from "@mui/material/styles/createPalette";
import exp from "constants";

const palette: ThemeOptions["palette"] = createPalette({
  primary: {
    main: green[500],
    light: green[300],
    dark: green[700],
    contrastText: "#ffffff"
  },
});

export default palette;