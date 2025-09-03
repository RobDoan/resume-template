import { ExperienceTypes } from '../../components/work-experience';

const WorkExperiences: ExperienceTypes.Experience[] = [
  {
    company: 'Bin Genius',
    position: 'Founder',
    date: '2023 - Present',
    location: 'Vancouver, BC',
    expriences: [
      `Led the development of "Bin Genius," an AI & IoT waste-sorting system designed to improve waste-sorting behavior through computer vision and IoT technology (see more at https://www.bingenius.org/)`,
      `This initiative involved designing the mechanical system, calibrating sensors, and developing the app interface, leading to the project's recognition as a finalist at the 2024 Youth Innovation Showcase`
    ],
  },

  {
    company: 'Kanovate Consulting Services Ltd',
    position: 'Product Design & Development Intern',
    date: 'June 2024 - Present',
    location: 'Vancouver, BC',
    expriences: [
      `Contributed to the development of early-stage product prototypes`,
      `Assisted with mechanical design and applied tolerancing principles`,
      `Used OnShape and TinkerCAD to create and test 3D-printed models`,
      `Collaborated with startup clients to refine MVP concepts`
    ],
  },

  {
    company: 'Kanovate Consulting Services Ltd',
    position: 'Podcast Interviewer & Producer Intern',
    date: 'August 2024 - Present',
    location: 'Vancouver, BC',
    expriences: [
      `Conducted interviews with entrepreneurs and innovators for a digital podcast series`,
      `Researched guest backgrounds and prepared insightful, topic-specific questions`,
      `Assisted with post-production editing and publishing using podcast tools`,
      `Helped shape storytelling, tone, and flow for engaging episode formats`,
      `Coordinated scheduling and communication with featured guests`
    ],
  },
];
export default WorkExperiences;
