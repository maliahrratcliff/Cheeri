import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home.js'
import About from './components/pages/About.js';
import Connect from './components/pages/Connect.js';
import Products from './components/pages/Products.js';
import Sneaks from './components/pages/SneakPeeks.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <> 
    <Router>
    <Navbar />
    <Routes>
    <Route path='/' element={ <Home/> } />
    <Route path='/about' element={ <About/> } />
    <Route path='/products' element={ <Products/> } />
    <Route path='/sneaks' element={ <Sneaks/> } />
    <Route path='/connect' element={ <Connect/> } />
    </Routes>
    <Footer/>
    </Router>
      </>
  );
}

export default App;
