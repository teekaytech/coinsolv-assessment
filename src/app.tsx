import { Route, Routes } from 'react-router-dom';

import CountryList from './components/CountryList';
import NotFound from './not-found';

import links from './links';

export default () => {
  return (
    <Routes>
      <Route path={links.home.link} element={<CountryList />} />
      <Route path={'/:any'} element={<NotFound />} />
    </Routes>
  );
};
