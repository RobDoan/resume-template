import { Box, styled } from "@mui/material";

const StyledSectionWrapper = styled(Box)(({ theme }) => ({
  margin: theme.spacing(0, 3, 3, 2),
  display: "flex",
  flexDirection: "column",
}));

export default StyledSectionWrapper