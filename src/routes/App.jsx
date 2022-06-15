import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from '@pages/Home';
import Layout from '@containers/Layout';
import Trends from '@pages/Trends';
import Category from '@pages/Category';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/trends" element={<Trends />} />
          <Route exact path="/category" element={<Category />} />
            <Route path='/category/:id' element={<Category />} />
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;