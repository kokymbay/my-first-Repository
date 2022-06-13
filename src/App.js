import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar } from '@mui/material';
import { Container } from '@mui/system';
import Header from './components/header';
import Nav from './components/nav';
import Content from './components/content';


function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Content />
    </div>
  );
}

export default App;
