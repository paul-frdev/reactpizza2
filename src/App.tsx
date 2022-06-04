import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from './helpers/ScrollToTop';
import { AppRoutes } from './routes/AppRoutes';

import './styles/scss/app.scss';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <AppRoutes />
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
