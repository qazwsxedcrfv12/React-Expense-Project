import React from 'react'

import NewExpense from './components/NewExpense/NewExpense'
import ExpenseItem from './components/Expenses/ExpenseItem'


function App() {
  
  const expenses = [
    {title: "Chocolate", date:new Date(2021,3,18), amount:165},
    {title: "Vegetables", date: new Date(2021,2,22), amount:565},
    {title: "Cycle", date: new Date(2021,5,8), amount:21965},
    {title: "Fees", date: new Date(2021,4,5), amount:16455},
  ]
  
  return (
    <div>
      <NewExpense />
       <ExpenseItem
         title={expenses[0].title}
         date={expenses[0].date}
         amount={expenses[0].amount}
       />

       <ExpenseItem
         title={expenses[1].title}
         date={expenses[1].date}
         amount={expenses[1].amount}
       />

       <ExpenseItem
         title={expenses[2].title}
         date={expenses[2].date}
         amount={expenses[2].amount}
       />
       
        <ExpenseItem
         title={expenses[3].title}
         date={expenses[3].date}
         amount={expenses[3].amount}
       />
    </div>
  );
}

export default App;
