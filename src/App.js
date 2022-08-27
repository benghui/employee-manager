import React from 'react';
import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import List from './components/List';
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="employee">
          <Route path="list" element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="edit" element={<Edit />} />
        </Route>
        <Route path="*" element={<Navigate to="/employee/list" replace />} />
      </Routes>
    </div>
  );
}

export default App;
