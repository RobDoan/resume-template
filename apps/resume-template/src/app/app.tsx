import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Layout } from './components/page-layout';
import AnimatedBackground from './components/animated-backgroud/animated-background';
import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Skills from './pages/skills';
import AboutMe from './pages/about-me';
import { Experience } from './pages/experience';
import { theme } from './mui-theme';

import MyProfile from './pages/my-profile';

export function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatedBackground />
      <Layout>
        <Routes location={location} key={location.pathname}>
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/" element={<MyProfile />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
