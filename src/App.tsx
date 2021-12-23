import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeScreen, AboutScreen, DiscoverProblems, SolutionsScreen } from '../src/components/screens';
import { GlobalStyle } from './utils';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='about' element={<AboutScreen />} />
        <Route path='discoverproblems' element={<DiscoverProblems />} />
        <Route path='discoversolutions' element={<SolutionsScreen />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};
