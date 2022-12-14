import {FC} from 'react';
import {Route, Routes} from 'react-router';
import ExamplesPage from 'scenes/ExamplesPage';
import HelpPage from 'scenes/HelpPage';
import PageNotFound from 'scenes/PageNotFound';

export const Router: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<ExamplesPage/>}/>
      <Route path='/about' element={<HelpPage/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  );
};
