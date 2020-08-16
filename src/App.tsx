import 'react-calendar-heatmap/dist/styles.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Routes from './routes';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />

      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
