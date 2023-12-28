import { Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: ((palette: Palette) => TypographyOptions) = () => ({
  fontFamily: [
    "Poppins", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
  ].join(','),
  htmlFontSize: 10,
  h1: {
    fontWeight: 700,
    fontSize: '4.8rem',
  },
  h3: {
    fontSize: '3rem',
  },
  h4: {
    fontSize: '2.2rem',
  },
  h5: {
    fontSize: '2rem',
  },
  h6: {
    fontSize: '1.8rem',
    fontWeight: 700,
  },
  "body1": {
    fontSize: '1.6rem',
  },
  "body2": {
    fontSize: '1.4rem',
  },
  "caption": {
    fontSize: '1.2rem',
  },
  "button": {
    fontSize: '1.4rem',
  },
  "subtitle1": {
    fontSize: '1.8rem',
  },
})

export default typography;