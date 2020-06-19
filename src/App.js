import React from 'react';
import './App.css';
import {Header} from './Header.js'
import {Balance} from './Balance.js'
import {IncomeExpenses} from './IncomeExpenses'
import {TransactionList} from './TransactionList.js'
import {AddTransaction} from './AddTransaction.js'
import {GlobalProvider} from './GlobalState'
function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className= "container">
     <Balance/>
     <IncomeExpenses/>
     <TransactionList/>
     <AddTransaction/>
       

       </div>
     
    </GlobalProvider>
  );
}

export default App;
