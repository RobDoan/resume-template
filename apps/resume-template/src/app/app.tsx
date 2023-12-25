import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Layout } from './components/page-layout';
import AnimatedBackground from './components/animated-backgroud/animated-background';
import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  useLocation,
} from 'react-router-dom';
import { Education } from './pages/education';
import { Experience } from './pages/experience';

export function App() {
  const theme = createTheme({});
  const location = useLocation()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatedBackground />
      <Layout>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<h1>Skills</h1>} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
