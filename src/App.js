import React from 'react'

import NewExpense from './components/NewExpense/NewExpense'
import Expense from './components/Expenses/Expense'


function App() {
  
  const expenses = [
    {title: "Chocolate", date:new Date(2021,3,18), amount:165},
    {title: "Vegetables", date: new Date(2021,2,22), amount:565},
    {title: "Cycle", date: new Date(2021,5,8), amount:21965},
    {title: "Fees", date: new Date(2021,4,5), amount:16455},
  ]
  
  const addExpenseHandler = (expense)=>{
     console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense item={expenses} />
    </div>
  );
}

export default App;
