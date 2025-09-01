import { ThemeOptions } from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";

const palette: ThemeOptions["palette"] = createPalette({
  primary: {
    main: "#6366F1", // Modern indigo - tech-forward and professional
    light: "#818CF8", // Lighter indigo for hover states
    dark: "#4F46E5", // Darker indigo for emphasis
    contrastText: "#ffffff"
  },
  secondary: {
    main: "#10B981", // Fresh emerald green - represents innovation and growth
    light: "#34D399", // Light emerald for accents
    dark: "#059669", // Dark emerald for depth
    contrastText: "#ffffff"
  },
  background: {
    default: "#FAFAFA", // Clean, soft white background
    paper: "#FFFFFF", // Pure white for cards/panels
  },
  text: {
    primary: "#111827", // Deep gray for high contrast
    secondary: "#6B7280", // Medium gray for secondary text
  },
  grey: {
    50: "#F9FAFB",
    100: "#F3F4F6", 
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
  divider: "#E5E7EB", // Light gray dividers
});

export default palette;