import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Layout } from './components/page-layout';
import AnimatedBackground from './components/animated-backgroud/animated-background';
import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { Education } from './pages/education';
import Skills from './pages/skills';
import { Experience } from './pages/experience';
import { theme } from './mui-theme';

export function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatedBackground />
      <Layout>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
