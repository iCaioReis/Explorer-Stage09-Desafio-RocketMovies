import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import theme from './styles/theme';

import { Routes } from './routes';

import { Home } from './pages/Home';
import { SingIn } from './pages/SingIn';
import { SingUp } from './pages/SingUp';
import { MoviePreview } from './pages/MoviePreview';
import { Profile } from './pages/Profile';
import { CreateMovie } from './pages/CreateMovie';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
