import { Box, styled } from '@mui/material';
import exp from 'constants';
import { Link } from 'react-router-dom';

export const ProfileWidth = 480;
const Wrapper = styled(Box)(({ theme }) => ({
  width: `${ProfileWidth}px`,
  height: '100%',
  backgroundColor: 'red',
  position: 'absolute',
  left: 0,
  top: 0,
}));

const Profile = () => {
  return (
    <Wrapper>
      <Link to="/education">Education</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/skills">Skills</Link>
    </Wrapper>
  );
};
export default Profile;
