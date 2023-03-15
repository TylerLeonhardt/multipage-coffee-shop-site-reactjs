import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Visit from './pages/Visit';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <React.Fragment>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;