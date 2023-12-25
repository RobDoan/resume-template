import { Container, styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const PageContainer = styled(Container)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  backgroundColor: 'transparent',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
}));

const AppContainer = styled(Container)(({ theme }) => ({
  height: "300px",
  background: "white",
}));

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <PageContainer maxWidth="xl">
      <AppContainer maxWidth="md">
          {children}
      </AppContainer>
    </PageContainer>
  );
};
export default Layout;
