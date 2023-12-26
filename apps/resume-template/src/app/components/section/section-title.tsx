import { Box, Typography, styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const TitleWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
}));

const StyledIconWrapper = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(1),
  color: theme.palette.primary.main,
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  '&:first-letter': {
    fontFamily: "satisfy",
    fontSize: "38px",
    textTransform: 'uppercase',
    color: theme.palette.primary.main,
  },
}));

interface TitleProps {
  icon: React.ReactNode;
  title: string
}

const SectionTitle: FC<TitleProps> = ({
  icon,
  title
}) => {
  return (
    <TitleWrapper>
      <StyledIconWrapper>{icon}</StyledIconWrapper>
      <StyledTitle variant="h3">{title}</StyledTitle>
    </TitleWrapper>
  );
};

export default SectionTitle;
