import React from 'react';
import World from './components/World/World';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/game' element={<World />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
