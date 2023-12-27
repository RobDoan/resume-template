import { Box, Button, Typography, styled } from '@mui/material';
import { ProfileWidth } from '../constants';
import { GitHub, Globe, Linkedin } from 'react-feather';

const StyledImage = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'src',
})<{ src: string }>(({ src }) => ({
  clipPath: 'polygon(0 85%, 50% 100%, 100% 85%, 100% 0, 0 0, 0 85%)',
  width: '100%',
  height: '50%',
  background: `url(${src})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center',
}));

const StyledName = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.h4.fontSize,
}));

const StyledRole = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  color: theme.palette.grey[600],
}));

const Wrapper = styled(Box)(({ theme }) => ({
  width: `${ProfileWidth}px`,
  height: '100%',
  background:
    'linear-gradient(135deg, rgba(120, 204, 109, 0.6) 0%, rgba(120, 204, 109, 0.01) 100%)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2, 0, 0, 2),
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  left: 0,
  top: 0,
}));

const ProfileContainer = styled(Box)(({ theme }) => ({
  boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.05)',
  flexGrow: 1,
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
}));

const NameAndRoleCover = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2, 0, 2, 0),
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SocialLink = styled('a')(({ theme }) => ({
  padding: theme.spacing(1, 2),
  color: theme.palette.grey[600],
  textDecoration: 'none',
  fontSize: theme.typography.body1.fontSize,
  '&:hover': {
    color: theme.palette.grey[900],
  },
}));

const ActionsSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background:
      'radial-gradient(circle at center, #dddddd 0%, rgba(255, 255, 255, 0) 100%)',
    borderRadius: theme.spacing(1),
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2),
  textDecoration: 'none',
  color: theme.palette.grey[600],
  fontSize: theme.typography.body1.fontSize,
  textAlign: 'center',
  position: 'relative',
  '&:first-child': {
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '1px',
      background:
        'radial-gradient(circle at center, #dddddd 0%, rgba(255, 255, 255, 0) 100%)',
    },
  },
}));

const Profile = () => {
  return (
    <Wrapper>
      <ProfileContainer>
        <StyledImage src="assets/images/profile.jpg" />
        <NameAndRoleCover>
          <StyledName>Quy Tran Doan</StyledName>
          <StyledRole>Software Engineer</StyledRole>
        </NameAndRoleCover>
        <SocialLinks>
          <SocialLink href="https://github.com/RobDoan" target="_blank">
            <GitHub size={24} />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/quy-doan-56516512/"
            target="_blank"
          >
            <Linkedin size={24} />
          </SocialLink>
          <SocialLink href="/skills" target="_blank">
            <Globe size={24} />
          </SocialLink>
        </SocialLinks>
        <Box flexGrow={1} />
        <ActionsSection>
          <ActionButton variant="text" fullWidth>
            Download CV
          </ActionButton>
          <ActionButton variant="text" fullWidth href="/contact-me">
            Contact Me
          </ActionButton>
        </ActionsSection>
      </ProfileContainer>
    </Wrapper>
  );
};
export default Profile;
