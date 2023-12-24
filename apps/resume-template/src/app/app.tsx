import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Layout } from './components/page-layout';
import AnimatedBackground from './components/animated-backgroud/animated-background';

export function App() {
  // Use default theme`
  const theme = createTheme({});
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatedBackground />
      {/* <Layout>
        ASDKJSLAKDJ
      </Layout> */}
    </ThemeProvider>
  );
}

export default App;
