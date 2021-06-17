import React, {useState} from 'react';

import './ExpenseForm.css';


const ExpenseForm = ()=>{
    
     const [enteredTitle, setEnteredTitle] = useState('')
     const [enteredAmount, setEnteredAmount] = useState('')
     const [enteredDate, setEnteredDate] = useState('')

     const changeInputField = (e)=>{
           setEnteredTitle(e.target.value)
     }

     const changeAmountField =(e)=>{
          setEnteredAmount(e.target.value);
     }

     const changeDateField=(e)=>{
          setEnteredDate(e.target.value)
     }

     return (
         <form action="#">
              <div className="new-expense__controls">
                   <div className="new-expense__control">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={changeInputField}/>
                   </div>
                   <div className="new-expense__control">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" id="amount" min="1" step="1" onChange={changeAmountField}/>
                   </div>
                   <div className="new-expense__control">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" min="2019-01-01" max="2022-12-31" onChange={changeDateField}/>
                   </div>
                   <div className="new-expense__actions">
                        <button className="submit">Add Expense</button>
                   </div>
              </div>
         </form>
     )
}

export default ExpenseForm

