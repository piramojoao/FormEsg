import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChecklistForm from './components/ChecklistForm';
import SuccessPage from './components/SuccessPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ChecklistForm />} />
        <Route path="/cliente/:clienteId" element={<ChecklistForm />} />
        <Route path="/sucesso" element={<SuccessPage />} />
      </Routes>
    </div>
  );
}

export default App;
