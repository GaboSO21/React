import ExpenseItem from "./ExpenseItem";

import './ExpenseItem.css';

const ExpensesList = (props) => {

    if (props.expenses.length === 0) {

        return (

            <h2 className="expenses-list_fallback">Found no expenses</h2>

        )

    };

    return (
        <ul className="expenses-list">

            {
                props.expenses.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
                ))
            }
        </ul>
    )


}

export default ExpensesList;
