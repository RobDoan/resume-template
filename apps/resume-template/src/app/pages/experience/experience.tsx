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
          WorkExpreiences.map((item) => (
            <WorkExperience key={item.company} exprience={item} />
          ))
        }
      </SectionWrapper>
    </PageCover>
  );
};

export default Experience;
