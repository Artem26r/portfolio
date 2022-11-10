import Container from '@mui/material/Container';
import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Resume} from "./components/Resume";



function App() {
  return (
      <Container maxWidth="xl" className='App'>
            <Header />
            <Resume />
      </Container>
  );
}

export default App;
