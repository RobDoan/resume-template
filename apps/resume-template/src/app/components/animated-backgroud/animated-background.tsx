import { Box, Container, styled } from '@mui/material';
import { motion } from 'framer-motion';

const BackgroundContainer = styled(Container)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background: 'linear-gradient(to bottom right, #50a3a2 0%, #78cc6d 100%)',
  zIndex: -1,
}));

const SquareBoxContainer = styled(motion.div)<{x: number}>(({ theme, x }) => ({
  position: 'absolute',
  display: 'inline-block',
  top: 0,
  left: x,
}));

const SquareBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'size',
})<{ size: number }>(({ theme, size }) => ({
  width: `${size}px`,
  height: `${size}px`,
  background: 'red',
  marginBottom: '10px',
}));

const AnimatedBackground = () => {
  return (
    <BackgroundContainer maxWidth="xl">
      {new Array(5).fill(0).map((_, i) => (
        <SquareBoxContainer x={i * 100}
          animate={{ y: [1000, 0], rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          }}
        >
          <SquareBox key={i} size={(i + 1) * 100} />
        </SquareBoxContainer>
      ))}
    </BackgroundContainer>
  );
};

export default AnimatedBackground;
