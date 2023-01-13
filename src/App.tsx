import { HomePage } from "pages/HomePage";
import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import { TheHeader } from "components/TheHeader";
import { Dashboard } from "pages/Dashboard";
import { Works } from "pages/Works";
import { Container } from "components/Container";

function App() {
  return (
    <Container>
      <TheHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </Container>
  );
}

export default App;
//v.
