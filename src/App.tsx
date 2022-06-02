import React from 'react';
import { HomePage } from './pages/HomePage';
import { BrowserRouter as Router } from "react-router-dom";

import './styles/scss/app.scss';

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
