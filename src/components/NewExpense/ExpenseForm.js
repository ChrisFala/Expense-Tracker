import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    //Creating state for each field in form component
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredcategory, setEnteredcategory] = useState('');

    //Re-renders form field on keystroke
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    const categoryChangeHandler = (event) => {
        setEnteredcategory(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        //Gather Entered Form Data
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
            category: enteredcategory,
        };

        props.onSubmitExpenseData(expenseData);
        //Setting fields to blank after form submit
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        setEnteredcategory('')
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        value={enteredAmount}
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        value={enteredDate}
                        min="2019-01-01"
                        max="2023-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Category</label>
                    <input
                        type='string'
                        value={enteredcategory}
                        onChange={categoryChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm