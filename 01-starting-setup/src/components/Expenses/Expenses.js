import './Expenses.css'

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterHandler = (year) => {

        setFilteredYear(year);

    }

    const filteredExpenses = props.expenses.filter((expense) => filteredYear == expense.date.getFullYear());


    return (

        <div>

            <Card className="expenses">

                <ExpensesFilter selected={filteredYear} onFilterSelected={filterHandler} />
                <ExpensesList expenses={filteredExpenses} />

            </Card>

        </div>
    );

};

export default Expenses;
