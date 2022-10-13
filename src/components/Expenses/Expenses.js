import './Expenses.css'
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState(new Date().getFullYear())

  const selectYearHandler = (enteredYearData) => {
    setEnteredYear(enteredYearData);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={enteredYear} onSelectYear={selectYearHandler} />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;