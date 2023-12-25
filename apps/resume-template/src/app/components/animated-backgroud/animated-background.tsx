import { Box, Container, styled } from '@mui/material';
import { motion } from 'framer-motion';

interface Box {
  x: string;
  size: number;
  duration: number; // Duration to move from bottom to top
}

const BackgroundContainer = styled(Container)(({}) => ({
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

const SquareBoxContainer = styled(motion.div)<{ x: string; size: number }>(
  ({ x, size }) => ({
    position: 'absolute',
    display: 'inline-block',
    top: 0,
    left: x,
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  })
);


const RandomSizeBox = () => {
  return Math.random() * 200;
};
const RandomDuration = () => {
  return Math.random() * 30 + 30;
};

const Boxes: Box[] = [
  { x: '10%', size: RandomSizeBox(), duration: RandomDuration() },
  { x: '25%', size: RandomSizeBox(), duration: RandomDuration() },
  { x: '30%', size: RandomSizeBox(), duration: RandomDuration() },
  { x: '40%', size: RandomSizeBox(), duration: RandomDuration() },
  { x: '50%', size: RandomSizeBox(), duration: RandomDuration() },
  { x: '60%', size: RandomSizeBox(), duration: RandomDuration() },
  { x: '70%', size: RandomSizeBox(), duration: RandomDuration() },
  { x: '80%', size: RandomSizeBox(), duration: RandomDuration() },
  { x: '90%', size: RandomSizeBox(), duration: RandomDuration() },
];

const AnimatedBackground = () => {
  return (
    <BackgroundContainer maxWidth="xl">
      {Boxes.map((box, i) => (
        <SquareBoxContainer
          key={i}
          size={box.size}
          x={box.x}
          animate={{ y: [1000, 0 - box.size], rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: box.duration,
            ease: 'linear',
          }}
        />
      ))}
    </BackgroundContainer>
  );
};

export default AnimatedBackground;
