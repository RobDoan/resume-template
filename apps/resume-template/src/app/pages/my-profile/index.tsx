import { FC } from "react";
import PageCover from "../../components/page-layout/page-cover";
import Profile from "../../components/page-layout/profile";
import { useMediaQuery, useTheme } from "@mui/material";
import { Navigate } from "react-router-dom";

const MyProfile : FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!isMobile) return <Navigate to="/about-me" />;

  return <PageCover>
    <Profile />
  </PageCover>
};

export default MyProfile;