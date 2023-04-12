import './Expenses.css'

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

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

                {filteredExpenses.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
                ))}

                {/* < ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} /> */}
                {/* < ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} /> */}
                {/* < ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} /> */}

            </Card>

        </div>
    );

};

export default Expenses;
