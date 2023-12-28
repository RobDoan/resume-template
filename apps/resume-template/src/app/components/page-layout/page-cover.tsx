import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';
import { MenuWidth, ProfileWidth } from './constants';

const Wrapper = styled(motion.div, {
  slot: 'Page',
})(({ theme }) => ({
  position: 'absolute',
  height: '100%',
  top: 0,
  left: `${ProfileWidth + MenuWidth}px`,
  right: 0,
  bottom: 0,
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 2, 10, 2),
    left: 0,
  },
}));

const PageContentWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'disablePadding',
})<{ disablePadding?: boolean }>(({ theme, disablePadding }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  position: 'relative',
  padding: disablePadding ? theme.spacing(0, 0) : theme.spacing(4, 0),
  overflow: 'auto',
  scrollbarWidth: 'thin', // For Firefox
  '&::-webkit-scrollbar': {
    // For Chrome, Safari and Opera
    width: '5px',
  },
}));

interface PageCoverProps {
  disablePadding?: boolean;
}

const PageCover: FC<PropsWithChildren<PageCoverProps>> = ({
  children,
  disablePadding,
}) => {
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
      <PageContentWrapper disablePadding={disablePadding}>
        {children}
      </PageContentWrapper>
    </Wrapper>
  );
};

export default PageCover;
