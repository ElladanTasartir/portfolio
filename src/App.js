import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes'
import Header from './pages/Header/header';

import './pages/Header/styles.css';
import './pages/About/styles.css';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes />
    </BrowserRouter>
  );
}

export default App;
