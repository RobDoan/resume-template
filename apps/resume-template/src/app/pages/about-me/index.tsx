import { User, MapPin, Calendar, BookOpen, Award } from 'react-feather';
import { Route as JourneyIcon, GraduationCap } from 'lucide-react';
import PageCover from '../../components/page-layout/page-cover';
import {
  SectionWrapper,
} from '../../components/section';
import { Grid, Box, Chip, Typography, styled, Card, CardContent, Link } from '@mui/material';
import { motion } from 'framer-motion';

// Modern styled components for better visual hierarchy
const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}08 100%)`,
  borderRadius: theme.spacing(3),
  padding: theme.spacing(6, 4),
  marginBottom: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}40, transparent)`,
  }
}));

const ModernCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.palette.grey[100]}`,
  boxShadow: '0 2px 8px rgba(99, 102, 241, 0.08)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 24px rgba(99, 102, 241, 0.15)',
  }
}));

const TimelineItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingLeft: theme.spacing(4),
  marginBottom: theme.spacing(3),
  '&:not(:last-child)::before': {
    content: '""',
    position: 'absolute',
    left: '11px',
    top: theme.spacing(4),
    bottom: theme.spacing(-3),
    width: '2px',
    background: `linear-gradient(to bottom, ${theme.palette.primary.main}40, ${theme.palette.grey[200]})`,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '6px',
    top: theme.spacing(1),
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    border: `3px solid ${theme.palette.background.paper}`,
    boxShadow: `0 0 0 3px ${theme.palette.primary.main}20`,
  }
}));

const StatCard = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.grey[100]}`,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '140px',
}));


