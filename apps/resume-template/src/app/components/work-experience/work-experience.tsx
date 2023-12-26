import { FC } from 'react';
import { Experience } from './types';
import { Box, Chip, ListItem, Typography, styled, List } from '@mui/material';
import { SectionCol, SectionRow } from '../section';

const PositionInfo = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.primary.main}`,
  padding: theme.spacing(1, 0),
}));

const ExperienceInfo = styled(List)(({ theme }) => ({
  padding: theme.spacing(2, 0, 0),
}));
const StyledExperienceItem = styled(ListItem)(({ theme }) => ({
  fontSize: "14px",
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

type WorkExperienceProps = {
  exprience: Experience;
};

const WorkExperience: FC<WorkExperienceProps> = ({ exprience }) => {
  return (
    <SectionRow>
      <SectionCol>
        <PositionInfo>
          <StyledCompanyName variant="body1">
            {exprience.company}
          </StyledCompanyName>

          <StyledJobTitle variant="body1">{exprience.position}</StyledJobTitle>
          <DurationLocationWrapper>
            <WorkingDuration label={exprience.date} color={ /Present/.test(exprience.date) ? 'primary' : 'default' } />

            <Chip label={exprience.location} />
          </DurationLocationWrapper>
        </PositionInfo>
        <ExperienceInfo>
          {exprience.expriences.map((item, index) => (
            <StyledExperienceItem key={index} disableGutters>{item}</StyledExperienceItem>
          ))}
        </ExperienceInfo>
      </SectionCol>
    </SectionRow>
  );
};

export default WorkExperience;
