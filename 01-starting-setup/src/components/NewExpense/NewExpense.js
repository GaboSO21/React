import ExpenseFrom from './ExpenseFrom';
import './NewExpense.css'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }

        props.onSaveExpense(expenseData);

    };

    return (
        <div className='new-expense'>

            <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} />

        </div>
    )

}

export default NewExpense;
