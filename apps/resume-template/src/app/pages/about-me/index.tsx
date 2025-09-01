import { Target, User } from 'react-feather';
import PageCover from '../../components/page-layout/page-cover';
import {
  SectionCol,
  SectionRow,
  SectionTitle,
  SectionWrapper,
} from '../../components/section';
import { Grid, Box, Chip, Typography, styled } from '@mui/material';



const AboutMe = () => {
  return (
    <PageCover>
      <SectionWrapper>
        <SectionTitle icon={<User size={35} />} title="About Me" />
        <SectionRow>
          <SectionCol>
            <Typography variant="body1">
              My name is Thien Huynh, and I am going into Year 2 as an IB student at Sir Winston Churchill Secondary School in Vancouver, BC. Empathetic, collaborative and hands-on are qualities that I believe would apply to me and describes how I would approach things at both academic standpoints and the real world.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              I left Vietnam to attend Perkiomen School in Pennsylvania on a full four-year scholarship at a young age of 13. Living and studying abroad, far away from my family or friends at such a young age taught me how to adapt and become more independent in an unknown environment, qualities that are fundamental to both my academic and personal development.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              I have always been fascinated with how mechanical systems work. In my childhood, I had a phase of studying how bicycles work, how each component blend together to spin the wheel when you push on the pedal and how different types of bikes use different mechanics for their own respective purposes. This curious personality I carried with me until now, a passion to create. Thanks to this, a friend and I started our own project, Bin Genius, an AI-powered waste-sorting system that we made for the 2024 Youth Innovation Showcase and landed a position as a finalist in the competition, that was also recognized by CBC news. I have also taken on leadership roles in school-wide STEM initiatives and pursued internships that allow me to explore the intersection of design, engineering, and real-world impact.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Outside of academics, I am also an avid badminton player and have participated in many tournaments for my school team. The sport gave me an option to connect with my peers outside of the academic space and serves as a way to destress in academic heavy periods of my life.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              I am drawn to the University of Toronto's Mechatronics Engineering for its unique and rigorous academic program that emphasizes a more hands-on approach to learning and that it offers an opportunity for me to both learn and work at the same time, allowing me to gain much valuable experience. I am eager to contribute to University of Toronto's learning environment where collaboration and curiosity are traits that are highly regarded, to be part of a community committed to building technologies that make a difference.
            </Typography>
          </SectionCol>
        </SectionRow>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle icon={<Target size={35} />} title="Education" />
        <SectionRow>
          <SectionCol>
            <Box>
              <Grid container justifyContent="space-between" gap={1}>
                <Grid item md={4} xs={12}>
                  <Chip label="2024-2026" color="primary" />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip label="Vancouver, BC, Canada" color="default" />
                </Grid>
              </Grid>
              <Box sx={{ mt: 1 }}>
                <Typography variant='h6'>Sir Winston Churchill Secondary School</Typography>
                <Typography variant='body1' sx={{ mt: 1 }}>
                  International Baccalaureate (IB) Program – Year 2 (Grade 11–12)
                </Typography>
                <Typography variant='body2' sx={{ mt: 0.5 }}>
                  Expected Graduation: June 2026
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ mt: 3 }}>
              <Grid container justifyContent="space-between" gap={1}>
                <Grid item md={4} xs={12}>
                  <Chip label="2023-2024" color="default" />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip label="Vancouver, BC, Canada" color="default" />
                </Grid>
              </Grid>
              <Box sx={{ mt: 1 }}>
                <Typography variant='h6'>Gladstone Secondary School</Typography>
                <Typography variant='body1' sx={{ mt: 1 }}>
                  Grade 10
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ mt: 3 }}>
              <Grid container justifyContent="space-between" gap={1}>
                <Grid item md={4} xs={12}>
                  <Chip label="2022-2023" color="default" />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip label="Pennsylvania, USA" color="default" />
                </Grid>
              </Grid>
              <Box sx={{ mt: 1 }}>
                <Typography variant='h6'>Perkiomen School</Typography>
                <Typography variant='body1' sx={{ mt: 1 }}>
                  Grade 9 - Full Four-Year Scholarship
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ mt: 3 }}>
              <Grid container justifyContent="space-between" gap={1}>
                <Grid item md={4} xs={12}>
                  <Chip label="2020-2022" color="default" />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip label="Ho Chi Minh City, Vietnam" color="default" />
                </Grid>
              </Grid>
              <Box sx={{ mt: 1 }}>
                <Typography variant='h6'>EMASI Van Phuc School</Typography>
                <Typography variant='body1' sx={{ mt: 1 }}>
                  Grades 7–8
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ mt: 3 }}>
              <Grid container justifyContent="space-between" gap={1}>
                <Grid item md={4} xs={12}>
                  <Chip label="2014-2020" color="default" />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Chip label="Ho Chi Minh City, Vietnam" color="default" />
                </Grid>
              </Grid>
              <Box sx={{ mt: 1 }}>
                <Typography variant='h6'>Vietnam Australia International School</Typography>
                <Typography variant='body1' sx={{ mt: 1 }}>
                  Grades 1–6
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
