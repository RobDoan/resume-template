import { AtSign, Phone, Mail, MapPin, Send } from 'react-feather';
import PageCover from '../../components/page-layout/page-cover';
import {
  SectionWrapper,
} from '../../components/section';
import { Grid, Box, Typography, styled, Card, CardContent, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}08 100%)`,
  borderRadius: theme.spacing(3),
  padding: theme.spacing(6, 4),
  margin: theme.spacing(4),
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

const ContactCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.palette.grey[100]}`,
  boxShadow: '0 2px 8px rgba(99, 102, 241, 0.08)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 24px rgba(99, 102, 241, 0.15)',
  }
}));


const ContactMe = () => {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "Sunnyhuynhthien@gmail.com",
      action: () => window.location.href = "mailto:Sunnyhuynhthien@gmail.com",
      color: "#10B981"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "(672) 472-1602",
      action: () => window.location.href = "tel:+16724721602",
      color: "#6366F1"
    }
  ];

  return (
    <PageCover>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeroSection>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <AtSign size={28} style={{ marginRight: 12, color: '#6366F1' }} />
            <Typography variant="h3" sx={{ fontWeight: 700, color: 'text.primary' }}>
              Contact Me
            </Typography>
          </Box>

          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, lineHeight: 1.4 }}>
            Let's Connect and Build Something Amazing Together
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, opacity: 0.9, maxWidth: 600 }}>
            I'm always excited to connect with fellow innovators, potential collaborators, and anyone
            interested in technology and engineering. Whether you have a project idea, want to discuss
            opportunities, or just want to chat about innovation, feel free to reach out!
          </Typography>
        </HeroSection>
      </motion.div>

      <SectionWrapper>
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {contactMethods.map((method, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ContactCard onClick={method.action} sx={{ cursor: 'pointer', height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <IconButton
                        sx={{
                          backgroundColor: `${method.color}15`,
                          color: method.color,
                          mr: 2,
                          '&:hover': {
                            backgroundColor: `${method.color}25`,
                          }
                        }}
                        size="large"
                      >
                        {method.icon}
                      </IconButton>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {method.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        color: 'text.primary',
                        wordBreak: 'break-all'
                      }}
                    >
                      {method.value}
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', color: method.color }}>
                      <Send size={16} style={{ marginRight: 8 }} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        Click to {method.title.toLowerCase()}
                      </Typography>
                    </Box>
                  </CardContent>
                </ContactCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <ContactCard sx={{ p: 4, background: 'linear-gradient(135deg, #6366F115 0%, #10B98108 100%)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                <MapPin size={20} style={{ marginRight: 8, color: '#10B981' }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Based in Vancouver, BC, Canada
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary">
                Currently studying at Sir Winston Churchill Secondary School
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Available for collaborations, internships, and innovative projects
              </Typography>
            </ContactCard>
          </Box>
        </motion.div>
      </SectionWrapper>
    </PageCover>
  );
};

export default ContactMe;
