import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from './routes/AppRoutes';

import './styles/scss/app.scss';

function App() {
  return (
    <>
      <Router>
        <AppRoutes/>
      </Router>
    </>
  );
}

export default App;
