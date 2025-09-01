import { Box, List, ListItem, Typography, styled } from '@mui/material';
import { FC } from 'react';
import ApexCharts from 'react-apexcharts';

const CharacterisExplained: Record<string, string> = {
  Leadership: 'Leading Bin Genius project, taking initiative in STEM programs and school activities.',
  Teamwork: 'Collaborating effectively in group projects, working well with startup clients at Kanovate.',
  Communication: 'Strong public speaking skills, conducting podcast interviews, presenting at competitions.',
  Innovation: 'Creating AI-powered solutions, developing creative approaches to real-world problems.',
  Adaptability:
    'Thriving in diverse environments from Vietnam to USA to Canada, learning new technologies quickly.',
  Resilience:
    'Overcoming challenges of studying abroad at 13, managing academic and project demands.',
};
const CharacteristicsChartData = {
  series: [
    {
      name: 'Characteristics',
      data: [9, 9, 10, 9, 10, 9],
    },
  ],
  options: {
    chart: {
      toolbar: { show: false },
      id: 'characteristics',
    },
    tooltip: { enabled: false },
    fill: { opacity: 0.5 },
    yaxis: {
      show: false,
      max: 10,
      min: 0,
      tickAmount: 1,
    },
    xaxis: {
      categories: [
        'Leadership',
        'Teamwork',
        'Communication',
        'Innovation',
        'Adaptability',
        'Resilience',
      ],
      labels: {
        show: true,
        style: {
          fontSize: '1.1rem',
          fontWeight: 500,
          colors: '#ffffff',
        },
      }
    },
  },
};

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
}));

const Characteristics: FC = () => {
  return (
    <Box>
      <ApexCharts
        options={CharacteristicsChartData.options}
        series={CharacteristicsChartData.series}
        type="radar"
        height={200}
      />
      <List>
        {Object.keys(CharacterisExplained).map((key) => (
          <ListItem key={key} disablePadding disableGutters>
            <StyledTypography variant="caption">
              <strong>{key}:</strong> {CharacterisExplained[key]}
            </StyledTypography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Characteristics;
