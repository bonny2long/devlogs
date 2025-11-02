import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/DevLog/MainContent';
import Container from './components/Layout/Container';
import './styles/global.css';

const App = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <Container>
        <Sidebar />
        <MainContent />
      </Container>
    </>
  );
};

export default App;