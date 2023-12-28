import { Box, Container, styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import Profile from './profile';
import Menu from './menu';
import { AnimatePresence } from 'framer-motion';

const Wrapper = styled(Container)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 0,
}));

const AppContainer = styled(Box)(({ theme }) => ({
  height: '80vh',
  maxWidth: '1200px',
  overflow: 'hidden',
  position: 'relative',
  flexGrow: 1,
}));

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper maxWidth={false}>
      <AppContainer>
        <AnimatePresence>{children}</AnimatePresence>
        <Profile />
        <Menu />
      </AppContainer>
    </Wrapper>
  );
};
export default Layout;
