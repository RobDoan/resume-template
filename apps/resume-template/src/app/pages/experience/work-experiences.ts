import { ExperienceTypes } from '../../components/work-experience';

const WorkExperiences: ExperienceTypes.Experience[] = [
  {
    company: 'Payfare',
    position: 'Senior Front-End Software Engineer',
    date: 'Apr 2021 - Present',
    location: 'Toronto, Canada',
    expriences: [
      `Uncovered and addressed 2-3 critical, logic-based vulnerabilities in Python code
    that evaded standard security tools. These zaws, if exploited, could have granted
    unauthoriDed access to user accounts and sensitive data, leading to %nancial
    losses, reputational damage, and regulatory non-compliance.`,
      `Developed and championed reusable libraries for microservices, reducing code duplication by 30% and streamlining development workflows.`,
      `Pioneered the first front-end test automation framework, driving code coverage to 80% unit coverage and enabling faster, more reliable deployments. This initiative significantly improved product quality and reduced regression defects.`
    ],
  },

  {
    company: 'Samsung',
    position: 'Senior Back-End Software Engineer III',
    date: 'Feb 2021 - Apr 2022',
    location: 'Montréal, Canada',
    expriences: [
      `Automated release notes & image building (DevOps) eliminated 1-2 hours of daily manual tasks for support developers, boosting team efficiency.`,
      `Diagnosed & resolved critical migration issues upon joining, ensuring server uptime and preventing potential downtime costs.`,
      `Assisted front-end team with debugging, resolving a key issue in hours that had them stumped for a week, saving valuable development time.`
    ],
  },

  {
    company: 'Igotcha Media',
    position: 'Fullstack Software Engineer',
    date: 'Oct 2017 - Feb 2021',
    location: 'Montréal, Canada',
    expriences: [
      `Created internal widgets store with microkernel architecture. Clients easily browse, configure, & preview diverse widgets (weather, news, clocks) directly from the platform, while developers only need to build each widget once for universal use.`,
      `Designed & built Vancouver Metro's app using GTFS data. Deployed across stations, it provides essential navigation features, fulfilling a key client requirement and driving contract success. `,
      `Leveraged TensorFlow.js to build mask detection app for front-store screens, automatically alerting for non-compliance and promoting public health awareness. This innovative solution eliminated the need for costly camera hardware, saving both client and company resources. `,
      `Led successful migration to Openshift and resolved critical security vulnerabilities, ensuring bank-level compliance and securing major client contracts`,
      `Built cross-device framework for digital signage (BrightSign, Samsung TV, LG webOS) using layered architecture. Reduced development time by 50%, launching apps in 2-3 weeks instead of month.`
    ],
  },
  {
    company: 'Tech Outpost Pte Ltd',
    position: 'Co-Founder',
    date: 'May 2013 - Apr 2017',
    location: 'Singapore',
    expriences: [
      `Founded & led Tech Outpost, an outsourcing company, leveraging technical expertise to drive growth & client satisfaction. Notable clients: Angkas (motorcycle taxi platform), Avenue28 (real estate investment), Art Loft Asia (art marketplace)`,
    ],
  },
  {
    company: 'Visual Arrest Group',
    position: 'Software Engineer (Leader)',
    date: 'May 2012 - May 2017',
    location: 'Singapore',
    expriences: [
      `Led a 5-developer team through the full software development lifecycle for this ArtloftAsia platform connecting artists and collectors.`,
    ],
  },
  {
    company: 'Soldsg',
    position: 'Software Engineer',
    date: 'May 2011 - Oct 2012',
    location: 'Singapore',
    expriences: [
      `Built automated scaling system with AWS CloudFormation and ChefSolo to optimize EC2 resources during off-peak hours (early morning). Improved performance during peak hours while reducing server costs by 20%`,
      `Architected and implemented a microservice-based bid price component leveraging Websocket, Node.js, and Redis. This modular design enables independent scaling, faster real-time updates (reducing 500ms delay), and smoother execution, maximizing user responsiveness and platform performance.`,
    ],
  },
  {
    company: 'Ndex',
    position: 'Ruby Developer',
    date: 'Mar 2010 - May 2011',
    location: 'Vietnam',
    expriences: [],
  },
  {
    company: 'Frenxo',
    position: 'Ruby Developer',
    date: 'Mar 2009 - Mar 2010',
    location: 'ThaiLand',
    expriences: [
      `build a social network platform.`
    ],
  },
  {
    company: 'ClearPath',
    position: 'Ruby Developer',
    date: 'May 2008 - Mar 2009',
    location: 'Vietnam',
    expriences: [
      `Worked on a project to check personal credit score for a bank service.`
    ],
  },
  {
    company: 'Mobile Solution Service',
    position: 'Java Developer',
    date: 'May 2006 - May 2008',
    location: 'Vietnam',
    expriences: [
      `Build a music streaming platform`
    ],
  },
];
export default WorkExperiences;
