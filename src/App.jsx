import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAt, faStar } from '@fortawesome/free-solid-svg-icons';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './pages/ProductDetails';

library.add(fab, faAt, faStar);

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detalle/:id" element={<ProductDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
