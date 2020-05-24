import React from 'react';
import './App.css';
import {Header} from './components/Header'
import { Balance } from './components/Balance'
import { Income } from './components/Income'
import { Transactions } from './components/Transactions';
import { AddTransactions } from './components/AddTransactions';
import { GloablProvider } from './context/GlobalState';


function App() {
  return (
    <GloablProvider>
      <Header />
      <div className="container">
        <Balance />
        <Income />
        <Transactions />
        <AddTransactions />
      </div>
    </GloablProvider>
  );
}

export default App;
