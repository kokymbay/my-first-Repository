import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar } from '@mui/material';
import { Container } from '@mui/system';
import Header from './components/header';
import Nav from './components/nav';
import Content from './components/content';
import Education from './components/education';
import Skills from './components/skills';
import Footer from './components/footer';


function App() {
  return (
    <div className='app-wrapper'>
      
      <Header />  
      <Nav /> 
      <Content />
      <Education/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
