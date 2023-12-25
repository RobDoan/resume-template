import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

const Wrapper = styled(motion.div, {
  slot: 'Page',
})(({ theme }) => ({
  position: 'absolute',
  height: '100%',
  top: 0,
  left: '480px',
  right: 0,
  bottom: 0,
  padding: theme.spacing(4, 0),
  overflowY: 'auto',
}));

const PageContentWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4, 0),
}));

const PageCover: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper
      initial={{ x: '-100%', opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: '-100%',
        opacity: 0,
      }}
      transition={{ duration: 2, ease: 'easeInOut' }}
    >
      <PageContentWrapper>{children}</PageContentWrapper>
    </Wrapper>
  );
};

export default PageCover;
