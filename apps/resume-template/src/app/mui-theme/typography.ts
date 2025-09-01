import { Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: ((palette: Palette) => TypographyOptions) = (palette) => ({
  fontFamily: [
    "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "sans-serif"
  ].join(','),
  htmlFontSize: 10,
  h1: {
    fontWeight: 800,
    fontSize: '5.6rem',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    color: palette.text.primary,
  },
  h2: {
    fontWeight: 700,
    fontSize: '4.4rem',
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
    color: palette.text.primary,
  },
  h3: {
    fontWeight: 600,
    fontSize: '3.2rem',
    lineHeight: 1.3,
    letterSpacing: '-0.005em',
    color: palette.text.primary,
  },
  h4: {
    fontWeight: 600,
    fontSize: '2.4rem',
    lineHeight: 1.4,
    color: palette.text.primary,
  },
  h5: {
    fontWeight: 500,
    fontSize: '2rem',
    lineHeight: 1.4,
    color: palette.text.primary,
  },
  h6: {
    fontWeight: 500,
    fontSize: '1.8rem',
    lineHeight: 1.5,
    color: palette.text.primary,
  },
  body1: {
    fontSize: '1.6rem',
    lineHeight: 1.6,
    color: palette.text.primary,
  },
  body2: {
    fontSize: '1.4rem',
    lineHeight: 1.5,
    color: palette.text.secondary,
  },
  caption: {
    fontSize: '1.2rem',
    lineHeight: 1.4,
    color: palette.text.secondary,
  },
  button: {
    fontSize: '1.4rem',
    fontWeight: 500,
    textTransform: 'none',
    letterSpacing: '0.01em',
  },
  subtitle1: {
    fontSize: '1.8rem',
    fontWeight: 500,
    lineHeight: 1.5,
    color: palette.text.secondary,
  },
  subtitle2: {
    fontSize: '1.4rem',
    fontWeight: 500,
    lineHeight: 1.4,
    color: palette.text.secondary,
  },
})

export default typography;