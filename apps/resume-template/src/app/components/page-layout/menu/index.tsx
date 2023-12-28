import { ListItem, List, styled, Typography } from '@mui/material';
import { FC } from 'react';
import { AtSign, Briefcase, User, Zap } from 'react-feather';
import { Link, NavLink } from 'react-router-dom';

const StyledList = styled(List)(({ theme }) => ({}));
const StyledMenuItem = styled(ListItem)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.grey[100],
  padding: theme.spacing(2, 0),
  position: 'relative',
  '&:after': {
    position: 'absolute',
    content: '""',
    width: '100%',
    height: '1px',
    bottom: 0,
    left: 0,
    right: 0,
    background:
      'radial-gradient(circle at center, #dddddd 0%, rgba(255, 255, 255, 0) 100%)',
  },
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.grey[600],
  fontSize: theme.typography.body1.fontSize,
  textAlign: 'center',
  '&:visited, &:hover': {
    color: theme.palette.grey[600],
  },
  '&.active': {
    color: theme.palette.primary.main,
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({}));

const Menu: FC = () => {
  return (
    <StyledList>
      <StyledMenuItem>
        <StyledNavLink to="/about-me">
          <User />
          <Typography variant="caption">About Me</Typography>
        </StyledNavLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledNavLink to="/experience">
          <Briefcase />
          <Typography variant="caption">Works</Typography>
        </StyledNavLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledNavLink to="/skills">
          <Zap />
          <Typography variant="caption">Skills</Typography>
        </StyledNavLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledNavLink to="/contact-me">
          <AtSign />
          <Typography variant="caption">Contact</Typography>
        </StyledNavLink>
      </StyledMenuItem>
    </StyledList>
  );
};
export default Menu;
