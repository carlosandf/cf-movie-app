import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from '@pages/Home';
import Layout from '@containers/Layout';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/contac" element={<div>contacto</div>} />
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;