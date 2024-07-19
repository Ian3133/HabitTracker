// src/App.js
import React from 'react';
import './App.css';
import Checklist from './Checklist';
import DateComponent from './DateComponent';
import Journal from './Journal';    
  
function App() {        
  return (      
    <div className="App">
      <header className="App-header">
        <body>
          <p>Words: <DateComponent /></p>   
          <Checklist />
          <Journal />
        </body>
      </header>
    </div>
  );
}   

export default App;
