import { Box, styled } from "@mui/material";

const SectionRow = styled(Box)(({ theme }) => ({
  padding: 0,
  marginTop: theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  borderTop: `1px solid ${theme.palette.divider}`,

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "100%",
  }
}));

export default SectionRow;