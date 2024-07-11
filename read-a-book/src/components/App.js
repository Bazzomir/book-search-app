import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Ruti from './Ruti';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Ruti />
        <Footer />
      </BrowserRouter>
    </div>
  );
}