import { Target, User } from 'react-feather';
import PageCover from '../../components/page-layout/page-cover';
import {
  SectionCol,
  SectionRow,
  SectionTitle,
  SectionWrapper,
} from '../../components/section';
import { Grid, Box, Chip, Typography, styled } from '@mui/material';


const StyledSchool = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 600,
}));


const AboutMe = () => {
  return (
    <PageCover>
      <SectionWrapper>
        <SectionTitle icon={<User size={35} />} title="About Me" />
        <SectionRow>
          <SectionCol>
            <Typography variant="body1">
              For 17 years, I've been building software, from the early days of
              Java and PHP to mastering the versatility of Ruby and Javascript.
              This journey opened doors to both front-end magic (React, Vue) and
              back-end mastery (Ruby, Node.js, Python, Go).
            </Typography>
            <Typography variant="body1" sx={{mt: 1}}>
              My expertise goes beyond front-end and back-end. I confidently
              handle DevOps tools like Docker, Kubernetes, Helm, Jenkins,
              Concourse, ... ensuring smooth deployments and scaling up projects
              effortlessly. At the heart of it all, I'm a problem-solver, a team
              player, and a lifelong learner, always driven by the desire to use
              technology to make a positive impact.
            </Typography>
          </SectionCol>
        </SectionRow>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle icon={<Target size={35} />} title="Education" />
        <SectionRow>
          <SectionCol>
            <Box>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Chip label="2000-2006" color="default" />
                </Grid>
                <Grid item>
                  <Chip label="Ho Chi Minh, Viet Nam" color="default" sx={{}} />
                </Grid>
              </Grid>
              <Box sx={{ mt: 1 }}>
                <StyledSchool>University Of technologies</StyledSchool>
                <Typography variant='body1' sx={{ mt: 1 }}>
                  Bachelor of Science in Computer Science
                </Typography>
              </Box>
            </Box>
          </SectionCol>
        </SectionRow>
      </SectionWrapper>
    </PageCover>
  );
};

export default AboutMe;
