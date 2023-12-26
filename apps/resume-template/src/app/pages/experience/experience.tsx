import { Box, Chip, List, ListItem, Typography, styled } from '@mui/material';
import PageCover from '../../components/page-layout/page-cover';
import {
  SectionCol,
  SectionRow,
  SectionTitle,
  SectionWrapper,
} from '../../components/section';
import { Briefcase } from 'react-feather';

const PositionInfo = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.primary.main}`,
  padding: theme.spacing(1, 0),
}));

const ExpirienceInfo = styled(List)(({ theme }) => ({
  padding: theme.spacing(2, 0),
}));
const StyledCompanyName = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  paddingBottom: theme.spacing(1, 0),
}));
const StyledJobTitle = styled(Typography)(({ theme }) => ({ theme }) => ({
  color: theme.palette.text.primary,
  paddingBottom: theme.spacing(1, 0),
}));

const DurationLocationWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
const WorkingDuration = styled(Chip)(({ theme }) => ({
  paddingBottom: theme.spacing(1, 0),
}));

const Experience = () => {
  return (
    <PageCover>
      <SectionWrapper>
        <SectionTitle icon={<Briefcase size={35} />} title="Experience" />
        <SectionRow>
          <SectionCol>
            <PositionInfo>
              <StyledCompanyName variant="body1">Payfare</StyledCompanyName>

              <StyledJobTitle variant="body1">
                Senior Front-End Software Engineer
              </StyledJobTitle>
              <DurationLocationWrapper>
                <WorkingDuration label="April 2021 - Present" color="primary" />

                <Chip label="Canada" />
              </DurationLocationWrapper>
            </PositionInfo>
            <ExpirienceInfo>
              <ListItem>Uncovered and addressed 2-3 critical, logic-based vulnerabilities in Python code
that evaded standard security tools. These zaws, if exploited, could have granted
unauthoriDed access to user accounts and sensitive data, leading to %nancial
losses, reputational damage, and regulatory non-compliance.</ListItem>
              <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque ipsa, dolore eaque veniam cum perspiciatis voluptas perferendis repellendus praesentium eum repudiandae ipsum quasi accusamus recusandae nobis omnis vel magni.</ListItem>

            </ExpirienceInfo>
          </SectionCol>
        </SectionRow>

      </SectionWrapper>

    </PageCover>
  );
};

export default Experience;
