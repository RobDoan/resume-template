import { Book } from 'react-feather';
import PageCover from '../../components/page-layout/page-cover';
import {
  SectionCol,
  SectionRow,
  SectionTitle,
  SectionWrapper,
} from '../../components/section';
import SkillBar from './components/skill-bar';
import SkillData from './skill-data';
import Characteristics from './components/characteristics';

const Skills = () => {
  return (
    <PageCover>
      <SectionWrapper>
        <SectionTitle icon={<Book size={35} />} title="Skills" />
        <SectionRow>
          <SectionCol>
            {SkillData.map((item, index) => (
              <SkillBar
                key={item.name}
                skill={item}
              />
            ))}
          </SectionCol>
          <SectionCol>
            <Characteristics />
          </SectionCol>
        </SectionRow>
      </SectionWrapper>
    </PageCover>
  );
};

export default Skills;
