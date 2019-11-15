import React from 'react';
import QuoteMachine from './components/quoteMachine';
import logo from './logo.svg';
import './App.css';
import ReactFCCtest from 'react-fcctest';


function App() {
  return (
    <div className='d-flex align-items-center bg-default' style={{minHeight: '100vh'}}>
      <ReactFCCtest />
      <QuoteMachine />
    </div>  
  );
}

export default App;
