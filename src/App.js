import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar } from '@mui/material';
import { Container } from '@mui/system';
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';
import Container_Hobby from './components/Container_Hobby';
import Container_Education from './components/Container_Education';
import Container_Skills from './components/Container_Skills';


function App() {
  return (
    <div className='app-wrapper'>
      <Header />  
      <Nav /> 
      <Container_Hobby/>
      <Container_Education/>
      <Container_Skills/>
      <Footer/>
    </div>
  );
}

export default App; 
