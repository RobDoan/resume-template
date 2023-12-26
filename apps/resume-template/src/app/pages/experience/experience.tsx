import { Box, Chip, List, ListItem, Typography, styled } from '@mui/material';
import { Briefcase } from 'react-feather';

import PageCover from '../../components/page-layout/page-cover';
import {
  SectionTitle,
  SectionWrapper,
} from '../../components/section';

import WorkExpreiences from './work-experiences';
import { WorkExperience } from '../../components/work-experience';

const Experience = () => {
  return (
    <PageCover>
      <SectionWrapper>
        <SectionTitle icon={<Briefcase size={35} />} title="Experience" />
        {
          WorkExpreiences.map((item, index) => (
            <WorkExperience key={index} exprience={item} />
          ))
        }
      </SectionWrapper>
    </PageCover>
  );
};

export default Experience;
