import React from 'react';
import QuoteMachine from './components/quoteMachine';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className='d-flex align-items-center bg-default' style={{minHeight: '100vh'}}>
      <QuoteMachine />
    </div>  
  );
}

export default App;
