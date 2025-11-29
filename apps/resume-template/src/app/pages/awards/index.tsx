import { Award, Star } from 'react-feather';
import PageCover from '../../components/page-layout/page-cover';
import { SectionWrapper } from '../../components/section';
import { Box, Typography, Card, CardContent, styled, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const ModernCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.palette.grey[100]}`,
  boxShadow: '0 2px 8px rgba(99, 102, 241, 0.08)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 24px rgba(99, 102, 241, 0.15)',
  },
}));

const awards = [
  {
    title: '1st place – Vancouver High School Badminton doubles',
    year: '2025',
    icon: <Trophy size={18} />,
    category: 'Athletics',
  },
  {
    title: 'Finalist – Youth Innovation Showcase',
    year: '2024',
    icon: <Trophy size={18} />,
    category: 'Innovation',
  },
  {
    title: 'Gold Medal – Hong Kong International Science Olympiad (HKISMO)',
    year: '2021',
    icon: <Trophy size={18} />,
    category: 'Science',
  },
  {
    title: 'Silver Medal – World Scholar’s Cup (Tournament of Champions, Yale University)',
    year: '2019',
    icon: <Trophy size={18} />,
    category: 'Academics',
  },
];

const AwardsPage = () => {
  return (
    <PageCover>
      <motion.div
          style={{ padding: '0 20px'}}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Award size={28} style={{ marginRight: 12, color: '#6366F1' }} />
          <Typography variant="h3" sx={{ fontWeight: 700 }}>Awards</Typography>
        </Box>

        <SectionWrapper>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {awards.map((a, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              >
                <ModernCard>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Box sx={{ color: 'primary.main' }}>{a.icon}</Box>
                      <Chip label={a.year} size="small" color="primary" variant="outlined" />
                      <Chip label={a.category} size="small" variant="outlined" />
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{a.title}</Typography>
                  </CardContent>
                </ModernCard>
              </motion.div>
            ))}
          </Box>
        </SectionWrapper>
      </motion.div>
    </PageCover>
  );
};

export default AwardsPage;
