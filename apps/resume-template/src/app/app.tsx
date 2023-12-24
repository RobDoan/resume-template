import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Layout } from './components/page-layout';

export function App() {
  // Use default theme`
  const theme = createTheme({});
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
