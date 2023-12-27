import { Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: ((palette: Palette) => TypographyOptions) = () => ({
  fontFamily: [
    "Poppins", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
  ].join(','),
  h1: {
    fontWeight: 700,
    fontSize: '48px',
  },
  h3: {
    fontSize: '30px',
  },
  h4: {
    fontSize: '22px',
  },
  h5: {
    fontSize: '20px',
  },
  "body1": {
    fontSize: '16px',
  }
})

export default typography;