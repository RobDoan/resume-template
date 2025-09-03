import { Box, Button, Typography, styled } from '@mui/material';
import { SocialIcon } from 'react-social-icons';

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
  fontSize: theme.typography.body1.fontSize,
  color: theme.palette.text.secondary,
  fontWeight: 500,
}));

const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  background:
    'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2, 0, 0, 2),
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0),
  },
}));

const ProfileContainer = styled(Box)(({ theme }) => ({
  boxShadow: '0 10px 25px rgba(99, 102, 241, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05)',
  flexGrow: 1,
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.spacing(2),
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

const SocialLink = styled(SocialIcon)(({ theme }) => ({
  margin: theme.spacing(1),
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
  '&:first-of-child': {
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
  const onClickDownload = () => {
    window.location.href = '/cv/resume-thien-huynh.pdf';
  };
  return (
    <Wrapper>
      <ProfileContainer>
        <StyledImage src="assets/images/thien-huynh.jpeg" />
        <NameAndRoleCover>
          <StyledName>Thien Huynh</StyledName>
          <StyledRole>Engineering Student & Innovator</StyledRole>
        </NameAndRoleCover>
        <SocialLinks>

          <SocialLink
            url="https://www.linkedin.com/in/sunny-huynh-38b194382"
            target="_blank"
            style={{ width: '36px', height: '36px' }}
          />

          <SocialLink
            url="/#skills"
            target="_blank"
            style={{ width: '36px', height: '36px' }}
          />
        </SocialLinks>
        <Box flexGrow={1} />
        <ActionsSection>
          <ActionButton variant="text" fullWidth onClick={onClickDownload}>
            Download CV
          </ActionButton>
          <ActionButton variant="text" fullWidth href="#/contact-me">
            Contact Me
          </ActionButton>
        </ActionsSection>
      </ProfileContainer>
    </Wrapper>
  );
};
export default Profile;
