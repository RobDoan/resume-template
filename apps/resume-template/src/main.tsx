import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
import '@fontsource/satisfy';

import App from './app/app';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter basename=''>
      <App />
    </BrowserRouter>
  </StrictMode>
);
