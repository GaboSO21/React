import { useState } from 'react';
import ExpenseFrom from './ExpenseFrom';
import './NewExpense.css'

const NewExpense = (props) => {

    const [isEditing, setIsEditig] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }

        props.onSaveExpense(expenseData);

    };

    const startEditingHandler = () => {

        setIsEditig(true);

    }

    const stopEditingHandler = () => {

        setIsEditig(false);

    };

    if (isEditing) {

        return (

            <div className='new-expense'>

                <button onClick={startEditingHandler}>Add New Expense</button>

                <ExpenseFrom onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />

            </div>
        )


    }

    return (
        <div className='new-expense'>

            <button onClick={startEditingHandler}>Add New Expense</button>

            {/* <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} /> */}

        </div>
    )

}

export default NewExpense;
