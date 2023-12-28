import { Box, Container, styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import Profile from './profile';
import Menu from './menu';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuWidth, ProfileWidth } from './constants';

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

const MenuSectionWrapper = styled(Box)(({ theme }) => ({
  width: `${MenuWidth}px`,
  position: 'absolute',
  left: 0,
  top: 0,
}));

const ProfileSectionWrapper = styled(Box)(({ theme }) => ({
  width: `${ProfileWidth}px`,
  height: '100%',
  position: 'absolute',
  left: `${MenuWidth}px`,
  top: 0,
}));

const PageCoverWrapper = styled(motion.div, {
  slot: 'Page',
})(({ theme }) => ({
  position: 'absolute',
  height: '100%',
  top: 0,
  left: `${ProfileWidth}px`,
  right: 0,
  bottom: 0,
  padding: theme.spacing(4, 0),
}));

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper maxWidth={false}>
      <AppContainer>
        <AnimatePresence>{children}</AnimatePresence>
        <ProfileSectionWrapper>
          <Profile />
        </ProfileSectionWrapper>
        <MenuSectionWrapper>
          <Menu />
        </MenuSectionWrapper>
      </AppContainer>
    </Wrapper>
  );
};
export default Layout;
