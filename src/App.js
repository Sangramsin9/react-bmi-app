import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
            <div className='container' >
                <div className="d-flex justify-content-center align-items-center" >
                <Calculator/>  
            </div> 
            </div>
  );
}

export default App;
