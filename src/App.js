import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);

  fetch('http://localhost:8080/api/categories')
  .then(response => response.json())
  .then(data => setCategories(data));

  return (
    <div className="App">
      <header className="App-header">
          {categories.map(x => <p> {x} </p>)}
      </header>
    </div>
  );
}

export default App;
