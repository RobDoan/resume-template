import { Box, List, ListItem, Typography, styled } from '@mui/material';
import { FC } from 'react';
import ApexCharts from 'react-apexcharts';

const CharacterisExplained: Record<string, string> = {
  Mentor: 'Mentoring junior developers, taking initiative in projects.',
  Teamwork: 'Working well with others, being a team player.',
  Testing: 'Unit testing, integration testing, end-to-end testing.',
  Passionate: 'Passionate about computer science.',
  Adaptability:
    'Willingness to learn new technologies and tools. Keeping up with new technologies',
  Delivery:
    'Planning, assessing risks, and delivering projects on time and within budget.',
};
const CharacteristicsChartData = {
  series: [
    {
      name: 'Characteristics',
      data: [8, 7, 9, 10, 10, 8],
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
        'Mentor',
        'Teamwork',
        'Testing',
        'Passionate',
        'Adaptability',
        'Delivery',
      ],
      labels: {
        show: true,
        style: {
          fontSize: '11px',
          fontWeight: 500,
          colors: '#ffffff',
        },
      }
    },
  },
};

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '11px',
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
