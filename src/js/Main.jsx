import React from 'react'
import ReactDOM from 'react-dom/client'


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <Card />
    <Footer />

  </React.StrictMode>,
)