const AboutMe = () => {
  const highlights = [
    { icon: <Award size={20} />, title: "Bin Genius Founder", desc: "AI waste-sorting finalist", link: "https://www.bingenius.org/" },
    { icon: <BookOpen size={20} />, title: "IB Student", desc: "Year 2 at Churchill Secondary" },
    { icon: <MapPin size={20} />, title: "Global Experience", desc: "Vietnam → USA → Canada" },
  ];

  const onStatCardClick = (link: string | undefined) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <PageCover>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeroSection>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <User size={28} style={{ marginRight: 12, color: '#6366F1' }} />
            <Typography variant="h3" sx={{ fontWeight: 700, color: 'text.primary' }}>
              About Me
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            {highlights.map((highlight) => (
              <Grid item xs={12} md={4} key={highlight.title}>
                <StatCard
                  onClick={() => onStatCardClick(highlight?.link)}
                  sx={{
                    cursor: highlight.link ? 'pointer' : 'default',
                    transition: 'all 0.3s ease',
                    ...(highlight.link && {
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 16px rgba(99, 102, 241, 0.15)',
                        borderColor: 'primary.main',
                      }
                    })
                  }}
                >
                  <Box>
                    <Box sx={{ color: 'primary.main', mb: 1 }}>{highlight.icon}</Box>
                    <Typography variant="h6" sx={{ mb: 0.5 }}>{highlight.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{highlight.desc}</Typography>
                  </Box>
                  {highlight.link && (
                    <Box sx={{ mt: 1, color: 'primary.main', fontSize: '1rem', opacity: 0.8, fontWeight: 500 }}>
                      Click to visit →
                    </Box>
                  )}
                </StatCard>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, lineHeight: 1.4 }}>
            Engineering Student & Innovator from Vietnam, passionate about creating technology that makes a difference
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
            I'm <strong>Thien Huynh</strong>, a Year 2 IB student at Sir Winston Churchill Secondary School in Vancouver, BC.
            Empathetic, collaborative, and hands-on — these qualities define my approach to both academics and real-world challenges.
          </Typography>
        </HeroSection>
      </motion.div>

      {/* Story Section as Timeline */}
      <SectionWrapper>
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <JourneyIcon size={28} style={{ marginRight: 12, color: '#10B981' }} />
            <Typography variant="h4" sx={{ fontWeight: 600 }}>My Journey</Typography>
          </Box>

          <Box sx={{ pl: 2 }}>
            {[
              {
                period: 'Age 13 → Pennsylvania, USA',
                title: 'Perkiomen School Scholarship',
                details: (
                  <>
                    At 13, I left Vietnam to attend <strong>Perkiomen School in Pennsylvania</strong> on a full four-year scholarship.
                    Living abroad taught me to adapt quickly and be independent—skills central to my academic and personal growth.
                  </>
                ),
              },
              {
                period: 'Curiosity → Creation',
                title: 'From Bicycles to Building',
                details: (
                  <>
                    I've always been fascinated by mechanical systems. As a child, I studied how bicycles work — how components blend together when you push the pedal, how different bikes use different mechanics. This curiosity evolved into a passion to create.
                  </>
                ),
              },
              {
                period: '2024',
                title: 'Founded Bin Genius',
                details: (
                  <>
                    Co-founded <Link href="https://www.bingenius.org/" target="_blank" rel="noopener noreferrer" sx={{ fontWeight: 'bold', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Bin Genius</Link>, an AI-powered waste-sorting system—finalist at the 2024 Youth Innovation Showcase, recognized by CBC.
                  </>
                ),
              },
              {
                period: 'Ongoing',
                title: 'Badminton & Balance',
                details: (
                  <>
                    Competitive <strong>badminton</strong> helps me connect with peers and decompress during intensive academic periods, keeping performance sustainable.
                  </>
                ),
              },
            ].map((item, index) => (
              <TimelineItem key={index}>
                <ModernCard>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                      <Chip label={item.period} size="small" color="primary" />
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                      {item.details}
                    </Typography>
                  </CardContent>
                </ModernCard>
              </TimelineItem>
            ))}
          </Box>
        </Box>
      </SectionWrapper>

      {/* Education Timeline */}
      <SectionWrapper>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <GraduationCap size={28} style={{ marginRight: 12, color: '#10B981' }} />
          <Typography variant="h4" sx={{ fontWeight: 600 }}>Education Timeline</Typography>
        </Box>

        <Box sx={{ pl: 2 }}>
          {[
            {
              period: "2024-2026",
              location: "Vancouver, BC, Canada",
              school: "Sir Winston Churchill Secondary School",
              program: "International Baccalaureate (IB) Program – Year 2",
              note: "Expected Graduation: June 2026",
              current: true
            },
            {
              period: "2023-2024",
              location: "Vancouver, BC, Canada",
              school: "Gladstone Secondary School",
              program: "Grade 10"
            },
            {
              period: "2022-2023",
              location: "Pennsylvania, USA",
              school: "Perkiomen School",
              program: "Grade 9",
              note: "Full Four-Year Scholarship"
            },
            {
              period: "2020-2022",
              location: "Ho Chi Minh City, Vietnam",
              school: "EMASI Van Phuc School",
              program: "Grades 7–8"
            },
            {
              period: "2014-2020",
              location: "Ho Chi Minh City, Vietnam",
              school: "Vietnam Australia International School",
              program: "Grades 1–6"
            }
          ].map((edu, index) => (
            <TimelineItem key={index}>
              <ModernCard sx={{
                backgroundColor: edu.current ? 'primary.main' : 'background.paper',
                color: edu.current ? 'white' : 'inherit',
                '& .MuiChip-root': {
                  backgroundColor: edu.current ? 'rgba(255,255,255,0.2)' : undefined
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    <Chip
                      icon={<Calendar size={14} />}
                      label={edu.period}
                      size="small"
                      color={edu.current ? "secondary" : "primary"}
                    />
                    <Chip
                      icon={<MapPin size={14} />}
                      label={edu.location}
                      size="small"
                      variant="outlined"
                    />
                  </Box>

                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {edu.school}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: edu.note ? 1 : 0 }}>
                    {edu.program}
                  </Typography>
                  {edu.note && (
                    <Typography variant="body2" sx={{
                      opacity: 0.8,
                      fontStyle: 'italic',
                      color: edu.current ? 'inherit' : 'text.secondary'
                    }}>
                      {edu.note}
                    </Typography>
                  )}
                </CardContent>
              </ModernCard>
            </TimelineItem>
          ))}
        </Box>
      </SectionWrapper>
    </PageCover>
  );
};

export default AboutMe;
