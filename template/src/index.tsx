import {ThemeProvider} from './theme/ThemeProvider';
import {createRoot} from 'react-dom/client';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {ReactQueryProvider} from './providers/ReactQueryProvider/ReactQueryProvider';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider>
    <ReactQueryProvider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </ReactQueryProvider>
  </ThemeProvider>
);
