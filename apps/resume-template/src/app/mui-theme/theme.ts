import { Theme, createTheme, responsiveFontSizes } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";

const theme: Theme = responsiveFontSizes(createTheme({
  palette,
  typography,
}));

export default theme