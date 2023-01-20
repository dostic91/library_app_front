import React from 'react';
import './App.css';
import { Homepage } from './components/HomePage';
import { Footer } from './Navbar and Footer/Footer';
import { Navbar } from './Navbar and Footer/Navbar';

export const App = () => {
  return (
    <div>
        <Navbar />
        <Homepage />
        <Footer />
    </div>
  );
}

