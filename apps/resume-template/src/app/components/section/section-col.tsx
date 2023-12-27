import { Box, styled } from "@mui/material";


const SectionCol = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(3, 3, 3, 2),
  borderRight: `1px solid ${theme.palette.divider}`,
  flexGrow: 1,
  width: "50%",
  "&:last-child": {
    borderRight: "none",
  }
}));

export default SectionCol;