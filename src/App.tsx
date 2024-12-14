import './App.css';
import React from 'react';
import { GetUser, GetUsers } from './components/GetUsers.tsx';
import Home from './components/Home.tsx';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Coolplanet
      </header>
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<GetUsers />} />
            <Route path="/users/:id" element={<GetUser />} />
            <Route path="*" element={<Navigate replace to="/users" />} />
         </Routes>
      </>

    </div>
  );
}

export default App;
