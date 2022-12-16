import {AppInitProvider} from 'providers/AppInitProvider/AppInitProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { App } from './App';
import { ReactQueryProvider } from './providers/ReactQueryProvider/ReactQueryProvider';
import { ThemeProvider } from './theme/ThemeProvider';

createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider>
    <ReactQueryProvider>
      <BrowserRouter>
        <AppInitProvider>
          <App />
          <ToastContainer />
        </AppInitProvider>
      </BrowserRouter>
    </ReactQueryProvider>
  </ThemeProvider>
);
