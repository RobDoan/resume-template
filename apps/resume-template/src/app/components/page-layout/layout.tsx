import { Container, styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const PageContainer = styled(Container)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  background: "linear-gradient(to bottom right, #50a3a2 0%, #78cc6d 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const AppContainer = styled(Container)(({ theme }) => ({
  height: "300px",
  background: "white",
}));

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <PageContainer maxWidth="xl">
      <AppContainer maxWidth="md">
          APP
      </AppContainer>
    </PageContainer>
  );
};
export default Layout;
