import {render} from 'react-dom';
import {ThemeProvider} from './theme/ThemeProvider';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {ReactQueryProvider} from './providers/ReactQueryProvider/ReactQueryProvider';
import 'react-toastify/dist/ReactToastify.css';


render(
  <ThemeProvider>
    <ReactQueryProvider>
      <BrowserRouter>
        <App/>
        <ToastContainer />
      </BrowserRouter>
    </ReactQueryProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
