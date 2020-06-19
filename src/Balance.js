import React,{useContext} from 'react'
import {GlobalContext} from './GlobalState.js'

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div>
            <h3>BALANCE</h3>
            <h1>${total}</h1>
            
        </div>
    )
}
