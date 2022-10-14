import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState(new Date().getFullYear())

  const selectYearHandler = (enteredYearData) => {
    setEnteredYear(enteredYearData);
  }

  const expensesFilteredByYear = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={enteredYear} onSelectYear={selectYearHandler} />
        <ExpensesList items={expensesFilteredByYear}/>
      </Card>
    </div>
  );
}

export default Expenses;