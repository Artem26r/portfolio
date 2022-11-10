import Container from '@mui/material/Container';
import React from 'react';
import './App.css';
import { Dashboard } from './components/Dashboard';
import {Header} from "./components/Header";
import {Resume} from "./components/Resume";



function App() {
  return (
      <Container maxWidth="xl" className='App'>
            <Header />
            <Resume />
            <Dashboard />
      </Container>
  );
}

export default App;
